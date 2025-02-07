export default function Home() {
  const pages = [
    "Dashboard",
    "Login",
    "Register",
    "Forgot Password",
    "About",
    "Docs",
    "Products",
  ];

  return (
    <div className="flex flex-col items-center h-[56vh] text-5xl">
      <h1 className="my-auto align-middle">Welcome to Next JS Learning!</h1>
    </div>
  );
}
