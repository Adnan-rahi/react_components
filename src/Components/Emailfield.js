

export default function Emailfield () {
    return (
        <div className="container m-auto p-2 w-2/4 mb-6">
        <label htmlFor="Email" className="block">Email Address</label>
        <input type='email' placeholder="Email Address" className="focus:outline-none w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    )
}