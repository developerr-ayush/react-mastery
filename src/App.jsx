import { useState } from "react";

function App() {
  const [array, setarray] = useState([1, 2, 3, 4, 5]);
  //
  function removeFirst() {
    setarray((currentArray) => {
      return currentArray.slice(1);
    });
  }
  function addBegining(element) {
    setarray((currentArray) => {
      return [element, ...currentArray];
    });
  }
  function addEnding(element) {
    setarray((currentArray) => {
      return [...currentArray, element];
    });
  }
  function removeSpecific() {
    setarray((currentArray) => {
      return currentArray.filter((e) => e !== 4);
    });
  }
  function replace(num, replace) {
    setarray((currentArray) => {
      return currentArray.map((e) => {
        if (e === num) {
          return replace;
        }
        return e;
      });
    });
  }

  return (
    <>
      <h1>This is our array</h1>
      <h2>Array: {array.join(", ")}</h2>
      <button onClick={removeFirst}>Remove First</button>
      <button
        onClick={(e) => {
          removeSpecific(4);
        }}
      >
        Remove Specific 4
      </button>
      <button
        onClick={(e) => {
          addBegining(4);
        }}
      >
        add begining 4
      </button>
      <button
        onClick={(e) => {
          addEnding(5);
        }}
      >
        add Ending 5
      </button>
      <button
        onClick={(e) => {
          replace(5, 3);
        }}
      >
        add Ending5 with 3
      </button>
    </>
  );
}
export default App;
