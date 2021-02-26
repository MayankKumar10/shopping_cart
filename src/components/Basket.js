import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 10000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {'\u20B9'}{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">{'\u20B9'}{itemsPrice.toFixed(2)}</div>
            </div>
            
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">{'\u20B9'}{taxPrice.toFixed(2)}</div>
            </div>
            
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
              {'\u20B9'}{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              
              <div className="col-1 text-right">
                <strong>{'\u20B9'}{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              
              <button onClick={() => {if (window.confirm(`You selected ${cartItems.length} items and your Total amout is ${totalPrice} please confirm`)) {
  window.alert(`Thanks For Shopping have a nice day`);
}}}>
                Checkout
              </button>
            
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
