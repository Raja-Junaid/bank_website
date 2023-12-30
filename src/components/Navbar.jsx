import { useState } from "react";
import { navLinks } from '../constants';
import { hamburger, close } from '../assets';
import styles from '../style';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="relative w-full flex justify-between items-center max-container">
      <h2 className="font-poppins text-3xl font-bold text-darkTeal tracking-tight">Junaid.</h2>

      <ul className="flex-1 lg:flex justify-center items-center hidden">
        {navLinks.map((navlink, index) => (
          <li key={navlink.id}>
            <a href={`#${navlink.id}`} className={`text-lg text-darkGreen ${index === navLinks.length - 1 ? 'mr-0' : 'mr-14'} hover:text-gray-950 transition-all`}>{navlink.title}</a>
          </li>
        ))}
      </ul>

      <div className="lg:flex gap-x-3 hidden">
        <button className={`${styles.navBtn} bg-darkTeal text-white hover:bg-white hover:text-darkTeal`}>Sign Up</button>
        <button className={`${styles.navBtn} bg-white text-darkTeal hover:bg-darkTeal hover:text-white`}>Log In</button>
      </div>

      <div className="block lg:hidden">
        <img 
          src={toggle ? close : hamburger} 
          alt="Hamburger Menu"
          className="w-[30px] h-[30px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <ul className={`absolute top-10 right-0 bg-cyan-800 w-[140px] h-[190px] flex-1 ${toggle ? 'flex' : 'hidden'} justify-center items-center flex-col rounded-lg sidebar customShadow`}>
        {navLinks.map((navlink, index) => (
          <li key={navlink.id}>
            <a href={`#${navlink.id}`} className={`text-lg inline-block tracking-normal ${index === navLinks.length - 1 ? 'mb-0' : 'mb-3'} text-white`}>{navlink.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar