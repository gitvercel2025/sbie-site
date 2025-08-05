import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, BookOpen, MessageCircle, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#home', icon: User },
    { name: 'Sobre Rodrigo', href: '#about', icon: User },
    { name: 'Treinamentos', href: '#training', icon: BookOpen },
    { name: 'Blog', href: '#blog', icon: MessageCircle },
    { name: 'Contato', href: '#contact', icon: Phone },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-xl bg-[#21302B]/80 shadow-2xl border-b border-[#B66D38]/30' 
        : 'backdrop-blur-md bg-[#21302B]/20'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#21302B]/90 backdrop-blur-sm px-6 py-3 rounded-lg border border-[#B66D38]/30">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] bg-clip-text text-transparent">
                SBIE
              </h1>
              <p className="text-xs text-[#889073] -mt-1">Inteligência Emocional</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative group px-4 py-2 text-[#DFC6AA] hover:text-white transition-all duration-300"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#B66D38] to-[#4F5948] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                <div className="absolute inset-0 bg-[#B66D38] rounded-lg blur opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#889073] w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-[#21302B]/50 backdrop-blur-sm border border-[#4F5948]/50 rounded-full pl-10 pr-4 py-2 text-[#DFC6AA] placeholder-[#889073] focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/30 transition-all duration-300"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative group p-2"
          >
            <div className="absolute inset-0 bg-[#B66D38] rounded-lg blur opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
            <div className="relative">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#DFC6AA]" />
              ) : (
                <Menu className="w-6 h-6 text-[#DFC6AA]" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-[#DFC6AA] hover:text-white bg-[#21302B]/30 backdrop-blur-sm rounded-lg border border-[#4F5948]/30 hover:border-[#B66D38]/50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;