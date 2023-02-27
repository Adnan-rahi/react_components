import InputsDoc from "../Fields/InputsDoc";
import NameFields from "../Fields/NameFields";
import PhoneNumber from "../Fields/PhoneNumber";
import Emailfield from "../Fields/Emailfield";
import PasswordField from "../Fields/PasswordField";
import WebsiteField from "../Fields/WebsiteField";

import React, {useState} from "react";

const Center = () => {
    const  [changeLabel, setChangeLabel] = useState("");

  function handleChangePassword() {
    setChangeLabel("This is a props pass from parent to child component")
  }

  return (
    <div>
      <InputsDoc />
      <NameFields />
      <PhoneNumber />
      <Emailfield
        placeholder="Enter your Email address"
        changeLabel="The Label change using props"
        backgroundColor="green"
      />
      <PasswordField
        diff="Password"
        change={(e) => {
          handleChangePassword({changeLabel});
        }}
      />
      <WebsiteField backgroundColor="blue" />
    </div>
  );
};

export default Center;
