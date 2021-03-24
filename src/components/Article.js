import Tag from '../toolkit'

function Article(title, author, published, content) {

  let article = Tag.create(
    "div", 
    { "class": "Article" },
    [
      Tag.create("h1", { "class": "Article__Title"}, [title]),
      Tag.create("div", { "class": "Article__Metadata"}, [
	Tag.create("span", {"class": "Article__Author"}, [author]),
	Tag.create("span", {"class": "Article__Published"}, [published])
      ]),
      Tag.create("p", { "class": "Article__Content"}, [content]),
    ]
  );

  return article;
}

export default Article
