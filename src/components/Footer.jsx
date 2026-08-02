function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-2">BarberShop-Services</h3>
            <p className="text-sm">Premium barbershop for the modern gentleman. Quality cuts, classic styles.</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-2">Hours</h3>
            <ul className="space-y-1 text-sm">
              <li>Mon: Closed</li>
              <li>Tues: 9:00 AM - 8:00 PM</li>
              <li>Wed: 9:00 AM - 8:00 PM</li>
              <li>Thu: 9:00 AM - 8:00 PM</li>
              <li>Fri: 9:00 AM - 8:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: 10:00 AM - 6:00 PM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-2">Contact</h3>
            <p className="text-sm">Phone: (+961) 123-45678</p>
            <p className="text-sm">Email: info@BarberShop-Services.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
          &copy; 2026 BarberShop-Services. All rights reserved. | CSCI390 Project
        </div>
      </div>
    </footer>
  )
}

export default Footer