import React from 'react'
import { useParams } from 'react-router-dom';
function Question() {
  let id = useParams();
  console.log(id)
  return (
    <div>
      <p>Student question</p>
    </div>
  )
}

export default Question
