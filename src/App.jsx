import { useState } from "react";
function App() {
  const [item, setitem] = useState({ product: "Samsung galaxy s23 Ultra", price: 1_20_000 });
  function changeProduct() {
    setitem({ product: "Iphone 14 pro max", price: 1_50_000 })
  }
  function addDiscount() {
    setitem((current) => {
      return { ...current, price: 1_00_000 }
    })
  }
  return (
    <>
      <h2>{item.product}</h2>
      <h3>{item.price}</h3>
      <button onClick={changeProduct}>Change Product</button>
      <button onClick={addDiscount}>Add discount</button>
    </>
  );
}
export default App;