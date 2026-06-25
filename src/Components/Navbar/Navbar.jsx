import { FaHeart } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5"; 
import { Link } from "react-router-dom";



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault()
        
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const handleScroll = () => {

            setIsScrolled(window.scrollY > 10)

        }
        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll)
    },[])





  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50  ${isScrolled ? 'shadow-2xl' : ''}` }>
        <nav className=' max-w-300 flex justify-between items-center mx-auto md:h-[14vh] h-[12vh] px-10'>
            {/*logo*/}
            <Link to='/' className="text-3xl font-semibold">
           Gr<span className="text-orange-500">O</span>cery
            </Link>

           {/*Desktop*/}
           <ul className='hidden md:flex items-center gap-x-15'>
            <li>
                <a href='#' className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Home</a>
            </li>

            <li>
                <a href='#' className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About Us</a>
            </li>

            <li>
                <a href='#' className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a>
            </li>

            <li>
                <a href='#' className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact</a>
            </li>
           </ul>

           {/*nav action*/}
           <div className="flex items-center gap-x-10">
            {/*input-field*/}
             <div className="hidden md:flex justify-center items-center  p-1 border-2 border-orange-500 rounded-full">
                <input type="text" name="text" id="text" placeholder="search.." autoComplete="off"
                className="flex-1 h-[4vh] p-3 focus:outline-none"/>
                <button className='bg-orange-500  text-white h-8 w-8 flex justify-center items-center rounded-full text-xl'>
                    <FaSearch />
                </button>
             </div>


               <a href="#" className=" text-zinc-800 text-2xl">
                 <FaHeart />
               </a>
               <a href="#" className=" text-zinc-800 text-2xl">
                  <RiShoppingBag4Fill />
               </a>

               {/*hamburger*/}
               <a href="" className=" text-zinc-800 text-2xl md:hidden" onClick={toggleMenu}>
               {showMenu ? <IoCloseSharp />:<IoMenu />}
               </a>

           </div>

           {/*mobile menu*/}
           <ul className={`md:hidden flex flex-col gap-y-10 items-center gap-x-10 absolute bg-orange-500/15 backdrop-blur-xl shadow-lg rounded-xl p-10 top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
            <li>
                <a href='#' className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Home</a>
            </li>

            <li>
                <a href='#' className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About Us</a>
            </li>

            <li>
                <a href='#' className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a>
            </li>

            <li>
                <a href='#' className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact</a>
            </li>

            <li className="md:hidden flex justify-center items-center  p-1 border-2 border-orange-500 rounded-full">
                <input type="text" name="text" id="text" placeholder="search.." autoComplete="off"
                className="flex-1 h-[4vh] p-3 focus:outline-none"/>
                <button className='bg-orange-500  text-white h-8 w-8 flex justify-center items-center rounded-full text-xl'>
                    <FaSearch />
                </button>
             </li>
           </ul>


        </nav>
    </header>
  )
}

export default Navbar
