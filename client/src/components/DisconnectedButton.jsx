import React from 'react';

const DisconnectedButton = () => {
  const handleDisconnect = () => {
    if (window.ethereum) {
      window.ethereum.disconnect();
    }
  };

  return (
    <button onClick={handleDisconnect}>Disconnect</button>
  );
};

export default DisconnectedButton;
