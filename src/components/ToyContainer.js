import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {
  const onDeleteToy =(deleteToy)=>{
    const newToys = toys.filter(toy => toy.id !== deleteToy.id)
    setToys(newToys)
  }
  const displayToys = toys.map(toy => <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy}/>)
  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {displayToys}
      </div>
  );
}

export default ToyContainer;
