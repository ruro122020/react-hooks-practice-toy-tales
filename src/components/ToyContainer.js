import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  const displayToys = toys.map(toy => <ToyCard key={toy.id} toy={toy}/>)
  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {displayToys}
      </div>
  );
}

export default ToyContainer;
