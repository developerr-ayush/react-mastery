import { useState, useEffect } from "react";
import './assets/css/style.css'
function App() {

  const [item, setitem] = useState("");
  const [price, setprice] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [width, setwidth] = useState(window.innerWidth);
  const changeProduct = (event) => {
    setitem(event.target.value)
  }
  function addQuantity() {
    setquantity(quantity + 1)
  }
  function subQuantity() {
    setquantity(quantity - 1)
  }
  const changePrice = (event) => {
    setprice(event.target.value)
  }


  // useEffect
  // will run automatically on page load
  useEffect(e => {
    console.log(item)
    document.title = item
    window.addEventListener('resize', e => {
      setwidth(window.innerWidth)
    })
  }, [item, price]) // dependency array , if there is just an empty bracket then it will run once when page is loaded


  return (
    <>
      <h1>Screen width = {width}</h1>
      <h2>Product name: {item}</h2>
      <h3>Price ₹{price}</h3>
      <h3>Quantity : {quantity}</h3>

      <div>
        <label htmlFor="name">
          Product name:
        </label>
        <input type="text" id="name" value={item} onChange={changeProduct} />
      </div>

      <div>
        <label htmlFor="price">
          Product price:
        </label>
        <input type="number" id="price" onChange={changePrice} />
      </div>

      <div className="quantity">
        <button className="sub" onClick={subQuantity}>-</button>
        <span className="data">{quantity}</span>
        <button className="add" onClick={addQuantity}>+</button>
      </div>
    </>
  );
}
export default App;