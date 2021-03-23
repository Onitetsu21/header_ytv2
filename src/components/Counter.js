const Tag = require('../toolkit');

function Counter(articles) {
  var counter = Tag.create("div", {"class": "Counter"}, [
    Tag.create("span", {}, ["Nombre d'articles : "]),
    Tag.create("span", {}, [articles.length])
  ])
  return counter;
}

module.exports = Counter;
