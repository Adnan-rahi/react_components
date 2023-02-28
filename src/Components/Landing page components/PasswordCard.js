import {FaExternalLinkAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
export default function PasswordCard () {
    return (
        <div className="w-96 h-60 shadow-md lg:max-w-lg">
        <div className="space-y-2">
            <Link to='/password' >
            <h3 className="text-1xl font-semibold p-4 bg-gray-100 flex justify-between">
            Password <FaExternalLinkAlt />
            </h3>
            </Link>
            <p className="text-gray-600 p-4">
                react with tailwind css simple card It is a long established
                fact that a reader will be distracted.
            </p>
        </div>
    </div>
    );
}