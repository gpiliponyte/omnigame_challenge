import { useState } from "react";
import "./VendingMachine.css";
import { data } from "../../data";
import Product from "../Product/Product";

function VendingMachine() {
  const [products, setProducts] = useState(data);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  function handleProductSelection(event) {
    setSelectedProductId(event.target.value);
  }

  function handleMoneyInsert(event) {
    setAmount(event.target.value);
  }

  function buy() {
    if (!selectedProductId) {
      setMessage("No product selected");
    } else {
      const selectedProduct = products.filter(
        (p) => p.id == selectedProductId
      )[0];

      if (selectedProduct.price > amount) {
        setMessage("Not enough money inserted");
      } else {
        setMessage(
          `${selectedProduct.name} Bought. Change: ${(
            amount - selectedProduct.price
          ).toFixed(2)} EU`
        );
        setProducts(
          products.map((p) =>
            p.id != selectedProductId ? p : { ...p, units: p.units - 1 }
          )
        );
        setSelectedProductId("");
        setAmount(0);
      }
    }
  }

  function cancel() {
    setMessage(`Change: ${amount} EU`);
    setSelectedProductId("");
    setAmount(0);
  }

  const productsList = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  const productsNames = products
    .filter((p) => p.units)
    .map((p) => (
      <option key={p.id} value={p.id}>
        {p.name}
      </option>
    ));

  return (
    <section>
      <h1 className="vending-machine--title">Vending Machine</h1>

      <div className="vending-machine--container">
        <h3>VENDING MACHINE</h3>

        <div className="vending-machine--status">{message}</div>

        <div>
          <label>Select Item: </label>

          <select value={selectedProductId} onChange={handleProductSelection}>
            <option value="" disabled hidden>
              --CHOOSE ITEM--
            </option>
            {productsNames}
          </select>
        </div>

        <div>
          <label>Enter Money: </label>

          <input
            onChange={handleMoneyInsert}
            type="number"
            min="0.00"
            max="5.00"
            value={amount}
            step="0.10"
          />
        </div>

        <div>
          <button lassName="vending-machine--button" onClick={buy}>
            BUY
          </button>

          <button lassName="vending-machine--button" onClick={cancel}>
            CANCEL
          </button>
        </div>

        <div className="vending-machine--product-container">{productsList}</div>
      </div>
    </section>
  );
}

export default VendingMachine;