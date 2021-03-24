import Tag from '../toolkit'

function Logo(url, alt){
  let logo = Tag.create(
    "img",
    {"src": url, "alt" : alt},
    []
  )
  return logo
}

export default Logo
