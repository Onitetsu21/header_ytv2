const Tag = require('../toolkit');

function CategoriesList(articles) {

  // Récupérer les données pertinantes
  let categories = new Set();

  for(var a in articles) {
    categories.add(articles[a].category);
  }

  // Génerer le tableau de LI
  var itemList = [];

  categories.forEach(function(elm) {
    itemList.push(Tag.create("li", {}, [elm]));
  });
  
  // Créer le composant HTML
  var categoriesList = Tag.create("div", {"class": "Categories"}, [
    Tag.create("p", {}, ["Liste des catégories"]),
    Tag.create("ul", {}, itemList)
  ]);

  return categoriesList;
}

module.exports = CategoriesList;
