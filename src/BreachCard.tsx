import React from 'react';

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

const BreachCard: React.FC<BreachInfo> = ({
  breachID,
  breachedDate,
  domain,
  exposedData,
  exposedRecords,
  exposureDescription,
  industry,
  logo,
  passwordRisk,
  searchable,
  verified
}) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
      <div className="flex items-center p-4">
        <img src={logo} alt={breachID} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-semibold">{breachID}</h2>
          <p className="text-gray-600">{domain} - {new Date(breachedDate).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="p-4">
        <p><strong>Exposed Records:</strong> {exposedRecords.toLocaleString()}</p>
        <p className="mt-2">{exposureDescription}</p>

        <p className="mt-4"><strong>Exposed Data:</strong> {exposedData.join(', ')}</p>
        <p><strong>Industry:</strong> {industry}</p>
        <p><strong>Password Risk:</strong> {passwordRisk}</p>

        <p className="text-sm text-gray-500 mt-4">
          {verified ? 'Verified' : 'Unverified'} | {searchable ? 'Searchable' : 'Not Searchable'}
        </p>
      </div>
    </div>
  );
};

export {BreachCard};
