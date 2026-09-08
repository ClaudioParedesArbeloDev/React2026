import { Link } from "react-router-dom";

import logo from '../../assets/logo.png'

export default function NavBar (){
    /* JavaScript */
    
    return (
      /* HTML  */
      <header className="flex justify-around">
        <div className="flex flex-col items-center">
          <img src={logo} alt="logo" className="w-20" />
          <p className="text-xl">Code & Lens</p>
          <p className="uppercase tracking-[4px]">solutions</p>
        </div>
        <nav className="flex">
          <Link to="/">
            <li className="list-none">Home</li>
          </Link>
          <Link to="Products">
            <li className="list-none">Products</li>
          </Link>
          <li className="list-none">AboutUs</li>
          <li className="list-none">Contact</li>
        </nav>
        <div>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </header>
    );
}