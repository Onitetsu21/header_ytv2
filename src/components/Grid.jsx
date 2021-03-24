import React from 'react'
import Thumbnail from './Thumbnail'

function Grid ({children}) {
  return (
    <div className="grid">
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>
    </div>
  )
}

export default Grid