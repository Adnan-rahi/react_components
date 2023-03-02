import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function PasswordCard() {
  return (
    <div className="">
      <Link to="/password">
        <div className="h-64 bg-white rounded-lg border border-gray-100 hover:border-white dark:border-gray-700 dark:hover:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light dark:bg-gray-900">
          <h3 className="text-1xl font-semibold p-3 bg-gray-50 flex justify-between border-b-2 border-gray-150">
            Password{" "}
            <FaExternalLinkAlt className="text-gray-400 text-lg py-auto" />
          </h3>
          <p className="text-gray-600 p-10">
            react with tailwind css simple card It is a long established fact
            that a reader will be distracted.
          </p>
        </div>
      </Link>
    </div>
  );
}
