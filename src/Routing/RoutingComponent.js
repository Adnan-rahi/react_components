import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Center from "../Components/UIs/Center";
import LandingLayout from "../Layouts/LandingLayout";
import Emailfield from "../Components/Fields/Emailfield";
import PasswordField from "../Components/Fields/PasswordField";
import Header from "../Components/UIs/Header";
import ComponentLayout from "../Layouts/ComponentLayout"
import WebsiteField from "../Components/Fields/WebsiteField";


export default function RoutingComponent() {

    return (
        <Router>
        <Routes>
        <Route exact path="/" element={<LandingLayout />} />
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/Components" element={<ComponentLayout />} />
        <Route exact path="/Email" element={<Emailfield />} />
        <Route exact path="/password" element={<PasswordField />} />
        <Route exact path="/Website" element={<WebsiteField />} />
        <Route exact path="/Center" element={<Center />} />
        </Routes>
        </Router>
    );
}