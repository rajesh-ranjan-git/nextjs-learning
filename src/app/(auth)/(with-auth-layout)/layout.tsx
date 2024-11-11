import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login/Register",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1>
        This is only available to login and register and not forgot password.
      </h1>
    </>
  );
}
