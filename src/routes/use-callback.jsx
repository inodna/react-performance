import { useState, useCallback } from "react";
import { MemoMegaBoost } from "../components/MegaBoost/MegaBoost";

export default function UseCallback() {
  const [count, setCount] = useState(0);

  function handleMegaBoost() {
    setCount((currentValue) => currentValue + 1234);
  }

  /*   const handleMegaBoost = useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []); */

  return (
    <>
      Count: {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>
      <MemoMegaBoost handleClick={handleMegaBoost} />
    </>
  );
}
