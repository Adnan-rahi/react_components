import Sidebar from "../Components/UIs/Sidebar";

import Center from "../Components/UIs/Center";

import RightSideBar from "../Components/UIs/RightSideBar";

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
