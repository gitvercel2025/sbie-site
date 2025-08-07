import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      name: 'QUEM SOMOS',
      href: '#about',
      submenu: [
        { name: 'Conheça a SBIE', href: '#sbie' },
        { name: 'Nossa Metodologia', href: '#metodologia' },
        { name: 'Rodrigo Fonseca', href: '#rodrigo' }
      ]
    },
    {
      name: 'TREINAMENTOS',
      href: '#training',
      submenu: [
        { name: 'Lotus Inteligência Emocional', href: '#lotus-ie' },
        { name: 'Lotus Legado', href: '#lotus-legado' },
        { name: 'Formação em Inteligência Emocional', href: '#formacao-ie' },
        { name: 'Formação Master em Inteligência Emocional', href: '#formacao-master' },
        { name: 'SBIE Business', href: '#sbie-business' },
        { name: 'Embaixadores do Bem', href: '#embaixadores' }
      ]
    },
    {
      name: 'ONLINE',
      href: '#online',
      submenu: [
        { name: 'SBIE Academy', href: '#academy' },
        { name: 'SBIE Care', href: '#care' },
        { name: 'Academia Emocional', href: '#academia-emocional' },
        { name: 'Gerando com Amor', href: '#gerando-amor' },
        { name: 'Almas Gêmeas', href: '#almas-gemeas' },
        { name: 'Livros Digitais', href: '#livros-digitais' }
      ]
    },
    { name: 'BLOG', href: '#blog' },
    { name: 'IMPRENSA', href: '#imprensa' },
    { name: 'STORE', href: '#store' },
    { name: 'CONTATO', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-xl bg-white/90 shadow-2xl border-b border-[#B66D38]/20' 
        : 'backdrop-blur-md bg-white/70'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg border border-[#B66D38]/30 shadow-lg">
              <img 
                src="/image.png" 
                alt="SBIE Logo" 
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.submenu ? item.name : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="relative group px-4 py-2 text-[#21302B] hover:text-[#B66D38] transition-all duration-300 font-medium text-sm flex items-center space-x-1"
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B66D38]/10 to-[#DFC6AA]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                </a>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-[#B66D38]/20 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-6 py-3 text-[#21302B] hover:text-[#B66D38] hover:bg-[#DFC6AA]/10 transition-all duration-300 text-sm"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#889073] w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-white/50 backdrop-blur-sm border border-[#DFC6AA]/50 rounded-full pl-10 pr-4 py-2 text-[#21302B] placeholder-[#889073] focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/30 transition-all duration-300"
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
                <X className="w-6 h-6 text-[#21302B]" />
              ) : (
                <Menu className="w-6 h-6 text-[#21302B]" />
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
              <div key={index}>
                <a
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-[#21302B] hover:text-[#B66D38] bg-white/30 backdrop-blur-sm rounded-lg border border-[#DFC6AA]/30 hover:border-[#B66D38]/50 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;