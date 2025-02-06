"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavLinks = () => {
  const router = useRouter();
  const path = usePathname();

  const pages = [
    "Dashboard",
    "Login",
    "Register",
    "Forgot Password",
    "About",
    "Docs",
    "Products",
  ];

  const handleBack = () => {
    router.back();
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div
      className={`flex items-center p-2 w-screen text-2xl h-20 ${
        path === "/" ? "justify-center" : "justify-between"
      }`}
    >
      {path !== "/" && (
        <button
          className="hover:border-white bg-white hover:bg-black p-2 border rounded-lg w-20 text-black hover:text-white transition-all ease-in-out"
          onClick={handleBack}
        >
          Back
        </button>
      )}
      <div>
        {pages.map((item) => (
          <Link
            href={`/${
              item.toLowerCase() === "forgot password"
                ? "forgotPassword"
                : item.toLowerCase()
            }`}
            key={item}
            className={`hover:bg-white p-2 border border-black rounded-lg hover:text-black ${
              path.includes(
                item.toLowerCase() === "forgot password"
                  ? "forgotPassword"
                  : item.toLowerCase()
              )
                ? "bg-slate-600"
                : ""
            }`}
          >
            {item}
          </Link>
        ))}
      </div>
      {path !== "/" && (
        <button
          className="hover:border-white bg-white hover:bg-black p-2 border rounded-lg w-20 text-black hover:text-white transition-all ease-in-out"
          onClick={handleHome}
        >
          Home
        </button>
      )}
    </div>
  );
};

export default NavLinks;
