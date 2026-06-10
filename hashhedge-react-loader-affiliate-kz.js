(function(){
  var script = document.currentScript;
  var base = script ? new URL(".", script.src).href : "";
  window.__HH_BASE__ = base;
  var root = document.getElementById("hashhedge-root") || (script && script.parentElement);
  if (root && !root.id) root.id = "hashhedge-root";

  var TIMEOUT_MS = 7000;

  function loadCss(href){
    return new Promise(function(resolve){
      if (document.querySelector('link[rel="stylesheet"][href="' + href + '"]')) return resolve();
      var l = document.createElement("link");
      l.rel = "stylesheet"; l.href = href;
      l.onload = resolve; l.onerror = resolve;
      document.head.appendChild(l);
    });
  }

  function loadScript(src){
    return new Promise(function(resolve, reject){
      var existing = document.querySelector('script[data-hh-src="' + src + '"]');
      if (existing && existing.dataset.hhDone === "1") return resolve();
      var s = document.createElement("script");
      s.src = src; s.async = false;
      s.crossOrigin = "anonymous";
      s.dataset.hhSrc = src;
      var done = false;
      var timer = setTimeout(function(){
        if (done) return;
        done = true;
        s.onload = s.onerror = null;
        try { s.remove(); } catch(e){}
        reject(new Error("Timeout: " + src));
      }, TIMEOUT_MS);
      s.onload  = function(){ if (done) return; done = true; clearTimeout(timer); s.dataset.hhDone = "1"; resolve(); };
      s.onerror = function(){ if (done) return; done = true; clearTimeout(timer); try { s.remove(); } catch(e){} reject(new Error("Failed: " + src)); };
      document.head.appendChild(s);
    });
  }

  function loadFirst(urls){
    return urls.reduce(function(chain, url){
      return chain.catch(function(){ return loadScript(url); });
    }, Promise.reject());
  }

  loadCss("https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800;900&display=swap");
  loadCss(base + "hashhedge-react.css");

  loadFirst([
    "https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js",
    "https://unpkg.com/react@18.3.1/umd/react.production.min.js"
  ])
  .then(function(){
    return loadFirst([
      "https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js",
      "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"
    ]);
  })
  .then(function(){ return loadScript(base + "hashhedge-react-app-affiliate-kz.js"); })
  .catch(function(err){
    console.error("HashHedge Affiliate KZ loader failed", err);
    if (root && !root.childNodes.length) {
      root.innerHTML = '<div style="min-height:320px;display:flex;align-items:center;justify-content:center;background:#08080a;color:#f5f1e8;font:600 18px system-ui,sans-serif;text-align:center;padding:32px;">HashHedge жүктелмеді. Бетті жаңартыңыз.</div>';
    }
  });
})();
