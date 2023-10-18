import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ title, image, price, id }) {
  return (
    <>
      <Link to={`/item/${id}`}>
        <div className={styles.card}>
          <img src={image} className={styles.localImage} />
          <div className={styles.bottom}>
            <p>{title}</p>
            <p>$ {price.toFixed(2)}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
