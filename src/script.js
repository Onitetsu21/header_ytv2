// ##########################
// # Code de l'application
// ##########################

//GÉNÉRATION HEADER
Tag.append(
  Header(
    Logo('https://picsum.photos/80', 'Logo aléatoire'),
    NavList({ "Accueil" : "/accueil", "Articles" : "/articles", "À propos de nous": "/apropos" })
  ),
  Tag.get('header')[0]
)

//GÉNÉRATION ARTICLES
fetch(new Request("http://188.165.104.163:8080/articles"))
  .then(function(res) { return res.json() })
  .then(function(articles) {
    Tag.append(CategoriesList(articles), Tag.get('main')[0]);
    Tag.append(Counter(articles), Tag.get('main')[0]);

    for(var a in articles) {
      Tag.append(
        Article(
          articles[a].title,
          articles[a].author,
          articles[a].published,
          articles[a].content,
        ),
        Tag.get('main')[0]
      );
    }
  })

//GÉNÉRATION FOOTER
Tag.append(Footer(
  Logo('https://picsum.photos/80', 'Logo aléatoire'),
  NavList({ "Accueil" : "/accueil", "Articles" : "/articles", "À propos de nous": "/apropos" }),
  SocialList({ "facebook" : "www.facebook.fr", "Twitter" : "www.twitter.com", "Instagram": "www.instagram.com" })),
  Tag.get('footer')[0]);
