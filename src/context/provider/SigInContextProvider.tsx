import { useState } from "react";
import SignInContext from "../SignInContext";

type SigInContextProviderProp = {
  children: React.ReactNode;
};

type State = 1 | 2 | 3;

const SigInContextProvider = ({ children }: SigInContextProviderProp) => {
  const [state, setState] = useState<State>(1);

  const handleState = (state: State) => {
    setState(state);
  };

  return (
    <SignInContext.Provider value={{ state, handleState }}>
      {children}
    </SignInContext.Provider>
  );
};

export default SigInContextProvider;
