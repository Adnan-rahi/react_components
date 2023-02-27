import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div>
    <nav className="border-b-2 border-t-2 border-gray-200  sm:px-4 rounded dark:bg-gray-900 mt-2">
      <div className="container flex flex-wrap justify-between mx-auto py-3">
        <div className="flex flex-row">
          <AiFillPlayCircle className="text-5xl text-blue-500" />
          <h1 className="font-semibold whitespace-nowrap dark:text-whit text-2xl my-2">
            Flowbite
          </h1>
        </div>
        <div className="relative ">
          <AiOutlineSearch className="text-1xl text-gary-100 absolute top-5 z-10  text-gray-500 left-2" />
          <input
            type="search"
            placeholder="Search"
            className="outline-0 mt-2 w-50 hover:bg-gray-100 cursor-pointer border-2 border-gray-200 items-center flex flex-row gap-2 px-8 py-1 rounded-lg hover:bg-gray-100"
          />
        </div>
        <ul className="flex flex-row gap-3 items-center cursor-pointer font-semibold">
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
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Header;
