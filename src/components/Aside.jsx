
import React from 'react'
import PageList from './PageList'
import CategoriesList from "./CategoriesList"
import SetList from "./SetList"
import MenuWrapper from "./MenuWrapper";

let menu = [
  { label: "Accueil", icon: "home", link: "/" },
  { label: "Explorer", icon: "explore", link: "/exp" },
  { label: "Abonnements", icon: "subscriptions", link: "/sub" },
  { label: "Bibliothèque", icon: "video_library", link: "/lib" },
  { label: "Historique", icon: "history", link: "/his" },
]
let categories = [
  "Musique",
  "Sport",
  "Jeux vidéo",
  "Film et TV",
  "Actu",
  "Mode et beauté",
  "Savoir et culture",
]
let settings = [
  { label: "Langue", icon: "home", onClick: () => alert('Langue') },
  { label: "Pays", icon: "flag", onClick: () => alert('Pays') },
  { label: "Aide", icon: "subscriptions", onClick: () => alert('Aide') },
]


function Aside({children}) {

  return (
    <aside>
      <MenuWrapper>
        <PageList menu={menu}/>
      </MenuWrapper>

      <MenuWrapper title="Catégories">
        <CategoriesList categories={categories}/>
      </MenuWrapper>

      <MenuWrapper title="Options">
        <SetList settings = {settings}/>
      </MenuWrapper>


    </aside>
  )
}

export default Aside