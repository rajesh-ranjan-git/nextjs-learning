import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center w-screen h-[54vh] text-5xl">
      Dashboard
    </div>
  );
};

export default Dashboard;
