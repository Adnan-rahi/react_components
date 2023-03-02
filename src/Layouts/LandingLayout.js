import Documentation from "../Components/Landing page components/Documentation";
import EmailCard from "../Components/Landing page components/EmailCard";
import NameCard from "../Components/Landing page components/NameCard";
import PasswordCard from "../Components/Landing page components/PasswordCard";
import PhoneNumberCard from "../Components/Landing page components/PhoneNumberCard";

const LandingLayout = () => {
  return (
    <>
      <div>
        <Documentation />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 mx-10">
        <NameCard />
        <EmailCard />
        <PasswordCard />
        <PhoneNumberCard />
      </div>
    </>
  );
};

export default LandingLayout;
