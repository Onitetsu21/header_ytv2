const Tag = require('../toolkit');

//Component footer
function Footer(logo, menu, socialNetwork){
  let footer = Tag.create(
    "footer",
    {"class": "footer"},
    [
      Tag.create("div",
        {"class": "logo"},
        [logo]
      ),
      Tag.create("div",
        {"class": "menu"},
        [menu]
      ),
      Tag.create("div",
        {"class": "socialNetwork"},
        [socialNetwork]
      )])
  return footer
}

module.exports = Footer;
