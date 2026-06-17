import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Send } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationPage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    branch: 'komaMambal',
    date: null,
    time: '',
    guests: '2',
  });

  const branches = [
    { id: 'komaMambal', name: 'Koma Mambal', phone: '6281246597735' },
    { id: 'komaPoint', name: 'Koma Point', phone: '6281246597735' },
    { id: 'komaRenon', name: 'Koma Renon', phone: '6281246597735' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedBranch = branches.find(b => b.id === formData.branch);
    
    const formattedDate = formData.date 
      ? formData.date.toLocaleDateString('id-ID', { 
          day: '2-digit', 
          month: '2-digit', 
          year: 'numeric' 
        })
      : '';
    
    const message = `Halo ${selectedBranch.name}!

Saya ingin melakukan reservasi:

*Informasi Pribadi:*
Nama: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}

*Detail Reservasi:*
Cabang: ${selectedBranch.name}
Tanggal: ${formattedDate}
Waktu: ${formData.time}
Jumlah Tamu: ${formData.guests} orang`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${selectedBranch.phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-sand">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/70 to-coffee-800/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600"
          alt="Reservation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 h-full flex items-center justify-center text-center px-4"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mb-4 font-display drop-shadow-sm">
              Reservasi
            </h1>
            <p className="text-xl text-cream/80 max-w-2xl mx-auto">
              Pesan tempat favorit Anda dan nikmati pengalaman istimewa
            </p>
          </div>
        </motion.div>
      </section>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={sectionRef}>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="glass border border-beige-200 p-8 md:p-12 rounded-3xl bg-white/40"
        >
          {/* Personal Information Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-coffee-800 mb-8 font-serif flex items-center gap-3">
              <Users className="w-8 h-8 text-gold" />
              Informasi Pribadi
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-coffee-800 font-semibold mb-2">
                  Nama Lengkap <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-beige-300 text-coffee-800 placeholder-coffee-700/40 focus:outline-none focus:border-gold transition-colors shadow-sm"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-coffee-800 font-semibold mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-beige-300 text-coffee-800 placeholder-coffee-700/40 focus:outline-none focus:border-gold transition-colors shadow-sm"
                  placeholder="email@example.com"
                />
              </div>

              {/* WhatsApp */}
              <div className="md:col-span-2">
                <label htmlFor="whatsapp" className="block text-coffee-800 font-semibold mb-2">
                  Nomor WhatsApp <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-beige-300 text-coffee-800 placeholder-coffee-700/40 focus:outline-none focus:border-gold transition-colors shadow-sm"
                  placeholder="08123456789"
                />
              </div>
            </div>
          </div>

          {/* Reservation Details Section */}
          <div>
            <h2 className="text-3xl font-bold text-coffee-800 mb-8 font-serif flex items-center gap-3">
              <Calendar className="w-8 h-8 text-gold" />
              Detail Reservasi
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Branch */}
              <div className="md:col-span-2">
                <label htmlFor="branch" className="text-coffee-800 font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Pilih Cabang <span className="text-red-400">*</span>
                </label>
                <select
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-beige-300 text-coffee-800 focus:outline-none focus:border-gold transition-colors shadow-sm"
                >
                  {branches.map(branch => (
                    <option key={branch.id} value={branch.id} className="bg-white">
                      {branch.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="text-coffee-800 font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Tanggal <span className="text-red-400">*</span>
                </label>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Pilih tanggal"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-beige-300 text-coffee-800 focus:outline-none focus:border-gold transition-colors shadow-sm"
                  calendarClassName="custom-datepicker"
                  wrapperClassName="w-full"
                />
              </div>

              {/* Time */}
              <div>
                <label htmlFor="time" className="text-coffee-800 font-semibold mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Waktu <span className="text-red-400">*</span>
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-beige-300 text-coffee-800 focus:outline-none focus:border-gold transition-colors shadow-sm"
                />
              </div>

              {/* Number of Guests */}
              <div className="md:col-span-2">
                <label htmlFor="guests" className="text-coffee-800 font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Jumlah Tamu <span className="text-red-400">*</span>
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-beige-300 text-coffee-800 focus:outline-none focus:border-gold transition-colors shadow-sm"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num} className="bg-white">
                      {num} {num === 1 ? 'orang' : 'orang'}
                    </option>
                  ))}
                  <option value="10+" className="bg-white">10+ orang</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-10 bg-gold hover:bg-gold-dark text-white py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-3 shadow-lg"
          >
            <Send className="w-5 h-5" />
            Kirim via WhatsApp
          </motion.button>

          <p className="text-coffee-700/60 text-sm text-center mt-6">
            * Reservasi akan dikirim melalui WhatsApp ke cabang yang Anda pilih
          </p>
        </motion.form>
      </div>
    </div>
  );
};

export default ReservationPage;
