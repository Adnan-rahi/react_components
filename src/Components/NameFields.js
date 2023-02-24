

export default function NameFields () {

    return (
        
        <div className="container mx-auto px-4">
        <div className="grid mb-6 md:grid-cols-4 gap-6 justify-items-centerr">
        <div >
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required /> 
        </div>
        </div>
        </div>
       
    )
}