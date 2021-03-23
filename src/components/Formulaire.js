const Tag = require('../toolkit');

function Formulaire(action, method) {

    let formulaire = Tag.create(
        "div", { "class": "Formulaire" }, [
            Tag.create("form", {
                "class": "Form",
                action,
                method
            }, [
                Tag.create("input", {
                    "class": "Form_Title",
                    "type": "text",
                    "name": "title",
                    "value": "title"
                }),
                Tag.create("input", {
                    "class": "Form_Author",
                    "type": "text",
                    "name": "author",
                    "value": "author"
                }),
                Tag.create("input", {
                    "class": "Form_Published",
                    "type": "text",
                    "name": "published",
                    "value": "20/02/2021"
                }),
                Tag.create("input", {
                    "class": "Form_Category",
                    "type": "text",
                    "name": "category",
                    "value": "category"
                }),
                Tag.create("input", {
                    "class": "Form_Content",
                    "type": "text",
                    "name": "content",
                    "value": "content"
                }),
                Tag.create("input", {
                    "class": "Form_Submit",
                    "type": "submit"
                })
            ]),

        ]
    );
    action.responseType = 'json'
    return formulaire;
}

module.exports = Formulaire;
