import { React, useState } from "react";
import "./App.css";
import Login from "./Login";
import FocusableInput from "./FocusableInput";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <React.StrictMode>
        <Counter initialValue={0} />
      </React.StrictMode>
    </>
  );
}

export default App;
