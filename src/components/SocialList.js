import Tag from '../toolkit'

function SocialList(dataSocial) {
  // Génerer le tableau de LI
  let socialList = [];
  for(let elm in dataSocial){
    socialList.push(Tag.create("li", {}, [
      Tag.create ("a", {'href': dataSocial[elm]}, [elm])
    ]));
  };

  // Créer le composant HTML
  let listSocial = Tag.create("nav", {"class": "SocialBar"}, [
    Tag.create("ul", {}, socialList)
  ]);
  return listSocial;
}

export default SocialList
