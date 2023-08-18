import SigInContextProvider from "../../context/provider/SigInContextProvider";
import SignInController from "./SignInController";

const SignIn = () => {
  return (
    <SigInContextProvider>
      <SignInController />
    </SigInContextProvider>
  );
};

export default SignIn;
