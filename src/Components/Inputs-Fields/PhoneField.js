import React, { useState } from "react";

const PhoneField = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ValidPhoneNumber, setValidPhoneNumber] = useState("");
  
    const handlePhoneNumber = (e) => {
      const phoneNumberPattern = /^\d{11}$/; 
      setPhoneNumber(); 
      setValidPhoneNumber(phoneNumberPattern.test(e.target.value));
    };
  return (
    <div className="p-2 mb-6">
      <label htmlFor="Phone Number" className="block">
        Phone Number
      </label>
      <input
        type="text"
        placeholder="03**-***-**55"
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={phoneNumber}
        onChange={handlePhoneNumber}
        maxLength={11}
        />
          {ValidPhoneNumber ?  (
        <p className="text-green-800">Lenght of phone number is valid</p>
      ) : (
        <p className="text-red-900">Lenght too short <br />This field must be numbers</p>
      )}
      </div>
  );
};

export default PhoneField;
