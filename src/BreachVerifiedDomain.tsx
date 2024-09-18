import React, { useState } from 'react';
import axios from 'axios';

const SearchDomains = () => {
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        'https://api.xposedornot.com/v1/domain-breaches/',
        null,
        {
          headers: {
            'x-api-key': import.meta.env.API_KEY, 
            'Content-Length': '0',
          },
        }
      );

      setResults(response.data.metrics);
      setError('');
    } catch (err) {
      setResults(null);
      setError('Invalid or missing API key');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Domain Breaches</h1>
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full"
        placeholder="Enter domain"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {results && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Breaches Summary</h2>
          <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SearchDomains;
