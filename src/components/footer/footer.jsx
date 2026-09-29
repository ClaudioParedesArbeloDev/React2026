import { Link } from "react-router-dom";

import logo from '../../assets/logo.png'

export default function Footer () {
    return (
      <footer className="mt-16 bg-gray-900 text-gray-300">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4 md:px-8">
          {/* marca */}
          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <img src={logo} alt="logo" className="w-12" />
            <p className="text-lg font-bold text-white">Code & Lens</p>
            <p className="text-xs uppercase tracking-[4px] text-amber-500">solutions</p>
            <p className="mt-2 text-sm text-gray-400">
              Productos de calidad al mejor precio, directo a tu casa.
            </p>
          </div>

          {/* navegacion */}
          <div className="text-center sm:text-left">
            <h4 className="mb-4 font-semibold uppercase tracking-wide text-white">Navegación</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link to="/" className="transition-colors hover:text-amber-500">Home</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-amber-500">Products</Link></li>
              <li className="cursor-pointer transition-colors hover:text-amber-500">AboutUs</li>
              <li className="cursor-pointer transition-colors hover:text-amber-500">Contact</li>
            </ul>
          </div>

          {/* contacto */}
          <div className="text-center sm:text-left">
            <h4 className="mb-4 font-semibold uppercase tracking-wide text-white">Contacto</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><i className="fa-solid fa-location-dot mr-2 text-amber-500"></i>Buenos Aires, Argentina</li>
              <li><i className="fa-solid fa-envelope mr-2 text-amber-500"></i>contacto@codeandlens.com</li>
              <li><i className="fa-solid fa-phone mr-2 text-amber-500"></i>+54 11 1234-5678</li>
            </ul>
          </div>

          {/* redes */}
          <div className="text-center sm:text-left">
            <h4 className="mb-4 font-semibold uppercase tracking-wide text-white">Seguinos</h4>
            <div className="flex justify-center gap-3 sm:justify-start">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-amber-600 hover:text-white">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-amber-600 hover:text-white">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-amber-600 hover:text-white">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-500">
          &copy; 2026 Code & Lens Solutions. Todos los derechos reservados.
        </div>
      </footer>
    );
}
