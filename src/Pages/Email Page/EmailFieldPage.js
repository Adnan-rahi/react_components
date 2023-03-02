import React from "react";
import Emailfield from "../../Components/Inputs-Fields/Emailfield";
import Sidebar from "../Sidebar"
import RightSideBar from "../RightSideBar"

const EmailFieldPage = () => {
  return (
    <React.Fragment>
      
      <div className="flex flex-row">
      <div className="w-64 p-12">
        <Sidebar />
      </div>
      <div className=" w-3/4">
      <div className="w-8/12 mx-auto container">
        <h1 className="text-3xl font-extrabold text-gray-900 font-sans pt-8 pb-2">
          Tailwind CSS Email Field - Flowbite
        </h1>
        <h6 className="text-xl font-normal pb-7 text-gray-500">
          Show contextual information to your users using alert elements based
          on Tailwind CSS
        </h6>
        <hr />
        <p className="pt-10 text-1.5xl text-gray-500 text-lg">
          The Email Field is an important part of the form element that can be
          used to create interactive controls to accept data from the user based
          on multiple input types, such as text, email, number, password, URL,
          phone number, and more.
        </p>
        <p className="py-3 text-gray-500 text-lg">
          On this page you will find all of the input types based on multiple
          variants, styles, colors, and sizes built with the utility classes
          from Tailwind CSS and components from Flowbite.
        </p>
        <h1 className="text-2xl py-3 font-semibold">Email fields</h1>
        <p className="py-3 text-gray-500 text-lg">
          Use this example as a generic form element which includes multiple
          input fields types such as text, email, password, number, URL, and
          phone number and use the grid layout to add multiple columns and rows.
        </p>
        <Emailfield
          changeLabel="Your Email Address"
          placeholder="Enter your Email address"
          backgroundColor="green"
        />
      </div>
      </div>
      <div className="w-1/4 p-12">
          <RightSideBar />
      </div>
    </div>
    </React.Fragment>
  );
};

export default EmailFieldPage;
