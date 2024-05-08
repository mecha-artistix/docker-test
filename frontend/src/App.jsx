import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({ message: "", items: [] });

  useEffect(() => {
    fetch("http://localhost:8000/api/data/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Receiving response</h1>
      {/* <h1>{data.message}</h1>
      <ul>
        {data.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
