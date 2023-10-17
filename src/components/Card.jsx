import styles from './Card.module.css';

export default function Card({ title, image, price }) {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.localImage} />
      <div className={styles.bottom}>
        <p>{title}</p>
        <p>$ {price.toFixed(2)}</p>
      </div>
    </div>
  );
}
