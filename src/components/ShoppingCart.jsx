import { useState } from 'react';
import styles from './ShoppingCart.module.css';

export default function ShoppingCart({ modalRef, handleOverlayClick }) {
  const exampleCart = [
    {
      id: 3,
      amount: 2,
      item: 'Mens Cotton Jacket',
      price: 55.99,
    },
    {
      id: 2,
      amount: 5,
      item: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
    },
  ];

  const [cart, setCart] = useState(exampleCart);

  function handleRemoveItem(itemId) {
    return setCart(cart.filter((e) => e.id !== itemId));
  }
  return (
    <>
      <div
        className={styles.overlay}
        ref={modalRef}
        onClick={handleOverlayClick}
      ></div>
      <div className={styles.content}>
        <h1>Cart</h1>
        <ul>
          {cart.map(({ id, amount, item, price }) => (
            <li key={id} className={styles.item}>
              <div className={styles.image}>Image</div>

              <div className={styles.nameAmount}>
                <p>{item}</p>
                <p>Amount: {amount}</p>
              </div>
              <div className={styles.priceDelete}>
                <p>$ {(price * amount).toFixed(2)}</p>
                <button onClick={() => console.log(id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
