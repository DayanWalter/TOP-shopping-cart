import { useState } from 'react';
import styles from './ChangeAmount.module.css';

export default function ChangeAmount({ amount, decrement, increment }) {
  return (
    <div className={styles.changeAmount}>
      <button onClick={decrement}>-</button>

      <p>{amount}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
