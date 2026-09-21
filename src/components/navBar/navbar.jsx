import { Link } from "react-router-dom";

import logo from '../../assets/logo.png'

export default function NavBar (){
    /* JavaScript */
    
    return (
      /* HTML  */
      <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-y-2 bg-white px-4 py-3 shadow-md md:flex-nowrap md:px-8">
        <div className="flex flex-col items-center">
          <img src={logo} alt="logo" className="w-10 md:w-14" />
          <p className="font-bold text-gray-800 md:text-lg">Code & Lens</p>
          <p className="text-xs uppercase tracking-[4px] text-amber-600">solutions</p>
        </div>
        <nav className="order-last flex w-full justify-center gap-6 border-t border-gray-100 pt-2 text-sm font-medium text-gray-600 md:order-0 md:w-auto md:gap-8 md:border-0 md:pt-0 md:text-base">
          <Link to="/" className="transition-colors hover:text-amber-600">
            <li className="list-none">Home</li>
          </Link>
          <Link to="Products" className="transition-colors hover:text-amber-600">
            <li className="list-none">Products</li>
          </Link>
          <li className="cursor-pointer list-none transition-colors hover:text-amber-600">AboutUs</li>
          <li className="cursor-pointer list-none transition-colors hover:text-amber-600">Contact</li>
        </nav>
        <div className="cursor-pointer text-xl text-gray-700 transition-colors hover:text-amber-600">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </header>
    );
}