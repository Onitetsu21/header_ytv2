const Tag = require('../toolkit');

function SocialList(dataSocial) {
  // Génerer le tableau de LI
  var socialList = [];
  for(var elm in dataSocial){
    socialList.push(Tag.create("li", {}, [
      Tag.create ("a", {'href': dataSocial[elm]}, [elm])
    ]));
  };

  // Créer le composant HTML
  var listSocial = Tag.create("nav", {"class": "SocialBar"}, [
    Tag.create("ul", {}, socialList)
  ]);
  return listSocial;
}

module.exports = SocialList;
