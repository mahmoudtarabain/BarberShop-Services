// Home page with hero section
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-pink-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            BarberShop-Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Where style meets precision. Get the perfect haircut from experienced barbers.
          </p>
          <Link
            to="/services"
            className="inline-block bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded hover:bg-yellow-400 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow border border-gray-200 text-center">
            <div className="text-4xl mb-4">✂️</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Barbers</h3>
            <p className="text-gray-600">Our team has over 8 years of experience in classic and modern styles.</p>
          </div>
          <div className="bg-white p-6 rounded shadow border border-gray-200 text-center">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">No Waiting</h3>
            <p className="text-gray-600">Book your appointment online and skip the line. We value your time.</p>
          </div>
          <div className="bg-white p-6 rounded shadow border border-gray-200 text-center">
            <div className="text-4xl mb-4">💈</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Quality Products</h3>
            <p className="text-gray-600">We use only premium grooming products for the best results.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-500 text-gray-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready for a Fresh Cut?</h2>
          <p className="text-xl mb-8">
            Walk in today or book an appointment online.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gray-900 text-white font-bold py-3 px-8 rounded hover:bg-gray-700 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home