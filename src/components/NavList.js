const Tag = require('../toolkit');

function NavList(dataNav) {
  // Génerer le tableau de LI
  var menuList = [];
  for(var elm in dataNav){
    menuList.push(Tag.create("li", {}, [
      Tag.create ("a", {'href': dataNav[elm]}, [elm])
    ]));
  };

  // Créer le composant HTML
  var navList = Tag.create("nav", {"class": "NavBar"}, [
    Tag.create("ul", {}, menuList)
  ]);
  return navList;
}

module.exports = NavList;
