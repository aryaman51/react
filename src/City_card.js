import React, { useState } from "react";

function City() {
  const [option, setOption] = useState("");

  function handleOption(event) {
    setOption(event.target.value);
  }

  function handleSubmit(event) {
    

    // You can use the selected option here to update the API or perform any other action
    console.log("Selected City:", option);
  }

  return (
    <div id="dropdown">
      <h2>Select city whose weather do you want {option}</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={handleOption} value={option}>
          <option value="Jawali">Jawali</option>
          <option value="Waknaghat">Waknaghat</option>
          <option value="Solan">Solan</option>
          <option value="Shimla">Shimla</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default City;
