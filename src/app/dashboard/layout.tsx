const DashboardLayout = ({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center w-screen h-[56vh] text-2xl">
      {children}
      <div className="flex m-4">
        <div className="flex flex-col">
          {users}
          {revenue}
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
