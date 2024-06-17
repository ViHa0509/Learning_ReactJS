import { Outlet } from "react-router-dom";
import CreateNewInflucencer from "./components/CreateNewInfluencer";

const Layout = () => {
  return (
    <>
      <Outlet />
      <CreateNewInflucencer/>
    </>
  )
};

export default Layout;