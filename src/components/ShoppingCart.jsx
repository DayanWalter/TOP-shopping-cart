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
          {cart.map(({ id, amount, item, price, image }) => (
            <li key={id} className={styles.item}>
              <div className={styles.image}>
                <img src={image} alt="" />
              </div>

              <div className={styles.nameAmount}>
                <p>{item}</p>
                <p>Amount: {amount}</p>
              </div>
              <div className={styles.priceDelete}>
                <p>$ {(price * amount).toFixed(2)}</p>
                <button
                  className={styles.remove}
                  onClick={() => handleRemoveItem(id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.sum}>
          Total: ${' '}
          {cart
            .reduce((sum, obj) => sum + obj.amount * obj.price, 0)
            .toFixed(2)}
        </div>
        <button
          onClick={() =>
            alert(
              `You paid $${cart
                .reduce((sum, obj) => sum + obj.amount * obj.price, 0)
                .toFixed(2)} with Paypal`
            )
          }
          className={styles.checkout}
        >
          Paypal
        </button>
      </div>
    </>
  );
}
