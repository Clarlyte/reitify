// components/ReitList.tsx
import { useEffect, useState } from 'react';
import { fetchREITS, REIT } from '../api/fetchREITS';

export default function ReitList() {
  const [reits, setReits] = useState<REIT[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchREITS()
      .then(data => setReits(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!reits.length) return <div>Loading...</div>;

  return (
    <div>
      <h1>REIT Indicators</h1>
      <ul>
        {reits.map(reit => (
          <li key={reit.id}>
            {reit.name} - Market Cap: {reit.market_cap}
          </li>
        ))}
      </ul>
    </div>
  );
}
