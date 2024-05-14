import React, { useState, useContext } from 'react';

const RavenStateContext = React.createContext();
const RavenStateUpdateContext = React.createContext();
const ResetRavenStateContext = React.createContext();

export const useRavenState = () => useContext(RavenStateContext);
export const useRavenStateUpdate = () => useContext(RavenStateUpdateContext);
export const useResetRavenState = () => useContext(ResetRavenStateContext);

const RavenStateProvider = ({ children }) => {
  const [RavenState, setRavenState] = useState({});

  const updateRavenState = newState => {
    setRavenState(prevState => ({
      ...prevState,
      ...newState,
    }));
  };

  const resetRavenState = () => {
    setRavenState({});
  };

  return (
    <RavenStateContext.Provider value={RavenState}>
      <RavenStateUpdateContext.Provider value={updateRavenState}>
        <ResetRavenStateContext.Provider value={resetRavenState}>
            {children}
        </ResetRavenStateContext.Provider>
      </RavenStateUpdateContext.Provider>
    </RavenStateContext.Provider>
  );
};

export default RavenStateProvider;

