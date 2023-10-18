import Card from './Card';
import DataFetch from './DataFetch';
import styles from './Shop.module.css';
//1400*700
export default function Shop() {
  const { loading, data, error } = DataFetch(
    'https://fakestoreapi.com/products?limit=4'
  );

  return (
    <>
      {loading && <div>A moment please...</div>}

      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      {data && (
        <div className={styles.shop}>
          {data.map(({ title, id, image, price }) => (
            <li key={id}>
              <Card title={title} image={image} price={price} id={id} />
            </li>
          ))}
        </div>
      )}
    </>
  );
}
