import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
};

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center w-screen h-[54vh] text-5xl">
      Forgot Password Page
    </div>
  );
};

export default ForgotPassword;
