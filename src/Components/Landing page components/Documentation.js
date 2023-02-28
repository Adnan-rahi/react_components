import { Link } from "react-router-dom";

export default function Documentation() {
  return (
    <>
    <div className="">
      <Link to="/Components">
      <h1 className="text-4xl text-bold text-center pt-5">Different Inputs Fields</h1>
      </Link>
      <p className="text-1xl font-normal mx-auto pt-4 w-2/4 text-center">
        Explore the whole collection of over 54 open-source UI components and
        interactive elements built with the utility classes from Tailwind CSS
        and Flowbite.
      </p>
    </div>
    </>
  );
}
