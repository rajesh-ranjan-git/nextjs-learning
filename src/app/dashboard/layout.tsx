const DashboardLayout = ({
  children,
  notifications,
  revenue,
  users,
  checkAuth,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  checkAuth: React.ReactNode;
}) => {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <div className="flex flex-col items-center text-2xl">
      {children}
      <div className="flex m-4">
        <div className="flex flex-col">
          {users}
          {revenue}
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center text-2xl">{checkAuth}</div>
  );
};

export default DashboardLayout;
