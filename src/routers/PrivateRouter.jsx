import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useAuthContext();
  console.log(currentUser);
  return (
    <div>{currentUser ? <Outlet /> : <Navigate to="/login" replace />}</div>
  );
};

export default PrivateRouter;
