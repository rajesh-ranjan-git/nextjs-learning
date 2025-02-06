import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <div className="flex justify-center items-center w-screen h-[56vh] text-5xl">
      Login Page
    </div>
  );
};

export default Login;
