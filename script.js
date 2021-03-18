// ##########################
// # Code de l'application
// ##########################

fetch(new Request("http://188.165.104.163:8080/articles"))
  .then(function(res) { return res.json() })
  .then(function(articles) { 
    Tag.append(CategoriesList(articles), Tag.ROOT);

    Tag.append(Counter(articles), Tag.ROOT);

    for(var a in articles) {
      Tag.append(
	Article(
	  articles[a].title, 
	  articles[a].author, 
	  articles[a].published, 
	  articles[a].content, 
	), 
	Tag.ROOT
      );
    }
  })


// ↓↓↓↓↓ Les composants vont ICI ↓↓↓↓↓↓
