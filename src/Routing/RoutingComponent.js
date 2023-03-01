
import { Routes, Route } from "react-router-dom";
import LandingLayout from "../Layouts/LandingLayout";
import Center from "../Pages/Center";
import Emailfield from "../Components/Inputs-Fields/Emailfield";
import PasswordField from "../Components/Inputs-Fields/PasswordField";
import ComponentLayout from "../Layouts/ComponentLayout";
import WebsiteField from "../Components/Inputs-Fields/WebsiteField";


export default function RoutingComponent() {
  return (

      <Routes>
        <Route exact path="/" element={<LandingLayout />} />
        <Route exact path="/Components" element={<ComponentLayout />} />
        <Route exact path="/Components/Inputs-Fields/Emailfield" element={<Emailfield />} />
        <Route exact path="/password" element={<PasswordField />} />
      <Route exact path="/Center" element={<Center />} />
      <Route exact path="/Website" element={<WebsiteField />} />
      </Routes>
  );
}
