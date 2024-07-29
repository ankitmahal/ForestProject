import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imGES/logo.jpeg'




function Navbar() {


  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (

    <div className='h-screen w-full fixed'>

      <nav className=' w-full bg-[#fbfbfbaa] flex justify-between items-center px-[5px] h-14 lg:gap-8 border-b-4 border-black'>

        <Link to='/'><div className='relative text-2xl font-bold px-2 py-1 text-white whitespace-nowrap '>
          <div className=' w-[150px] flex  items-center font-bold mx-[10px] border-2 text-white bg-black hover:text-green-500 width-20'>
            <img className="h-[40px]" src={Logo} alt="" />
            <span className='px-1 text-[15px]'> FORESTRIAN
            </span>
          </div></div></Link>

        <div className={`ravi absolute top-[56px]  left-0 max-lg:bg-[#36303084] w-full flex flex-col 
        gap-6 items-center py-2 text-lg font-bold lg:static lg:flex lg:flex-row lg:justify-between
                ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className='baskervville-sc-regular text-xl flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
            <li className='hover:text-white hover:bg-gray-950 px-3 py-2 rounded-xl font-semibold'><Link to="/">Home</Link></li>
            <li className='hover:text-white hover:bg-gray-950 px-3 py-2 rounded-xl font-semibold'><Link to="/Blogs">Blogs</Link></li>
            <li className='hover:text-white hover:bg-gray-950 px-3 py-2 rounded-xl font-semibold'><Link to="/Pictures">Pictures</Link></li>
            <li className='hover:text-white hover:bg-gray-950 px-3 py-2 rounded-xl font-semibold'><Link to="/Contact">Contacts</Link></li>
            <li className='hover:text-white hover:bg-gray-950 px-3 py-2 rounded-xl font-semibold'><Link to="/About">About</Link></li>
          </ul>

          <div className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>

          </div>

          <div className='mx-[100px] hover:text-[#30932f] hover:scale-110 transform duration-500'>
            <i class="fa-solid fa-cloud-sun-rain fa-lg"></i>
          </div>

          <div className='flex py-[100px]'>
            <Link to="/login"><button className='flex justify-center items-center rounded-full h-10 w-[90px] '>
              <div className='flex text-center justify-center border-2 border-black -200 hover:text-white hover:bg-gray-950 px-3 py-1 bg-white -700 rounded-xl hover:scale-110 transform duration-300 font-semibold mx-[1px]'>
                LogIn</div></button></Link>
            <Link to="/signUp"><button className='flex justify-center items-center rounded-full h-10 w-[90px] '>
              <div className='flex text-center justify-center border-2 border-black -200 hover:text-white hover:bg-gray-950 px-3 py-1 bg-white rounded-xl hover:scale-110 transform duration-300 font-semibold mx-[1px]'> 
              SignUp</div></button></Link>
              </div>
        </div>

        <div  className='lg:hidden sm:*'>
          {
            menuOpen ? (<i className="fa-solid fa-xmark fa-xl" style={{ color: "black" }} onClick={toggleMenu} />)
            :
            (<i className="fa-solid fa-bars fa-2xl" style={{ color: "black" }} onClick={toggleMenu} />)
          }
        
        </div>

      </nav>

    </div>

  )
}


export default Navbar