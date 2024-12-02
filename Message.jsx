import { useState } from "react";
import ReactDOM from "react-dom/client";

function CarName() {
  const [car, setCar] = useState("Peugeot");

  return (
    <>
      <h1>My best car is {car}!</h1>
      <button
        type="button"
        onClick={() => setCar("Volvo")}
      >Change to Volvo</button>

<button
        type="button"
        onClick={() => setCar("Carola")}
      >Change to Carola</button>

<button
        type="button"
        onClick={() => setCar("Pathfinder")}
      >Change to Pathfinder</button>

<button
        type="button"
        onClick={() => setCar("Benz")}
      >Change to Benz</button>

<button
        type="button"
        onClick={() => setCar("G-wagon")}
      >Change to G-Wagon</button>
    </>
  )
}

export default CarName;

function Message() {
    const name = "Johnson"
    const age = 30;
    return <h1>Hello {name + age}</h1>
}

// export default Message;