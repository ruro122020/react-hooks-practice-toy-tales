import React, { useState } from "react";
/*
Update likes in toy card:
-create a handleLikesClick function 
-create a count state and set it to 0
-in the handleClick function, update the likes to the server and in the DOM
*/
function ToyCard({toy, onDeleteToy, onUpdateToy}) {
  const {id, image, name, likes} = toy
  const handleDeleteClick=()=>{
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(()=> onDeleteToy(toy))
  }
  
  const handleLikesClick=()=>{
    const updateLikes = likes + 1
    fetch(`http://localhost:3001/toys/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: updateLikes
      })
    })
    .then(res => res.json())
    .then(updatedToy => {
      onUpdateToy(updatedToy)
    })
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
      <button className="like-btn" onClick={handleLikesClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
