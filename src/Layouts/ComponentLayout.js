import Sidebar from "../Pages/Sidebar";

import Center from "../Pages/Center";

import RightSideBar from "../Pages/Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className=" w-3/4">
        <Center />
      </div>
      <div className="w-1/4">
        <p>
          <RightSideBar />
        </p>
      </div>
    </div>
  );
};

export default Layout;
