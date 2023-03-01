import React, { useState } from "react";
import InputsDoc from "../Components/Inputs-Fields/InputsDoc";
import NameFields from "../Components/Inputs-Fields/NameFields";
import PhoneNumber from "../Components/Inputs-Fields/PhoneNumber";
import Emailfield from "../Components/Inputs-Fields/Emailfield";
import PasswordField from "../Components/Inputs-Fields/PasswordField";
import WebsiteField from "../Components/Inputs-Fields/WebsiteField";

export * from "./Center";


const Center = () => {
  const [changeLabel, setChangeLabel] = useState("Password");
  const [text, setText] = useState("https://");

  function handleChange(e) {
    setText(e.target.value);
  }
  
  function handleChangePassword() {
    setChangeLabel("Password must be 8 digits");
  }

  return (
    <div>

      <InputsDoc />
      <NameFields />
      <PhoneNumber />
      <Emailfield
        changeLabel="Your Email Address"
        placeholder="Enter your Email address"
        backgroundColor="green"
      />
      <PasswordField
        changeLabel={changeLabel}
        onChange={handleChangePassword}
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
