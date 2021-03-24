import React from 'react'
import tagList from '../videos'


const tagsArray=tagList.tagsList;

function TagsList(tagsArray) {
  return (
    <ul className="tagsList">
      <Tag/>
    </ul>
  )
}

function Tag(){
  return tagsArray.map((tags)=> <li>{tags}</li>) //ajouter key sinon react pas content
}

export default TagsList