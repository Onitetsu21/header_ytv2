import React from 'react'
import PageList from './PageList'

let menu = [
  { label: "Accueil", icon: "home", link: "/" },
  { label: "Explorer", icon: "explore", link: "/exp" },
  { label: "Abonnements", icon: "subscriptions", link: "/sub" },
  { label: "Bibliothèque", icon: "video_library", link: "/lib" },
  { label: "Historique", icon: "history", link: "/his" },
]

function Aside({children }) {

  return (
    <aside>

      <PageList menu={menu}/>

    </aside>
  )
}

export default Aside