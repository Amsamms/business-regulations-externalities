# Externalities Interactive Learning Resource

## Project Overview
Interactive HTML learning resource for the "Business, Regulations and Fiscal Policies" EMBA course covering **Externalities & Government Policy**. Merges materials from 3 instructors (Dr. Said slides, Dr. Said handwritten notes, Dr. Galal slides) into a single comprehensive resource with interactive charts, fill-the-blank exercises, and step-by-step exam solutions.

## Architecture
Multi-page HTML with shared CSS/JS. No build tools - pure static files served directly.

```
index.html              # Landing page with 14 section cards
css/styles.css          # Shared CSS (variables, responsive, print, components)
js/sidebar.js           # Dynamic sidebar generator (path-aware for root vs /sections/)
js/common.js            # Shared utilities (accordion, toggleTrace, checkInputs, etc.)
sections/
  sec0-reference.html   # Quick reference formula card (toggleable)
  sec1-definitions.html # Definitions, classification, concept map (click-to-expand)
  sec2-negative.html    # Negative ext + efficiency (MEC slider, DWL toggle, 5 accordions)
  sec3-tax.html         # Pigouvian tax (tax slider, revenue toggle, price labels, carbon chart)
  sec4-positive.html    # Positive ext (MEB slider, Fig 8/8-A toggle, vaccination table, NSB bar)
  sec5-subsidy.html     # Corrective subsidy (slider, surplus bar +35/+35/+20/-80/+10, geometric)
  sec6-distortion.html  # Wheat guarantee price (slider 40-90, real-time surplus table+bar)
  sec7-neg-numerical.html # Dr. Galal MEC=$20 (fill-table, chart, error flag)
  sec8-pos-numerical.html # Dr. Galal MEB=$20 (fill-table, chart, error flag)
  sec9-crude-oil.html   # 4-step surplus decomposition (accordions, reconciliation +10 vs -10)
  sec10-monopoly.html   # 3 scenario toggles + MEC slider (perfect/over/under)
  sec11-permits.html    # Tax vs permits (2 sliders, comparison grid)
  sec12-exams.html      # 4 exams (ENPI 2025, 2025 Other, July 2024, Alex 2024)
  sec13-errors.html     # Error flags summary (4 errors documented with corrections)
```

## CDN Dependencies
- **Plotly.js 2.27.0** - Interactive charts (20 charts total across sections)
- **MathJax 3** - LaTeX formula rendering

## Key Technical Details
- **Sidebar** path detection: `window.location.pathname.includes('/sections/')` determines link prefixes
- **initCharts()** convention: Each page defines this function; `common.js` calls it on DOMContentLoaded
- **toggleTrace()** uses `Plotly.restyle` with trace index - trace order in code must match button onclick indices
- **Fill-the-blank**: Uses `data-answer` attributes on `<input>` elements, checked via `parseInt` comparison
- **Concept map** in sec1: Uses CSS `max-height`/`opacity` transitions with `.expanded` class toggle
- **Formula card** in sec0: Uses `.collapsed` class with `max-height:0` transition

## Economics Data (Cross-Page Consistency)
Two datasets are reused across multiple pages:

### Vaccination Table (sec4, sec5, sec9)
Q=1-6, MPB=[100,90,80,70,60,50], MPC=[60,70,80,90,100,110]
- sec4/sec5: MEB=20 (positive ext), Market Q=3, Efficient Q=4
- sec9: MEC=20 (negative ext), Market Q=3, Efficient Q=2

### Dr. Galal Table (sec7, sec8, sec12-exam3)
Units 10-60, MPB=[80,70,60,50,40,30], MPC=[20,30,40,50,60,70]
- sec7: MEC=20, Market Q=40/P=50, Efficient Q=30/P=60
- sec8: MEB=20, Market Q=40/P=50, Efficient Q=50/P=60

### Wheat (sec6)
Supply: P=0.5Q, Demand: P=70-0.2Q, Equilibrium: Q=100, P=50

### ENPI 2025 Exam (sec12-exam1)
MPB slopes: 2000-45*(q-60), MPC slopes: 2000-15*(q-60), MEB=600

## Triangle/Polygon Coordinate Convention
All efficiency gain/DWL triangles follow this pattern:
- **Wide side** at Q_market (where the MSB-MSC gap exists)
- **Point** at Q_efficient (where MSB=MSC, gap=0)
- For positive ext: `x=[qMarket, qMarket, qEff], y=[MSC@qMarket, MSB@qMarket, MSB=MSC@qEff]`
- For negative ext: `x=[qEff, qMarket, qMarket], y=[MSB=MSC@qEff, MSB@qMarket, MSC@qMarket]`

## Error Flags in Materials
1. Dr. Galal labels market eq (Q=40) as "efficient" in negative ext (should be Q=30)
2. Dr. Galal says equilibrium at Q=30 in positive ext (table shows Q=40)
3. Crude oil surplus: Original notes had arithmetic error (-35 should be -25 for producer/consumer), corrected net = +10 efficiency gain
4. "Gouvian Tax" = "Pigouvian Tax" (Arabic transliteration, not error)

## Bugs Found During Verification (11 total, all fixed)
| Round | Count | What |
|-------|-------|------|
| 1 | 2 | Degenerate DWL triangles (sec7 line 93, sec12 line 188) - identical vertices |
| 2 | 3 | Broken external links (sec5 x2, sec10 x1) - 404 URLs |
| 3 | 3 | Static concept map, Price Labels toggle wrong target, slider range 55→40 |
| 4 | 3 | Triangle coordinates wrong on Exam1, Exam2, sec5 - wide side on wrong end |

## Running Locally
```bash
cd /home/amsamms/projects/business_regulations_Externalities
python3 -m http.server 8081
# Open http://localhost:8081/
```

## Source Materials
```
Externalities/Business Lec 6 part 1&2 (Dr Said).pdf  # Handwritten notes (12 pages)
Externalities/ch.3-EXTERNALITIES.pdf                   # Dr. Said slides (63 pages)
Externalities/externalities.pdf                        # Dr. Galal slides (15 pages)
Exams/                                                 # 4 exam papers
```
