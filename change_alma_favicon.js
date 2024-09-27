

// Fonction pour changer le favicon
function changeFavicon(faviconUrl) {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = browser.extension.getURL(faviconUrl);
}

// Obtenir l'URL de la page actuelle
var currentUrl = window.location.href;

// Extraction du code de l'institution dans sous-domaine
var match = currentUrl.match(/pudb-(\w+)\.alma/);
if (match && match[1]) {
  var institution = match[1]; 
  
  // Chemin du favicon en fonction du code de l'institution
  var faviconUrl = 'icons/'+ institution + '.ico';
  
  // Changer le favicon (la zone réseau garde l'icone Alma)
  if (institution != "network"){
    changeFavicon(faviconUrl);
  }
  
}
