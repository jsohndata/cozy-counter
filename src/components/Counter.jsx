import { useState } from "react";

export default function Counter () {

  const [number, setNumber] = useState(0);

  return (
    <section>
      <h2>{number}</h2>
      <button onClick={ () => {setNumber(number + 345)} }>+</button>
      <button onClick={ () => {setNumber(number - 154)} }>-</button>
      <button onClick={ () => {setNumber(0) } }>Reset</button>
    </section>
  )
}