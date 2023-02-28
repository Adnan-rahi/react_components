import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="border-b-2 border-t-2 border-gray-200  sm:px-4 rounded dark:bg-gray-900 mt-2">
      <div className="container flex flex-wrap justify-between mx-auto py-3">
        <div className="flex flex-row">
          {/* <AiFillPlayCircle className="text-5xl text-blue-500" /> */}
          <img
            src="https://images.unsplash.com/photo-1668933182157-812dfdfe6b3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-10 h-10 rounded-full mt-4 mr-2"
            alt="Logo"
          />
          <Link to="/" >
          <h1 className="font-semibold whitespace-nowrap dark:text-whit text-2xl my-2">
            Control
            <p className="text-sm ml-3 italic text-blue-500">The inputs</p>
          </h1>
            </Link>
        </div>
        <div className="relative ">
          <AiOutlineSearch className="text-1xl text-gary-100 absolute top-5 z-10  text-gray-500 left-2" />
          <input
            type="search"
            placeholder="Search"
            className="outline-0 mt-2 w-50 hover:bg-gray-100 cursor-pointer border-2 border-gray-200 items-center flex flex-row gap-2 px-8 py-1 rounded-lg hover:bg-gray-100"
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;

































// Code for full Header.

// import { AiFillPlayCircle } from "react-icons/ai";
// import { AiFillGithub } from "react-icons/ai";
// import { FaDiscord } from "react-icons/fa";
// import { AiFillYoutube } from "react-icons/ai";
// import { MdDarkMode } from "react-icons/md";

/* <ul className="flex flex-row gap-3 items-center cursor-pointer font-semibold">
  <li className=" hover:text-blue-500">Quickstart</li>
  <li className=" hover:text-blue-500">Blocks</li>
  <li className=" hover:text-blue-500">Figma</li>
  <li className=" hover:text-blue-500">Blog</li>
  <li className=" hover:text-blue-500">Resources</li>
  <li className=" hover:text-blue-500">Pro version</li>
  <AiFillGithub className="text-4xl hover:bg-gray-100 p-2 hover:rounded-lg" />
  <FaDiscord className="text-4xl hover:bg-gray-100 p-2 hover:rounded-lg" />
  <AiFillYoutube className="text-4xl hover:bg-gray-100 p-2 hover:rounded-lg" />
  <MdDarkMode className="text-4xl hover:bg-gray-100 p-2 hover:rounded-lg" />
  <button className="bg-blue-800 rounded-lg p-1 text-white px-3 py-2  hover:bg-blue-900">
    Pricing & FAQ
  </button>
</ul> */

