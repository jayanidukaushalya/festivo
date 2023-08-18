import { createContext } from "react";

type State = 1 | 2 | 3;

type SignInContext = {
  state: State;
  handleState: (state: State) => void;
};

const SignInContext = createContext<SignInContext>({
  state: 1,
  handleState: () => {},
});

export default SignInContext;
