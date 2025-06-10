'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaFacebook, FaEnvelope, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { ClientSideStrings } from '@/components/translations/ClientSideTranslations';
import HeroSection from '@/sections/HeroSection';
import { hero1 } from '@/public/images/heroSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const { contact } = ClientSideStrings();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate delay
    setTimeout(() => {
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
           <HeroSection
          backgroundImage={hero1}
          title={contact.heroSection.title}
          description={contact.heroSection.description}
         minHeight='70vh'
        />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">{contact.contactInfo.title}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{contact.contactInfo.phone.label}</h3>
                  <a href={contact.contactInfo.phone.link} className="text-gray-600 hover:text-blue-600 transition">
                    {contact.contactInfo.phone.number}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-full text-green-600">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{contact.contactInfo.whatsapp.label}</h3>
                  <a href={contact.contactInfo.whatsapp.link} className="text-gray-600 hover:text-green-600 transition">
                    {contact.contactInfo.whatsapp.number}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-full text-white">
                  <FaFacebook size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{contact.contactInfo.facebook.label}</h3>
                  <a 
                    href={contact.contactInfo.facebook.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {contact.contactInfo.facebook.text}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-full text-red-600">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{contact.contactInfo.email.label}</h3>
                  <a href={contact.contactInfo.email.link} className="text-gray-600 hover:text-red-600 transition">
                    {contact.contactInfo.email.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{contact.formSection.title}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {contact.formSection.formFields.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder={contact.formSection.formFields.name.placeholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {contact.formSection.formFields.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder={contact.formSection.formFields.email.placeholder}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {contact.formSection.formFields.phone.label}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder={contact.formSection.formFields.phone.placeholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {contact.formSection.formFields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                  placeholder={contact.formSection.formFields.message.placeholder}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    {contact.loadingMessage}
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    {contact.formSection.button.send}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
