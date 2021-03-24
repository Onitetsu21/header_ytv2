import React from 'react'
import {Fragment} from 'react'


function Thumbnail ({children}) {
  return (
    <div className="thumbnail">
      <img src="https://picsum.photos/360/200" alt="Miniature de la vidéo"/>
      <div className="metaData">
        <div className="logo">
          <img src="https://picsum.photos/50" alt="Logo de la chaîne"/>
        </div>
        <div className="infosVideos">
          <h3>Titre de la vidéo</h3>
          <p>Auteur de la vidéo</p>
          <div className="vuesAndPublication">
            <p>Nombre de vues</p>
            <p>date publication</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail