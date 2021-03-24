import Tag from '../toolkit'

function NavList(dataNav) {
  // Génerer le tableau de LI
  let menuList = [];
  for(let elm in dataNav){
    menuList.push(Tag.create("li", {}, [
      Tag.create ("a", {'href': dataNav[elm]}, [elm])
    ]));
  };

  // Créer le composant HTML
  let navList = Tag.create("nav", {"class": "NavBar"}, [
    Tag.create("ul", {}, menuList)
  ]);
  return navList;
}

export default NavList
