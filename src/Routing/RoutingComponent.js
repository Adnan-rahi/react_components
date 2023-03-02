import { Routes, Route } from "react-router-dom";
import LandingLayout from "../Layouts/LandingLayout";
import Center from "../Pages/Center";
import ComponentLayout from "../Layouts/ComponentLayout";
import WebsiteFieldPage from "../Pages/Website page/WebsiteFieldPage";
import PasswordFieldPage from "../Pages/Password Page/PasswordFieldPage";
import EmailFieldPage from "../Pages/Email Page/EmailFieldPage";
import PhonePage from "../Pages/Phone Number/PhonePage";

export default function RoutingComponent() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingLayout />} />
      <Route exact path="/Components" element={<ComponentLayout />} />
      <Route
        exact
        path="/Page/Email-field"
        element={<EmailFieldPage />}
      />
      <Route exact path="/password" element={<PasswordFieldPage />} />
      <Route exact path="/Center" element={<Center />} />
      <Route exact path="/Website" element={<WebsiteFieldPage />} />
      <Route exact path="/Phone-Number" element={<PhonePage />} />
    </Routes>
  );
}
