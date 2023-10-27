import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  //add toy data from form to toys array
  const handleNewToy=(newToy)=>{
    setToys(prevState => [...prevState, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} />
    </>
  );
}

export default App;
