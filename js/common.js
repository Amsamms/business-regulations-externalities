// ============ SHARED UTILITY FUNCTIONS ============

function toggleAccordion(el){
  el.classList.toggle('open');
  el.nextElementSibling.classList.toggle('show');
}

// Sidebar active link highlight
function initSidebar(){
  document.querySelectorAll('.sidebar a').forEach(a=>{
    a.addEventListener('click',function(){
      document.querySelectorAll('.sidebar a').forEach(x=>x.classList.remove('active'));
      this.classList.add('active');
      if(window.innerWidth<769) document.querySelector('.sidebar').classList.remove('open');
    });
  });
  // Highlight current page
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.includes(currentPage)){
      a.classList.add('active');
    }
  });
}

// Toggle Plotly trace visibility
function toggleTrace(divId, traceIndex, btn){
  const div = document.getElementById(divId);
  btn.classList.toggle('active');
  const vis = btn.classList.contains('active');
  Plotly.restyle(div, {visible: vis}, [traceIndex]);
}

// Menu button toggle
function toggleMenu(){
  document.querySelector('.sidebar').classList.toggle('open');
}

// Exam fill-input check
function checkInputs(containerId){
  document.querySelectorAll('#'+containerId+' .fill-input').forEach(inp=>{
    const ans = parseInt(inp.dataset.answer);
    const val = parseInt(inp.value);
    inp.className = 'fill-input ' + (val===ans ? 'correct' : 'incorrect');
  });
}

// Exam fill-input reveal
function revealInputs(containerId, solutionId){
  if(solutionId) document.getElementById(solutionId).style.display='block';
  document.querySelectorAll('#'+containerId+' .fill-input').forEach(inp=>{
    inp.value = inp.dataset.answer;
    inp.className = 'fill-input correct';
  });
}

// Formula card toggle
function toggleFormulaCard(el){
  el.classList.toggle('collapsed');
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', function(){
  initSidebar();
  // Init charts if function exists
  if(typeof initCharts === 'function') initCharts();
});
