"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const authLinks = [
  {
    name: "LoginWithTemplate",
    href: "/loginWithTemplate",
  },
  {
    name: "RegisterWithTemplate",
    href: "/registerWithTemplate",
  },
  {
    name: "ForgotPasswordWithTemplate",
    href: "/forgotPasswordWithTemplate",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const pathname = usePathname();

  return (
    <>
      {authLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive ? "font-bold text-red-600 mr-4" : " text-blue-600 mr-4"
            }
          >
            {link.name}
          </Link>
        );
      })}
      <input
        className="p-2 m-2 border-2 rounded"
        placeholder="Testing with templates..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {children}
    </>
  );
}
