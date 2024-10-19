import React, { useState, useRef, useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";

 function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef("");
  const prevCounterRef = useRef(initialValue);

  useEffect(() => {
    if (counter > prevCounterRef.current && directionRef.current !== "su") {
      directionRef.current = "su";
      console.log(directionRef.current);
    } else if (counter < prevCounterRef.current && directionRef.current !== "giù") {
      directionRef.current = "giù";
      console.log(directionRef.current);
    } else if (counter === initialValue && directionRef.current !== "") {
      directionRef.current = "";
      console.log(directionRef.current);
    }

    prevCounterRef.current = counter;
  }, [counter, initialValue]);

  function handleCounterIncrement() {
    setCounter((count) => count + 1);
  }

  function handleCounterDecrease() {
    setCounter((count) => count - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay counter={counter} />
      <Button onClick={handleCounterIncrement} label="Aumenta" />
      <Button onClick={handleCounterDecrease} label="Diminuisci" />
      <Button onClick={handleCounterReset} label="Resetta" />
    </div>
  );
}

export default Counter