import Card from './Card';
import DataFetch from './DataFetch';
import './App.css';

export default function App() {
  const { loading, data, error } = DataFetch(
    'https://fakestoreapi.com/products?limit=4'
  );

  return (
    <div>
      {loading && <div>A moment please...</div>}

      {error && (
        <div>{`There is a problem fetching the data - ${error.message}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ title, id, image, price }) => (
            <li key={id}>
              <Card title={title} image={image} price={price} />
            </li>
          ))}
      </ul>
    </div>
  );
}
