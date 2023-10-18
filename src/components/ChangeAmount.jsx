import { useState } from 'react';
import styles from './ChangeAmount.module.css';

export default function ChangeAmount() {
  const [count, setCount] = useState(0);

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount((prevCount) => {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className={styles.changeAmount}>
      <button onClick={decrement}>-</button>

      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
