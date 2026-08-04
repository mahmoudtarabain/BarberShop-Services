// Contact page with WhatsApp booking form
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    //  IMPORTANT: Replace this with YOUR WhatsApp number!
    // Format: country code + your number, NO + sign, NO spaces
    // Example: If your number is +961 70 123 456, write: 96170123456
    const YOUR_WHATSAPP_NUMBER = '96171092019'

    // Build the message
    const whatsappMessage = `*New Booking Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Preferred Date:* ${formData.date}%0A` +
      `*Notes:* ${formData.message || 'None'}%0A%0A` +
      `Sent from BarberShop-Services website`

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${whatsappMessage}`
    window.open(whatsappURL, '_blank')

    // Clear the form
    setFormData({ name: '', phone: '', service: '', date: '', message: '' })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contact & Booking</h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Book your appointment and we will receive it directly on WhatsApp!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded shadow border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <div className="space-y-3 text-gray-600">
              <p><strong>Address:</strong> LALA-Main Road --beside ghassan gas station</p>
              <p><strong>Phone:</strong> (+961) 71-092019</p>
              <p><strong>Email:</strong> mahmoudtarrabain99@gmail.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h2>
            <div className="space-y-2 text-gray-600">
              <p>Tuesday - Saturday: 9:00 AM - 7:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
              <p>Monday: Closed</p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded shadow border border-green-200">
            <h2 className="text-xl font-bold text-green-800 mb-2">WhatsApp Booking</h2>
            <p className="text-green-700 text-sm">
              When you submit this form, it will open WhatsApp on your phone with all the details ready to send!
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white p-6 md:p-8 rounded shadow border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Appointment</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none"
                placeholder="(555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service *</label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none"
              >
                <option value="">Select a service</option>
                <option>Classic Haircut</option>
                <option>Beard Trim</option>
                <option>Haircut & Beard</option>
                <option>Hot Towel Shave</option>
                <option>Kids Haircut</option>
                <option>Hair Styling</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none resize-none"
                placeholder="Any special requests?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>Book via WhatsApp</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact