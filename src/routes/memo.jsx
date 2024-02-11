import { useState } from "react";
import { BigCounter } from "../components/BigCounter/BigCounter";
import { Decoration } from "../components/Decoration/Decoration";

export default function Memo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BigCounter count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Decoration />
    </>
  );
}

/* import { memo } from "react"; */
/* const PureDecoration = memo(Decoration); */
