function Header(logo, menu){
  let header = Tag.create(
    "header",
    {"class": "header"},
    [
      Tag.create("div",
        {"class": "logo"},
        [logo]
      ),
      Tag.create("div",
        {"class": "menu"},
        [menu]
      )
    ])
  return header
}