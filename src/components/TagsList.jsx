import React from 'react'
import tagList from '../videos'

const tagsArray=tagList.tagsList;

function TagsList(children) {
  return (
    <ul className="tagsList">
      { tagsArray.map((tags, index)=> <li key={index}>{tags}</li>) }
    </ul>
  )
}

export default TagsList