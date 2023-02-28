import Documentation from "../Components/Landing page components/Documentation";
import EmailCard from "../Components/Landing page components/EmailCard";
import NameCard from "../Components/Landing page components/NameCard";
import PasswordCard from "../Components/Landing page components/PasswordCard";
import Header from "../Components/UIs/Header";

const LandingLayout = () => {
  return (
    <>
       <div>
        <Header />
      <Documentation />
    </div>
    <div className="flex justify-between mt-6 container mx-auto">
      <EmailCard />
      <PasswordCard />
      <NameCard />
    </div>
    </>
 
  );
};

export default LandingLayout;
