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
  return tagsArray.map((tags)=> <li>{tags}</li>)
}

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) =>
//   <li>{numbers}</li>
// );



export default TagsList