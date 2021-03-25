import React from 'react'
import Videosinfo from '../videos'

let videosArray = Videosinfo.videosList
function Thumbnail () {
  return (
    videosArray.map((element, index) => (
      <div className="thumbnail" key={index}>
        <img src={element.thumbnail} alt="Miniature de la vidéo" />
        <div className="metaData">
          <div className="videoLogo">
            <img src={element.channelIcon} alt="Logo de la chaîne" />
          </div>
          <div className="infosVideos">
            <h3>{element.title}</h3>
            <p>{element.channel} {/*<span className="material-icons">check_circle</span>*/}</p>
            <div className="vuesAndPublication">
              <p>{element.views}</p>
              <p>{element.published}</p>
            </div>
          </div>
        </div>
      </div>
      )
    )
  )
}

export default Thumbnail