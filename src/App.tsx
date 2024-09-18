import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface BreachInfo {
  breachID: string;
  breachedDate: string;
  domain: string;
  exposedData: string[];
  exposedRecords: number;
  exposureDescription: string;
  industry: string;
  logo: string;
  passwordRisk: string;
  referenceURL: string;
  searchable: boolean;
  sensitive: boolean;
  verified: boolean;
}

const App = () => {
  const [breach, setBreach] = useState<BreachInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://api.xposedornot.com/v1/breaches');
        console.log(res.data);
        
        if (res.data.success) {
          setBreach(res.data.exposedBreaches); 
        } else {
          setError('Failed to fetch breaches.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Breach Data</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          <h1>Loaded</h1>
          {breach.map((item) => (
             <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
             <div className="flex items-center p-4">
               <img src={item.logo} alt={item.breachID} className="w-16 h-16 rounded-full mr-4" />
               <div>
                 <h2 className="text-xl font-semibold">{item.breachID}</h2>
                 <p className="text-gray-600">{item.domain} - {new Date(item.breachedDate).toLocaleDateString()}</p>
               </div>
             </div>
       
             <div className="p-4">
               <p><strong>Exposed Records:</strong> {item.exposedRecords.toLocaleString()}</p>
               <p className="mt-2">{item.exposureDescription}</p>
       
               <p className="mt-4"><strong>Exposed Data:</strong> {item.exposedData.join(', ')}</p>
               <p><strong>Industry:</strong> {item.industry}</p>
               <p><strong>Password Risk:</strong> {item.passwordRisk}</p>
       
               <p className="text-sm text-gray-500 mt-4">
                 {item.verified ? 'Verified' : 'Unverified'} | {item.searchable ? 'Searchable' : 'Not Searchable'}
               </p>
             </div>
           </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
