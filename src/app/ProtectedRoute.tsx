"use client";

interface ProtectedRouteProps {
  children: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (sessionStorage.getItem("token")) {
    return <>{children}</>;
  } else {
    // console.log("Users not authorized");
    return null;
  }
  return;
};
export default ProtectedRoute;
