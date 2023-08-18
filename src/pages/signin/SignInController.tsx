import { useContext } from "react";
import SignInPart1 from "./SignInPart1";
import SignInPart2 from "./SignInPart2";
import SignInPart3 from "./SignInPart3";
import SignInContext from "../../context/SignInContext";

const SignInController = () => {
  const { state } = useContext(SignInContext);

  return (
    <>
      {state === 1 && <SignInPart1 />}
      {state === 2 && <SignInPart2 />}
      {state === 3 && <SignInPart3 />}
    </>
  );
};

export default SignInController;
