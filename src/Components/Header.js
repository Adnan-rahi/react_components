import { AiFillPlayCircle } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'
import { MdDarkMode } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

function Header (){

    return (
        <nav className='border-b-2 border-t-2 border-gray-200  sm:px-4 rounded dark:bg-gray-900 mt-2'>
        <div className='container flex flex-wrap justify-between mx-auto py-3'>
       <div className='flex flex-row'>
        <AiFillPlayCircle  className='text-5xl text-blue-500'/>
        <h1 className='font-semibold whitespace-nowrap dark:text-whit text-2xl my-2'>Flowbite</h1>
       </div>
       <div className='border-2 border-gray-200 items-center flex flex-row gap-2 rounded-xl hover:bg-gray-100 px-2 cursor-pointer' >
        <AiOutlineSearch className="text-2xl text-gary-100"/><input type='search' placeholder='Search' className='outline-0 w-72 hover:bg-gray-100 cursor-pointer'  />
       </div>
        <ul className='flex flex-row gap-3 items-center cursor-pointer font-semibold'>
            <li className=' hover:text-blue-500'>Quickstart</li>
            <li className=' hover:text-blue-500'>Blocks</li>
            <li className=' hover:text-blue-500'>Figma</li>
            <li className=' hover:text-blue-500'>Blog</li>
            <li className=' hover:text-blue-500'>Resources</li>
            <li className=' hover:text-blue-500'>Pro version</li>
            <AiFillGithub className="text-4xl hover:bg-gray-100 p-2 hover:rounded-lg"/>
            <FaDiscord className="text-4xl hover:bg-gray-100 p-2 hover:rounded-lg"/>
            <AiFillYoutube className="text-4xl hover:bg-gray-100 p-2 hover:rounded-lg"/>
            <MdDarkMode className="text-4xl hover:bg-gray-100 p-2 hover:rounded-lg"/>
        <button className='bg-blue-500 rounded-lg p-1 text-white px-3 py-2  hover:bg-blue-800'>Pricing & FAQ</button>
        </ul>
        </div>
        </nav>
    )
}

export default Header;