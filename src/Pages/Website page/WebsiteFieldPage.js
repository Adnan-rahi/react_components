import React, { useState } from "react";
import WebsiteField from "../../Components/Inputs-Fields/WebsiteField";

const WebsiteFieldPage = () => {
  const [text, setText] = useState("https://");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <React.Fragment>
      <div className="w-8/12 mx-auto container">
        <h1 className="text-3xl font-extrabold text-gray-900 font-sans pt-8 pb-2">
          Tailwind CSS Website Field - Flowbite
        </h1>
        <h6 className="text-xl font-normal pb-7 text-gray-500">
          Show contextual information to your users using Website Field elements
          based on Tailwind CSS
        </h6>
        <hr />
        <p className="pt-10 text-1.5xl text-gray-500 text-lg">
          The iWebsite Field is an important part of the form element that can
          be used to create interactive controls to accept data from the user
          based on multiple input types, such as text, email, number, password,
          URL, phone number, and more.
        </p>
        <p className="py-3 text-gray-500 text-lg">
          On this page you will find all of the input types based on multiple
          variants, styles, colors, and sizes built with the utility classes
          from Tailwind CSS and components from Flowbite.
        </p>
        <h1 className="text-2xl py-3 font-semibold">Website fields</h1>
        <p className="py-3 text-gray-500 text-lg">
          Use this example as a generic form element which includes multiple
          input fields types such as text, email, password, number, URL, and
          phone number and use the grid layout to add multiple columns and rows.
        </p>
        <WebsiteField
          text={text}
          setValueCallback={setText}
          onChange={handleChange}
        />
      </div>
    </React.Fragment>
  );
};

export default WebsiteFieldPage;
