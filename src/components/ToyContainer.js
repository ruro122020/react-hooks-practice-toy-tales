import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {

  const onDeleteToy =(deleteToy)=>{
    const newToys = toys.filter(toy => toy.id !== deleteToy.id)
    setToys(newToys)
  }
  const onUpdateToy=(updateToy)=>{
    const updateToys = toys.map(toy=>{
      if(toy.id === updateToy.id){
        return updateToy
      }else{
        return toy
      }
    })
    setToys(updateToys)
  }
  const displayToys = toys.map(toy => <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onUpdateToy={onUpdateToy}/>)
  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {displayToys}
      </div>
  );
}

export default ToyContainer;
