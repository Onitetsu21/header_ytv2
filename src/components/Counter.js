import Tag from '../toolkit'

function Counter(articles) {
  let counter = Tag.create("div", {"class": "Counter"}, [
    Tag.create("span", {}, ["Nombre d'articles : "]),
    Tag.create("span", {}, [articles.length])
  ])
  return counter;
}

export default Counter
