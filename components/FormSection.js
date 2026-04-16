import { useState } from 'react';
import { formFields, whatsappNumber, socialLinks } from '../lib/data';

export default function FormSection() {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp message
    const message = `
*SOLICITUD DE PRESUPUESTO*

Nombre: ${formData.name}
Club/Equipo: ${formData.organization}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
Tipo de prenda: ${formData.garmentType}
Categoría: ${formData.category}
Cantidad: ${formData.quantity}

Detalle:
${formData.details}
    `.trim();

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setFormData({});
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Solicitar presupuesto</h2>
          <p className="section-subtitle">Completá el formulario y nos contactaremos</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {formFields.map((field) => {
              if (field.type === 'select') {
                return (
                  <select
                    key={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required={field.required}
                    className="px-4 py-3 border-2 border-light rounded-lg focus:outline-none focus:border-primary bg-white"
                  >
                    <option value="">Seleccionar {field.label}</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                );
              }

              if (field.type === 'textarea') {
                return (
                  <textarea
                    key={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                    rows="4"
                    className="col-span-full px-4 py-3 border-2 border-light rounded-lg focus:outline-none focus:border-primary resize-none"
                  />
                );
              }

              return (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.label}
                  className="px-4 py-3 border-2 border-light rounded-lg focus:outline-none focus:border-primary"
                />
              );
            })}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-primary w-full md:w-auto"
          >
            Solicitar presupuesto
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
              ✓ Presupuesto enviado por WhatsApp. Te contactaremos pronto.
            </div>
          )}
        </form>

        {/* Alternative CTA */}
        <div className="text-center mt-8">
          <p className="text-accent mb-4">¿Preferís contactar directamente?</p>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Chatea por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
