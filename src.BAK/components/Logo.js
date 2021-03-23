function Logo(url, alt){
  let logo = Tag.create(
    "img",
    {"src": url, "alt" : alt},
    []
  )
  return logo
}

exports.default = Logo
