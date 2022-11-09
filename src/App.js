import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from './components/BakeryItem';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const updatePrice = () => {
    let sum = 0;
    
    cart.forEach(i => sum += i.price);

    setTotal(sum);


  }
  useEffect(() => {
      updatePrice();
  })

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
        <BakeryItem item={item} key={index} cart={cart} updateCart={setCart} total={total} setTotal={setTotal}/>
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
            <div>
               <h2>Current count: {}</h2>
             </div>
            {cart.map((e, i) => <p key={i}>{e.name}</p>)}
            <h4>{total}</h4>
      </div>
    </div>
  );
}

export default App;
