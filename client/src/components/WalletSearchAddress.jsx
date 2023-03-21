import React, { useState } from 'react';
import { checkAdd } from '../utils';

function WalletSearchAddress() {
  const [address, setAddress] = useState('');
  const [results, setResults] = useState(null);

  const searchAddress = async () => {
        const data = await checkAdd(address );
        setResults(data);
  
 }


  return (
    <div className='text-black w-full max-w-xlg'>
      <h2 className='font-epilogue font-semibold text-[16px] leading-[26px] '>Search for a Wallet Address</h2>
      <input
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type="text"
        placeholder="Enter wallet address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />


    <button className="mt-5 group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
      <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full" onClick={searchAddress}></div>
      <span className=" relative text-black group-hover:text-white">Search</span>
    </button>

      {results && (
        <div>
          <h3>Results for {address}</h3>
          <p>Balance: {results.balance}</p>
          <p>Transaction Count: {results.tx_count}</p>
        </div>
      )}
    </div>
  );


}

export default WalletSearchAddress;