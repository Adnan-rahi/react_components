import InputsDoc from "../Fields/InputsDoc";
import NameFields from "../Fields/NameFields";
import PhoneNumber from "../Fields/PhoneNumber";
import Emailfield from "../Fields/Emailfield";
import WebsiteField from "../Fields/WebsiteField";

import React, { useState } from "react";
import Header from "./Header";

const Center = () => {
  const [text, setText] = useState("https://");

  

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <Header />
      <InputsDoc />
      <NameFields />
      <PhoneNumber />
      <Emailfield
        changeLabel="Your Email Address"
        placeholder="Enter your Email address"
        backgroundColor="green"
      />
     
      <WebsiteField
        text={text}
        setValueCallback={setText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Center;
