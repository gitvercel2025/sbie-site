import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@sbie.com.br',
      description: 'Resposta em até 24h'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '+55 (11) 99999-9999',
      description: 'Seg à Sex, 9h às 18h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'São Paulo, SP',
      description: 'Atendimento presencial'
    }
  ];

  const subjects = [
    'Informações sobre Treinamentos',
    'Consultoria Empresarial',
    'Coaching Individual',
    'Palestras e Eventos',
    'Parcerias',
    'Outros'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#4F5948] to-[#21302B] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/5 w-80 h-80 bg-[#B66D38]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/5 w-96 h-96 bg-[#DFC6AA]/3 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-[#889073] max-w-3xl mx-auto">
            Inicie sua jornada de transformação. Nossa equipe está pronta para ajudá-lo.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-[#21302B]/80 backdrop-blur-xl border border-[#4F5948]/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-[#DFC6AA] mb-6 text-center">
                  Envie sua Mensagem
                </h3>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-[#DFC6AA] mb-2">
                      Mensagem Enviada!
                    </h4>
                    <p className="text-[#889073]">
                      Obrigado pelo contato. Retornaremos em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#889073] w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          required
                          className="w-full bg-[#21302B]/50 backdrop-blur-sm border border-[#4F5948]/50 rounded-xl pl-12 pr-4 py-4 text-[#DFC6AA] placeholder-[#889073] focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/30 transition-all duration-300"
                        />
                      </div>
                      
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#889073] w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Seu e-mail"
                          required
                          className="w-full bg-[#21302B]/50 backdrop-blur-sm border border-[#4F5948]/50 rounded-xl pl-12 pr-4 py-4 text-[#DFC6AA] placeholder-[#889073] focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/30 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Phone and Subject */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#889073] w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Seu telefone"
                          className="w-full bg-[#21302B]/50 backdrop-blur-sm border border-[#4F5948]/50 rounded-xl pl-12 pr-4 py-4 text-[#DFC6AA] placeholder-[#889073] focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/30 transition-all duration-300"
                        />
                      </div>
                      
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#21302B]/50 backdrop-blur-sm border border-[#4F5948]/50 rounded-xl px-4 py-4 text-[#DFC6AA] focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/30 transition-all duration-300"
                      >
                        <option value="">Selecione o assunto</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject} className="bg-[#21302B] text-[#DFC6AA]">
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-6 text-[#889073] w-5 h-5" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Sua mensagem..."
                        rows={5}
                        required
                        className="w-full bg-[#21302B]/50 backdrop-blur-sm border border-[#4F5948]/50 rounded-xl pl-12 pr-4 py-4 text-[#DFC6AA] placeholder-[#889073] focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/30 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full px-8 py-4 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-xl text-[#21302B] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#B66D38]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-[#21302B] border-t-transparent rounded-full animate-spin"></div>
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Enviar Mensagem</span>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#DFC6AA] mb-4">
                  Outras Formas de Contato
                </h3>
                <p className="text-[#889073] leading-relaxed">
                  Escolha a forma de contato que mais se adequa às suas necessidades. 
                  Estamos aqui para ajudar você em sua jornada de desenvolvimento.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-[#21302B]/60 backdrop-blur-sm border border-[#4F5948]/40 rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] p-3 rounded-xl">
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#DFC6AA] mb-1">
                            {contact.title}
                          </h4>
                          <p className="text-[#B66D38] font-medium mb-1">
                            {contact.info}
                          </p>
                          <p className="text-sm text-[#889073]">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-[#21302B]/40 backdrop-blur-sm border border-[#4F5948]/30 rounded-2xl p-6 text-center">
                <h4 className="text-lg font-semibold text-[#DFC6AA] mb-2">
                  Pronto para Começar?
                </h4>
                <p className="text-[#889073] text-sm mb-4">
                  Agende uma conversa gratuita de 30 minutos para conhecer nossos programas.
                </p>
                <button className="group relative px-6 py-3 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full text-[#21302B] font-semibold transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Agendar Conversa</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;