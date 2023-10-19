import styles from './ShoppingCart.module.css';

export default function ShoppingCart({
  modalRef,
  handleOverlayClick,
  cart,
  handleRemoveItem,
}) {
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
                <button onClick={() => handleRemoveItem(id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
