import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin as LinkedIn, Youtube, Mail, Phone, MapPin, Heart, BookOpen, Users, ArrowRight, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Rodrigo', href: '#about' },
    { name: 'Treinamentos', href: '#training' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contact' }
  ];

  const services = [
    { name: 'Coaching Individual', href: '#' },
    { name: 'Consultoria Empresarial', href: '#' },
    { name: 'Palestras e Workshops', href: '#' },
    { name: 'Certificações', href: '#' },
    { name: 'Mentoria Executiva', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#21302B] to-[#1a2520] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38]"></div>
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-[#B66D38]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[#DFC6AA]/3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-[#B66D38] rounded-full opacity-40"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-[#4F5948]/30 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] bg-clip-text text-transparent">
                    Transforme sua Vida
                  </span>
                </h3>
                <p className="text-[#889073] text-lg">
                  Receba conteúdos exclusivos sobre Inteligência Emocional diretamente no seu e-mail
                </p>
              </div>

              <div className="relative group max-w-2xl mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-[#21302B]/80 backdrop-blur-xl border border-[#4F5948]/50 rounded-2xl p-2 flex">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail..."
                    className="flex-1 bg-transparent px-6 py-4 text-[#DFC6AA] placeholder-[#889073] focus:outline-none"
                  />
                  <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-xl text-[#21302B] font-semibold transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Inscrever-se</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>

              <p className="text-xs text-[#889073] mt-4">
                Não enviamos spam. Cancele a inscrição a qualquer momento.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="relative group mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-[#21302B]/90 backdrop-blur-sm px-6 py-4 rounded-lg border border-[#B66D38]/30">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] bg-clip-text text-transparent">
                      SBIE
                    </h2>
                    <p className="text-sm text-[#889073] -mt-1">Inteligência Emocional</p>
                  </div>
                </div>

                <p className="text-[#889073] leading-relaxed mb-6">
                  Transformando vidas através da Inteligência Emocional. 
                  Nossa missão é desenvolver líderes conscientes e organizações prósperas.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-[#DFC6AA]">
                    <Mail className="w-5 h-5 text-[#B66D38]" />
                    <span className="text-sm">contato@sbie.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#DFC6AA]">
                    <Phone className="w-5 h-5 text-[#B66D38]" />
                    <span className="text-sm">+55 (11) 99999-9999</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#DFC6AA]">
                    <MapPin className="w-5 h-5 text-[#B66D38]" />
                    <span className="text-sm">São Paulo, SP</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-[#DFC6AA] mb-6 flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-[#B66D38]" />
                  <span>Links Rápidos</span>
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-[#889073] hover:text-[#DFC6AA] transition-colors duration-300 text-sm flex items-center space-x-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold text-[#DFC6AA] mb-6 flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#B66D38]" />
                  <span>Serviços</span>
                </h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a
                        href={service.href}
                        className="text-[#889073] hover:text-[#DFC6AA] transition-colors duration-300 text-sm flex items-center space-x-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        <span>{service.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-[#DFC6AA] mb-6 flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-[#B66D38]" />
                  <span>Siga-nos</span>
                </h4>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative bg-[#21302B]/60 backdrop-blur-sm border border-[#4F5948]/40 rounded-xl p-3 text-[#DFC6AA] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="w-5 h-5 mx-auto" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>

                <div className="bg-[#21302B]/40 backdrop-blur-sm border border-[#4F5948]/30 rounded-xl p-4">
                  <p className="text-xs text-[#889073] mb-2">Junte-se à nossa comunidade:</p>
                  <div className="text-2xl font-bold text-[#B66D38]">10K+</div>
                  <p className="text-xs text-[#889073]">Seguidores ativos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4F5948]/30 py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-[#889073] text-sm">
                  © 2024 SBIE - Sociedade Brasileira de Inteligência Emocional. 
                  <span className="text-[#B66D38]"> Todos os direitos reservados.</span>
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <a href="#" className="text-[#889073] hover:text-[#DFC6AA] text-sm transition-colors duration-300">
                  Política de Privacidade
                </a>
                <a href="#" className="text-[#889073] hover:text-[#DFC6AA] text-sm transition-colors duration-300">
                  Termos de Uso
                </a>
                
                {/* Back to Top */}
                <button
                  onClick={scrollToTop}
                  className="group relative bg-[#21302B]/60 backdrop-blur-sm border border-[#4F5948]/40 rounded-full p-2 text-[#DFC6AA] hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Voltar ao topo"
                >
                  <ChevronUp className="w-5 h-5" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;