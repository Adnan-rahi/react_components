import { useState } from "react";

const NameFields = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const firstName = (e) => {
    setFirst(e.target.value);
    console.log(e);
  };

  const LastName = (e) => {
    setLast(e.target.value);
    console.log(e);
  };

  return (
    <div className="container mx-auto p-2 w-2/4 font-serif">
      <div className="mb-6">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First name
        </label>
        <input
          type="text"
          value={first}
          onChange={firstName}
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="last_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Last name
        </label>
        <input
          type="text"
          value={last}
          onChange={LastName}
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Doe"
          required
        />
      </div>
    </div>
  );
};

export default NameFields;
