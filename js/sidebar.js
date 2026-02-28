// Generates the sidebar navigation for all section pages
function renderSidebar(){
  const prefix = window.location.pathname.includes('/sections/') ? '../sections/' : 'sections/';
  const homeLink = window.location.pathname.includes('/sections/') ? '../index.html' : 'index.html';

  const nav = document.createElement('nav');
  nav.className = 'sidebar';
  nav.innerHTML = `
    <h2><a href="${homeLink}" style="color:#fff;text-decoration:none;">Externalities Guide</a></h2>
    <div class="nav-group">Foundations</div>
    <a href="${prefix}sec0-reference.html">Quick Reference Card</a>
    <a href="${prefix}sec1-definitions.html">1. What Are Externalities?</a>
    <div class="nav-group">Negative Externalities</div>
    <a href="${prefix}sec2-negative.html">2. Negative Ext & Efficiency</a>
    <a href="${prefix}sec3-tax.html">3. Corrective Tax (Pigouvian)</a>
    <div class="nav-group">Positive Externalities</div>
    <a href="${prefix}sec4-positive.html">4. Positive Ext & Efficiency</a>
    <a href="${prefix}sec5-subsidy.html">5. Corrective Subsidy</a>
    <div class="nav-group">Special Topics</div>
    <a href="${prefix}sec6-distortion.html">6. Distortion vs Corrective</a>
    <a href="${prefix}sec7-neg-numerical.html">7. Negative Ext Numerical</a>
    <a href="${prefix}sec8-pos-numerical.html">8. Positive Ext Numerical</a>
    <a href="${prefix}sec9-crude-oil.html">9. Crude Oil Surplus</a>
    <a href="${prefix}sec10-monopoly.html">10. Monopoly + Externalities</a>
    <a href="${prefix}sec11-permits.html">11. Tax vs Permits</a>
    <div class="nav-group">Practice & Review</div>
    <a href="${prefix}sec12-exams.html">12. Exam Practice (4 Exams)</a>
    <a href="${prefix}sec13-errors.html">13. Error Flags Summary</a>
    <a href="${prefix}sec14-triangle-proof.html">14. Triangle Rule Proof</a>
  `;
  document.body.prepend(nav);

  // Add menu button for mobile
  const btn = document.createElement('button');
  btn.className = 'menu-btn';
  btn.innerHTML = '&#9776;';
  btn.onclick = function(){ nav.classList.toggle('open'); };
  document.body.prepend(btn);
}

document.addEventListener('DOMContentLoaded', renderSidebar);
