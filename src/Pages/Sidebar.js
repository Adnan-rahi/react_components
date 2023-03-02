import React from "react";

const Sidebar = () => {
    return (
        <React.Fragment className="p-5 pt-12 overflow-y-scroll h-screen">
            <h1 className="text-1xl uppercase font-semibold mb-4">Forms</h1>
            <p className="mb-3 cursor-pointer  text-gray-500">Input Field</p>
            <p className="mb-3 cursor-pointer  text-gray-500">File Input</p>
            <p className="mb-3 cursor-pointer  text-gray-500">Search Input</p>
            <p className="mb-3 cursor-pointer  text-gray-500">Select</p>
            <p className="mb-3 cursor-pointer  text-gray-500">Textarea</p>
            <p className="mb-3 cursor-pointer  text-gray-500">Checkbox</p>
            <p className="mb-3 cursor-pointer  text-gray-500">Radio</p>
            <p className="mb-3 cursor-pointer  text-gray-500">Toggle</p>
            <p className="mb-3 cursor-pointer  text-gray-500">Range</p>
        </React.Fragment>
    )
}

export default Sidebar;
