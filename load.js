(function () {
  fetch('https://cdn.jsdelivr.net/gh/omgbroops/MP2@main/player.html?t=' + Date.now())
    .then(function (r) { return r.text(); })
    .then(function (html) {
      document.open();
      document.write(html); 
      document.close();
      try { var c = parent.document.getElementById('cv'); if (c) c.remove(); } catch (e) {}
    })
    .catch(function (e) {
      try { var c = parent.document.getElementById('cv'); if (c) c.remove(); } catch (e2) {}
      document.body.innerHTML = '<div style="font:14px system-ui,sans-serif;padding:24px;color:#111">Could not load player (' + e + '). Open the jsDelivr player.html URL directly to check it.</div>';
    });
})();
