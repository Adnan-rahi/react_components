import './App.css';
import NameFields from './Components/NameFields';
import Header from './Components/Header'
import InputsDoc from './Components/InputsDoc';
import PhoneNumber from './Components/PhoneNumber';
import Emailfield from './Components/Emailfield';
import PasswordField from './Components/passwordField';
import WebsiteField from './Components/websiteField';
import Sidebar from './Components/Sidebar';



function App() {
  return (
    <div>
      <Header />
      <Sidebar /> 
      <InputsDoc />
      <NameFields />
      <PhoneNumber />
      <Emailfield />
      <PasswordField />
      <WebsiteField />
    </div>
  );
}

export default App;
