import {FaExternalLinkAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
export default function PasswordCard () {
    return (
        <div className="">
        <div className="space-y-2 space-y-2 w-11/12 rounded-xl h-64 shadow-md lg:max-w-lg">
            <Link to='/password' >
            <h3 className="text-1xl font-semibold p-3 bg-gray-50 flex justify-between">
            Password <FaExternalLinkAlt />
            </h3>
            </Link>
            <p className="text-gray-600 p-10">
                react with tailwind css simple card It is a long established
                fact that a reader will be distracted.
            </p>
        </div>
    </div>
    );
}