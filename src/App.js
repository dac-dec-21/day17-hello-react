import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);

  const tweet = () => {
    setList([...list, 1]);
  };

  return (
    <div>
      <input type="button" value="Tweet" onClick={tweet} />

      {list.map(() => (
        <div
          style={{
            background: "lightgreen",
            color: "white",
            padding: "16px",
            marginBottom: "1px",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          nobis dolorum beatae error vero
        </div>
      ))}
    </div>
  );
}
