"use client";
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Music2,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    fecha: "",
    mensaje: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    isError: false,
    show: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí irá la lógica de envío del formulario
    setSubmitStatus({
      message: "¡Gracias por contactarnos! Te responderemos pronto.",
      isError: false,
      show: true,
    });

    // Reset form
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      tipoEvento: "",
      fecha: "",
      mensaje: "",
    });

    // Hide message after 5 seconds
    setTimeout(() => {
      setSubmitStatus((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      info: "Vía a Guaranda Km 5, a 200m de la Iglesia de Santa Rosa, Ambato",
      color: "bg-blue-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      info: "+593 95 990 6175",
      color: "bg-green-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "info@plussfiestas.com",
      color: "bg-red-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horario",
      info: "Lunes a Sábado: 9:00 AM - 7:00 PM",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen pt-32 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F39200]/80 to-pink-500/80">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/pluss.jpg')",
              opacity: 0.3,
            }}
          />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="max-w-2xl text-lg">
            Estamos aquí para hacer tu evento especial. ¡Cuéntanos tus ideas!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="grid md:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div
                className={`${info.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}
              >
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {info.title}
              </h3>
              <p className="text-gray-600">{info.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-[#F39200] mb-8">
            Envíanos un Mensaje
          </h2>

          {submitStatus.show && (
            <div
              className={`p-4 rounded-lg mb-6 text-center ${
                submitStatus.isError
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F39200] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F39200] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F39200] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Tipo de Evento
                </label>
                <select
                  name="tipoEvento"
                  value={formData.tipoEvento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F39200] focus:border-transparent"
                >
                  <option value="">Seleccionar...</option>
                  <option value="cumpleanos">Cumpleaños</option>
                  <option value="boda">Boda</option>
                  <option value="babyShower">Baby Shower</option>
                  <option value="empresarial">Evento Empresarial</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Fecha del Evento
                </label>
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F39200] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F39200] focus:border-transparent"
                placeholder="Cuéntanos más sobre tu evento..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#F39200] text-white px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#F39200] mb-8">
            Síguenos en Redes Sociales
          </h2>

          <div className="flex justify-center space-x-8">
            <a
              href="https://facebook.com/PlussFiestas"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <Facebook className="w-10 h-10 text-blue-600" />
            </a>
            <a
              href="https://instagram.com/Pluss.fiestas"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <Instagram className="w-10 h-10 text-pink-600" />
            </a>
            <a
              href="https://tiktok.com/@Pluss.fiestas"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <Music2 className="w-10 h-10 text-black" />
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] bg-white `shadow-lg` mx-4 rounded-lg overflow-hidden my-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.2495673926647!2d-78.66197529415645!3d-1.2814981589384595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d3790021a57eb9%3A0x9274ec1e3d5e3be0!2sPLUSS%20Art%C3%ADculos%20de%20Fiestas%20y%20Decoraci%C3%B3n!5e0!3m2!1ses!2sec!4v1701989475810!5m2!1ses!2sec"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

      </section>
    </div>
  );
};

export default ContactPage;
