import { useEffect, useState } from 'react';
import { fetchREITS, REIT } from '../api/fetchREITS';

const Indicators = () => {
  const [reits, setReits] = useState<REIT[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchREITS()
      .then((data: REIT[]) => setReits(data))
      .catch((err: Error) => setError(err.message));
  }, []);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!reits.length) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">REIT Indicators</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reits.map((reit) => (
          <div key={reit.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{reit.name} ({reit.ticker})</h2>
            <p className="text-gray-700">Market Cap: ₱{reit.market_cap.toLocaleString()}</p>
            <p className="text-gray-700">Dividend Yield: {reit.dividend_yield}%</p>
            <p className="text-gray-700">P/E Ratio: {reit.price_to_earnings_ratio}</p>
            <p className="text-gray-500 text-sm mt-2">Last Updated: {new Date(reit.update_date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Indicators;


