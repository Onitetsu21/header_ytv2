
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

var Tag = {};

  //Tag.ROOT = ROOT est un attribut de Tag
Tag.ROOT = document.body;


  //Tag.create = déclaration fonction anonyme qu'on désanonymise : elle devient une méthode de Tag
  //function(param){instructions} <= fonction anonyme
  //la fonction anonyme peut être mise dans une variable, tranformée en méthode d'objet...
Tag.create = function (type, attributes = {}, children = []) 
{
  // Crée l'élément HTML 
  var tag = document.createElement(type);

  // Assigne des attributs
  for(var key in attributes) {
    tag.setAttribute(key, attributes[key]);
  }

  // Assigne des éléments HTML enfants
  for(var key in children) {

    var child;

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
  var list = [];

  // selector = id ?
  var idElm = document.getElementById(selector);
  if(idElm !== null)
    list.push(idElm);

  // selector = class ?
  var classElm = document.getElementsByClassName(selector);
  for(var i = 0; i < classElm.length; i++) {
    list.push(classElm[i]);
  }

  // selector = tag ?
  var tagElm = document.getElementsByTagName(selector);
  for(var i = 0; i < tagElm.length; i++) {
    list.push(tagElm[i]);
  }

  return list;
}
