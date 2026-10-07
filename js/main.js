(function(){
  var T = window.TX, page = document.body.dataset.page;
  var $ = function(s){ return document.querySelector(s); };
  var phBox = function(label, ratio){ return '<div class="ph" style="aspect-ratio:'+ratio+'">[ '+label+' ]</div>'; };

  // Header + footer (edit once, applies to all pages)
  $('#site-header').outerHTML = '<header class="site-header"><div class="container bar">'
    + '<a class="logo" href="index.html"><img src="assets/logos/terranxt.png" alt="Terranxt" height="36" style="display:block;height:36px;width:auto"></a>'
    + '<nav class="nav">' + T.nav.map(function(n){ return '<a href="'+n[0]+'"'+(n[2]===page?' class="active"':'')+'>'+n[1]+'</a>'; }).join('') + '</nav>'
    + '<div class="row"><a class="btn btn-ghost btn-sm" href="products.html">Log in</a><a class="btn btn-primary btn-sm" href="contact.html">Request a demo</a></div>'
    + '</div></header>';

  $('#site-footer').outerHTML = '<footer class="site-footer"><div class="container cols">'
    + '<div class="col"><img src="assets/logos/terranxt.png" alt="Terranxt" style="height:32px;width:auto;align-self:flex-start"><span>Solar projects, on one platform.</span></div>'
    + '<div class="col"><b>Portals</b>' + T.portals.map(function(p){ return '<a href="'+p.url+'" target="_blank" rel="noopener">pvNXT '+p.name+'</a>'; }).join('') + '</div>'
    + '<div class="col"><b>Company</b><a href="company.html">About</a><a href="roadmap.html">Roadmap</a><a href="contact.html">Contact</a><a href="https://www.astongreens.com" target="_blank" rel="noopener">Astongreens</a></div>'
    + '<div class="col"><b>Legal</b><a href="#">Privacy</a><a href="#">Terms</a></div>'
    + '</div><div class="container legal"><span>\u00a9 ' + new Date().getFullYear() + ' Terranxt Pvt Ltd. A pvNXT company, backed by Astongreens.</span><span>Artha is in early access. Investments in solar projects carry risk.</span></div></footer>';

  var R = {
    'portal-cards': function(){ return T.portals.map(function(p){ return '<div class="card alt"><div class="row" style="justify-content:space-between"><span class="ms big">'+p.icon+'</span><span class="tag">'+p.status+'</span></div><span class="mono muted">For '+p.who+'</span><b style="font-size:22px">pvNXT '+p.name+'</b><p style="flex:1">'+p.line+'</p><div class="row" style="gap:16px"><a class="btn btn-primary btn-sm" href="'+p.url+'" target="_blank" rel="noopener">'+p.cta+'</a><a href="demo.html"><b style="font-weight:500">Watch demo</b></a></div></div>'; }).join(''); },
    'portal-detail': function(){ return T.portals.map(function(p){ return '<div class="detail"><div class="stack-14"><div class="row"><span class="ms big">'+p.icon+'</span><span class="tag">'+p.status+'</span></div><h2>pvNXT '+p.name+'</h2><span class="mono muted">For '+p.who+'</span><p class="muted" style="font-size:17px;line-height:1.55">'+p.line+'</p><ul class="checks">'+p.bullets.map(function(b){ return '<li><span class="ms">check</span>'+b+'</li>'; }).join('')+'</ul><div class="row" style="gap:16px"><a class="btn btn-primary btn-sm" href="'+p.url+'" target="_blank" rel="noopener">'+p.cta+'</a><a href="demo.html">Watch demo</a><span class="mono muted">'+p.host+'</span></div></div>'+phBox(p.name+' screenshot \u2192 '+p.shot,'4/3')+'</div>'; }).join(''); },
    'solutions': function(){ return T.solutions.map(function(s){ return '<div class="card" style="padding:28px;gap:12px"><span class="ms big">'+s.icon+'</span><h2 class="h-xs" style="font-size:24px">'+s.who+'</h2><p><b style="color:var(--ink)">Problem.</b> '+s.problem+'</p><p style="flex:1"><b style="color:var(--ink)">With pvNXT.</b> '+s.fix+'</p><a class="link-arrow" href="'+s.url+'" target="_blank" rel="noopener">'+s.cta+'<span class="ms">arrow_forward</span></a></div>'; }).join(''); },
    'flow': function(){ return T.flow.map(function(f){ return '<div class="flow-row"><span class="mono">'+f.n+'</span><div class="stack-8"><div class="row"><span class="ms accent">'+f.icon+'</span><b style="font-size:22px">'+f.t+'</b><span class="mono muted">'+f.tag+'</span></div><p>'+f.d+'</p></div></div>'; }).join(''); },
    'roadmap': function(){ return T.roadmap.map(function(r){ return '<div class="road-row"><b>'+r.name+'</b><span class="tag">'+r.status+'</span><span>'+r.d+'</span></div>'; }).join(''); },
    'demo': function(){ return T.portals.map(function(p){
      var media = p.video ? '<div style="aspect-ratio:16/9"><iframe src="'+p.video+'" title="pvNXT '+p.name+' demo" style="width:100%;height:100%;border:0;border-radius:12px" allowfullscreen></iframe></div>'
        : '<div class="ph" style="aspect-ratio:16/9"><span class="ms">play_circle</span>[ '+p.name+' demo video \u2192 set video URL in js/data.js ]</div>';
      return '<div class="vid">'+media+'<div class="meta"><b>pvNXT '+p.name+'</b><span class="mono muted">For '+p.who+'</span></div></div>'; }).join(''); }
  };
  document.querySelectorAll('[data-render]').forEach(function(el){ var f = R[el.dataset.render]; if (f) el.innerHTML = f(); });

  // Contact form (front-end only; connect to your backend / form service)
  var form = $('#demo-form');
  if (form) form.addEventListener('submit', function(e){
    e.preventDefault();
    // TODO: send new FormData(form) to your endpoint (e.g. Formspree, your API, CRM).
    form.hidden = true; $('#form-done').hidden = false;
  });
})();
