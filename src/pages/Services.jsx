function Services() {
  const YOUR_WHATSAPP_NUMBER = '+96171092019' //  actual WhatsApp number; 
  const services = [
    { name: 'Classic Haircut', price: '$9', desc: 'Traditional haircut with scissors and clippers. Includes wash and style.', time: '30 min' },
    { name: 'Beard Trim', price: '$3', desc: 'Shape and trim your beard for a clean, sharp look.', time: '20 min' },
    { name: 'Haircut & Beard', price: '$10', desc: 'Full package: haircut, beard trim, and hot towel treatment.', time: '45 min' },
    { name: 'Hot Towel Shave', price: '$15', desc: 'Classic straight razor shave with hot towel treatment.', time: '30 min' },
    { name: 'Kids Haircut', price: '$5', desc: 'Haircut for children under 12.', time: '25 min' },
    { name: 'Hair Styling', price: '$7', desc: 'Professional styling for special occasions.', time: '20 min' },
  ]
     const handleBook = (serviceName) => {
    const whatsappMessage = `*New Booking Request*%0A%0A` +
      `*Service:* ${serviceName}%0A` +
      `*Sent from BarberShop-Services website*%0A%0A` +
      `Hello, I want to book a ${serviceName}. Please confirm my appointment.`

    const whatsappURL = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${whatsappMessage}`
    window.open(whatsappURL, '_blank')
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Services</h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        We offer a wide range of grooming services for men. All services include a consultation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded shadow border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
              <span className="text-2xl font-bold text-yellow-600">{service.price}</span>
            </div>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
              <span>Duration: {service.time}</span>
              <button 
                onClick={() => handleBook(service.name)}
                className="bg-gray-900 text-white px-4 py-1 rounded hover:bg-green-600 transition-colors">
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services