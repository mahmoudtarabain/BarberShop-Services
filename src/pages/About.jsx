function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">About BarberShop-Services</h1>
      
      <div className="bg-white p-8 rounded shadow border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          BarberShop-Services was founded in 2017 with one simple mission: to provide men with a premium grooming experience 
          at an affordable price. What started as a small shop with two chairs has grown into one of the most trusted barbershops 
          in the city.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our barbers are passionate about their craft and stay up-to-date with the latest trends and techniques. Whether you 
          want a classic cut or a modern style, we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To help every client look and feel their best by providing exceptional grooming services in a welcoming environment.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Quality over quantity</li>
            <li>Respect for every client</li>
            <li>Continuous improvement</li>
            <li>Community connection</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 text-white rounded p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Visit Us Today</h2>
        <p className="text-gray-300 mb-2">LALA-West Beqaa MainStreet</p>
        <p className="text-gray-300">Open Tuesday - Sunday</p>
      </div>
    </div>
  )
}

export default About