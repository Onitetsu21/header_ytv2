// EcmaScript 
// Dépendent du contexte d'exécution
// Tous les navigateurs n'ont pas la même version de JS
// deux modes d'accès aux propriétés d'un objet : 
// 	* objet   : obj.property 
// 	* tableau : obj["property"] 
// for...in 
// typeof 
// createElement, appendChild, setAttributes
// functions anonymes : function() { ... }

// ##########################
// # UI Toolkit
// ##########################

let Tag = {};

  //Tag.ROOT = ROOT est un attribut de Tag
Tag.ROOT = document.body;


  //Tag.create = déclaration fonction anonyme qu'on désanonymise : elle devient une méthode de Tag
  //function(param){instructions} <= fonction anonyme
  //la fonction anonyme peut être mise dans une letiable, tranformée en méthode d'objet...
Tag.create = function (type, attributes = {}, children = []) 
{
  // Crée l'élément HTML 
  let tag = document.createElement(type);

  // Assigne des attributs
  for(let key in attributes) {
    tag.setAttribute(key, attributes[key]);
  }

  // Assigne des éléments HTML enfants
  for(let key in children) {

    let child;

    if(typeof children[key] === "object") {
      child = children[key];
    }
    else {
      child = document.createElement("span");
      child.innerText = children[key].toString();
    }

    tag.appendChild(child);

  }

  // Retourne l'élément HTML
  return tag;
}

Tag.append = function (tag, parentNode) {
  parentNode.appendChild(tag);
}

Tag.get = function(selector) {
  let list = [];

  // selector = id ?
  let idElm = document.getElementById(selector);
  if(idElm !== null)
    list.push(idElm);

  // selector = class ?
  let classElm = document.getElementsByClassName(selector);
  for(let i = 0; i < classElm.length; i++) {
    list.push(classElm[i]);
  }

  // selector = tag ?
  let tagElm = document.getElementsByTagName(selector);
  for(let i = 0; i < tagElm.length; i++) {
    list.push(tagElm[i]);
  }

  return list;
}

export default Tag
