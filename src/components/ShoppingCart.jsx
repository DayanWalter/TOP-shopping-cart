import styles from './ShoppingCart.module.css';

export default function ShoppingCart({ modalRef, handleOverlayClick }) {
  return (
    <>
      <div
        className={styles.overlay}
        ref={modalRef}
        onClick={handleOverlayClick}
      ></div>
      <div className={styles.content}>
        <h1>Cart</h1>
        <p>Inhalt des Carts</p>
      </div>
    </>
  );
}
