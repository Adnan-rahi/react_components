import Footer from './Components/UIs/Footer';
// import Header from './Components/UIs/Header';
// import LandingLayout from './Layouts/LandingLayout';
// import ComponentLayout from './Layouts/ComponentLayout';
import RoutingComponent from './Routing/RoutingComponent';
import PasswordField from "./Components/Fields/PasswordField";
import React, { useState } from "react";

function App() {
  const [changeLabel, setChangeLabel] = useState("Password");
  function handleChangePassword() {
    setChangeLabel("Password must be 8 digits");
  }
  return (
    <div>
      {/* <Header /> */}
      {/* <LandingLayout />
      <ComponentLayout /> */}
      <RoutingComponent />
      <PasswordField
        changeLabel={changeLabel}
        onChange={handleChangePassword}
      />
      <Footer />
    </div>
  );
}

export default App;
