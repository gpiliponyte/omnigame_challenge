import "./Product.css";

function Product(props) {
  return (
    <div className="vending-machine--product">
      <b>{props.product.name}</b>
      <p>Price: {props.product.price} EU</p>
      <p>Left: {props.product.units}</p>
    </div>
  );
}

export default Product;
