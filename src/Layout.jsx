import { Outlet } from "react-router-dom";
import CreateNewInflucencer from "./components/CreateNewInfluencer";
import UpdateInfluencerComp from "./components/UpdateInfluencerComp";
const Layout = () => {
  return (
    <>
      <Outlet />
      <CreateNewInflucencer/>
      <UpdateInfluencerComp/>
    </>
  )
};

export default Layout;