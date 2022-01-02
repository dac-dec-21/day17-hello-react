import { useState } from "react";

export default function App() {
  let [counter, setCounter] = useState(100);

  const incrment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <div> {counter} </div>
      <input type="button" value="Incrment" onClick={incrment} />
      <input type="button" value="Decrement" onClick={decrement} />
    </div>
  );
}
