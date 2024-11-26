// Traditional method

// import UserAnalytics from "@/components/UserAnalytics";
// import RevenueAnalytics from "@/components/RevenueAnalytics";
// import Notifications from "@/components/Notifications";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <div>{children}</div> {/* Content from page.tsx */}
//       <UserAnalytics /> {/* Component for user analytics*/}
//       <RevenueAnalytics /> {/* Component for revenue analytics*/}
//       <Notifications /> {/* Component for notifications*/}
//     </>
//   );
// }

//Parallel routes
export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <>
      <div>{children}</div>{" "}
      {/* complexDashboard/@children/page.tsx is a slot so technically we have 4 slots in layout.tsx file */}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  ) : (
    login
  );
}
