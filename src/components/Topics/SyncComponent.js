// Example for Synchronus operation
import React, { useState } from 'react';

const SyncComponent = () => {

const [result, setResult]= useState(null);
const [loading, setLoading]=useState(false);
  const syncOperation = () => {
    setLoading(true);
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    console.log('Sync operation result:', result);
  
   setResult(result);
   setLoading(false);
  };

  return (
    <div>
      <h2>Synchronous Component</h2>
      <button onClick={syncOperation}>Run Synchronous Operation</button>
      {loading && <p>Loading ...</p>}
    {result !==null && !loading && <p>Result : {result}</p>}
    </div>
  );
};

export default SyncComponent;
