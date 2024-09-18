import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BreachCard} from './BreachCard'; 
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

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://api.xposedornot.com/v1/breaches');
        if (res.data.success) {
          setBreach(res.data.exposedBreaches); 
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
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
      ) : (
        <div>
          {breach.map((item) => (
            <BreachCard 
              key={item.breachID} 
              breachID={item.breachID}
              breachedDate={item.breachedDate}
              domain={item.domain}
              exposedData={item.exposedData}
              exposedRecords={item.exposedRecords}
              exposureDescription={item.exposureDescription}
              industry={item.industry}
              logo={item.logo}
              passwordRisk={item.passwordRisk}
              referenceURL={item.referenceURL}
              searchable={item.searchable}
              sensitive={item.sensitive}
              verified={item.verified}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
