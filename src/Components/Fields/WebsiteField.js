import React, {useState} from "react";

function WebsiteField (props)  {
    const [color, setColor] = useState(props.backgroundColor)

    function handleColor () {
        setColor("green")
    }

    return (
        <div className="p-2 mb-6">
            <label htmlFor="Website" className="block">Website</label>
            <input style={{backgroundColor : color}} onClick={handleColor} type='url' placeholder="https://www.website.com" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
    )
}

export default WebsiteField;