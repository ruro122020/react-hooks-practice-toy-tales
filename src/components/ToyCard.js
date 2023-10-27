import React, { useState } from "react";
/*
Delete toy card:
  -create a deleteToy function to delete toy from server when the 'Donate to Goodwill' btn is clicked
  -create a delete state boolean that will remove toyCard if true
  -set delete state to true when 'Donate to Goodwill' btn is clicked
*/
function ToyCard({toy, onDeleteToy}) {
  const {id, image, name, likes} = toy

  const handleDeleteClick=()=>{
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(()=> onDeleteToy(toy))
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
