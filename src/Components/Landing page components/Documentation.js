import { Link } from "react-router-dom";

export default function Documentation() {
  return (
    <>
      <div className="px-4 mx-auto lg:px-4 lg:text-center my-14">
        <Link to="/Components">
          <h1 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 lg:font-extrabold lg:text-4xl lg:leading-snug dark:text-white lg:text-center 2xl:px-48">
            Swati UI Components
          </h1>
        </Link>
        <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl lg:px-64 lg:mb-16">
          Explore the whole collection of over 54 open-source UI components and
          interactive elements built with the utility classes from Tailwind CSS
          and Flowbite.
        </p>
      </div>
    </>
  );
}
