
(function() {
  const domain = window.location.hostname;

  // Fonction pour changer le favicon
  function changeFavicon(src) {
      let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = browser.extension.getURL(src);
      document.getElementsByTagName('head')[0].appendChild(link);
  }

  // Fonction pour changer le title
  function changeTitle(text) {
      let title = document.querySelector("title");
      if (!title) {
          title = document.createElement('title');
          document.body.insertBefore(title, document.body.firstChild);
      }
      title.textContent = "Alma " + text;
  }

// Extraction du code de l'institution dans sous-domaine
var match = domain.match(/pudb-(\w+)\.alma/);
if (match && match[1]) {
  var institution = match[1]; 
  console.log(institution)
  
  // Chemin du favicon en fonction du code de l'institution
  var faviconUrl = 'icons/'+ institution + '.ico';
  
  // Changer le favicon (la zone réseau garde l'icone Alma)
  if (institution != "network"){
    changeFavicon(faviconUrl);
    changeTitle(institution);
  }
  
}
})();