import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// import Components
import Tailwind from "./components/Tailwind";
import Css from "./components/CSS";

function App() {
  const [tailwind, setTailwind] = useState(true);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Common Components: {tailwind ? "Tailwind" : "CSS"} Demo</h1>
      <button onClick={() => setTailwind(!tailwind)}>Toggle Styling</button>
      <div>{tailwind ? <Tailwind /> : <Css />}</div>
    </>
  );
}

export default App;
