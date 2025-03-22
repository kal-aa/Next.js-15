type Children = {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
};
const layout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: Children) => {
  const Isloggedin = true;

  return Isloggedin ? (
    <>
      <div className="max-w-2xl mx-auto">
        <div>{children}</div>
        <div className="flex">
          <div className="flex flex-col">
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div className="flex flex-1">{notifications}</div>
        </div>
      </div>
    </>
  ) : (
    login
  );
};

export default layout;
