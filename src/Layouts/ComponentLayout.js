import Sidebar from "../Pages/Sidebar";

import Center from "../Pages/Center";

import RightSideBar from "../Pages/RightSideBar";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <div className="w-64 p-12">
        <Sidebar />
      </div>
      <div className=" w-3/4">
        <Center />
      </div>
      <div className="w-1/4 p-12">
          <RightSideBar />
      </div>
    </div>
  );
};

export default Layout;
