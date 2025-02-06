import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Default Dashboard",
};

const DefaultDashboard = () => {
  return <h1 className="text-5xl">Default Dashboard</h1>;
};

export default DefaultDashboard;
