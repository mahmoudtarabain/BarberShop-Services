// Navigation bar with mobile menu
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="relative bg-gray-900 text-white shadow-md sticky top-0 z-50">
       <div
    className="absolute inset-0 opacity-10 bg-contain bg-center bg-no-repeat pointer-events-none"
    style={{ backgroundImage: 'url(/logo.png)' }}
  />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-2">
             <img src="/logo.png" alt="Barber Shop Logo" className="h-10 w-auto" />
                  BarberShop-Services
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-yellow-400 transition-colors font-medium ${
                  location.pathname === link.path ? 'text-yellow-400 border-b-2 border-yellow-400' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 px-4 rounded hover:bg-gray-700 ${
                  location.pathname === link.path ? 'bg-gray-700 text-yellow-400' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar