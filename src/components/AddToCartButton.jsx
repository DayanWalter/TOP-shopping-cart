import styles from './AddToCartButton.module.css';

export default function AddToCartButton({ amount, addOrder }) {
  return (
    <div className={styles.addToCartButton}>
      <button onClick={addOrder}>Add to cart{amount}</button>
    </div>
  );
}
