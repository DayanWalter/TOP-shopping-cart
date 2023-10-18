import AddToCartButton from './AddToCartButton';
import ChangeAmount from './ChangeAmount';
import DataFetch from './DataFetch';
import styles from './Item.module.css';
//1400*700
export default function Item() {
  const { loading, data, error } = DataFetch(
    'https://fakestoreapi.com/products?limit=1'
  );

  return (
    <>
      {loading && <div>A moment please...</div>}

      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      {data && (
        <div className={styles.item}>
          <div className={styles.left}>
            <img src={data[0].image} alt="" className={styles.image} />
          </div>
          <div className={styles.middle}>
            <h1>{data[0].title}</h1>
            {console.log(data)}
            <h2>{data[0].description}</h2>
            <div className={styles.button}>
              <ChangeAmount />
              <AddToCartButton />
            </div>
          </div>
          <div className={styles.right}>
            <p>$ {data[0].price}</p>
          </div>
        </div>
      )}
    </>
  );
}
