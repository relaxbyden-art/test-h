
(function(){
  var script = document.currentScript;
  var base = script ? new URL(".", script.src).href : "";
  window.__HH_BASE__ = base;
  var root = document.getElementById("hashhedge-root") || script.parentElement;
  if (!root.id) root.id = "hashhedge-root";

  function loadCss(href){
    return new Promise(function(resolve){
      if (document.querySelector('link[href="' + href + '"]')) return resolve();
      var l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = href;
      l.onload = resolve;
      l.onerror = resolve;
      document.head.appendChild(l);
    });
  }
  function loadScript(src){
    return new Promise(function(resolve, reject){
      if (document.querySelector('script[src="' + src + '"]')) return resolve();
      var s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  loadCss("https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800;900&display=swap")
    .then(function(){ return loadCss(base + "hashhedge-react.css?v=20260508-why-mobile-1"); })
    .then(function(){ return loadScript("https://unpkg.com/react@18.3.1/umd/react.production.min.js"); })
    .then(function(){ return loadScript("https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"); })
    .then(function(){ return loadScript(base + "hashhedge-react-app.js?v=20260508-why-mobile-1"); })
    .catch(function(err){ console.error("HashHedge loader failed", err); });
})();
