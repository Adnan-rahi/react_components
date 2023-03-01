import React from "react";
import Footer from "./Pages/Footer";
import RoutingComponent from "./Routing/RoutingComponent";
import Header from "./Pages/Header";
import { BrowserRouter } from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <RoutingComponent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
