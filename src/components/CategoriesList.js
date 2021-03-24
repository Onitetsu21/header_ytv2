import Tag from '../toolkit'

function CategoriesList(articles) {

  // Récupérer les données pertinantes
  let categories = new Set();

  for(let a in articles) {
    categories.add(articles[a].category);
  }

  // Génerer le tableau de LI
  let itemList = [];

  categories.forEach(function(elm) {
    itemList.push(Tag.create("li", {}, [elm]));
  });
  
  // Créer le composant HTML
  let categoriesList = Tag.create("div", {"class": "Categories"}, [
    Tag.create("p", {}, ["Liste des catégories"]),
    Tag.create("ul", {}, itemList)
  ]);

  return categoriesList;
}

export default CategoriesList
