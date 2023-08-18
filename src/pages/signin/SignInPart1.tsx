import { useContext } from "react";
import SignInContext from "../../context/SignInContext";
import { FaArrowLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import facebook from "../../assets/img/facebook.svg";

const SignInPart1 = () => {
  const { handleState } = useContext(SignInContext);

  return (
    <div className="flex items-center min-h-screen bg-gray-200">
      <div className="grid w-full lg:w-1/2 xl:w-2/5 grid-cols-1 mx-10 md:mx-20 lg:mx-10 xl:mx-20 my-10 bg-white rounded-[30px] shadow-md">
        <button className="flex justify-center items-center gap-2 bg-[#267db7] w-24 h-8 mt-3 ml-3 text-[#f7f7f8] rounded-[60px] font-[600] hover:opacity-90 focus:opacity-90">
          <FaArrowLeft /> Back
        </button>
        <div className="grid grid-cols-1 gap-5 px-10 py-10 md:px-16">
          <h1 className="text-[30px] font-bold text-center">Sign up</h1>
          <div className="flex justify-start bg-[#E5F5FF] rounded-[60px]">
            <div className="flex w-1/3 justify-center items-center text-xs bg-[#267db7] h-10 text-[#f7f7f8] rounded-[60px] opacity-90">
              Personal
            </div>
          </div>
          <label htmlFor="username" className="px-3">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="john_doe"
            className="outline-none rounded-[30px] px-5 bg-gray-100 py-2"
          />
          <label htmlFor="email" className="px-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@email.com"
            className="outline-none rounded-[30px] px-5 bg-gray-100 py-2"
          />
          <button
            onClick={() => handleState(2)}
            className="bg-[#267db7] h-10 mt-3 ml-3 text-[#f7f7f8] rounded-[60px] font-[600] hover:opacity-90 focus:opacity-90"
          >
            Continue
          </button>
          <div className="flex items-center justify-center">
            <hr className="w-1/4 border-gray-400" />
            <span className="flex-none px-3 text-center">Or</span>
            <hr className="w-1/4 border-gray-400" />
          </div>
          <div className="grid md:grid-cols-2">
            <button className="flex justify-center items-center gap-2 bg-gray-100 h-8 mt-3 ml-3 rounded-[60px] hover:bg-gray-200 focus:bg-gray-200">
              <FcGoogle /> login with google
            </button>
            <button className="flex justify-center items-center gap-2 bg-gray-100 h-8 mt-3 ml-3 rounded-[60px] hover:bg-gray-200 focus:bg-gray-200">
              <img src={facebook} className="object-fill h-4" /> login with
              facebook
            </button>
          </div>
          <span className="text-center  font-[600]">
            I already have an account{" "}
            <a href="#" className="text-blue-400 underline">
              Log in
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignInPart1;
