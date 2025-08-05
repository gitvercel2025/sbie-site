import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, Award, BookOpen } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Sociedade Brasileira de Inteligência Emocional';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: '10K+', label: 'Alunos Transformados', icon: Users },
    { number: '500+', label: 'Empresas Atendidas', icon: Award },
    { number: '15+', label: 'Anos de Experiência', icon: Star },
    { number: '20+', label: 'Livros Publicados', icon: BookOpen },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#21302B] via-[#4F5948] to-[#21302B]">
        {/* Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-[#B66D38] rounded-full opacity-60"></div>
            </div>
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B66D38]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#DFC6AA]/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#DFC6AA] via-[#B66D38] to-[#DFC6AA] bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-blink text-[#B66D38]">|</span>
            </h1>
            
            <div className="space-y-4 text-xl md:text-2xl text-[#DFC6AA]/90 leading-relaxed">
              <p className="animate-fade-in-up animation-delay-300">
                Transformando vidas através da <span className="text-[#B66D38] font-semibold">Inteligência Emocional</span>
              </p>
              <p className="animate-fade-in-up animation-delay-500 text-lg text-[#889073]">
                Presidente: <span className="text-[#DFC6AA] font-semibold">Rodrigo Fonseca</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-700">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full text-[#21302B] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B66D38]/50">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Começar Jornada</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-[#B66D38] rounded-full text-[#DFC6AA] font-semibold text-lg transition-all duration-300 hover:bg-[#B66D38]/10 hover:scale-105">
              <span className="relative z-10">Conhecer Rodrigo</span>
              <div className="absolute inset-0 bg-[#B66D38] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-1000">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-[#21302B]/80 backdrop-blur-xl border border-[#4F5948]/50 rounded-2xl p-6 text-center transform group-hover:-translate-y-2 transition-all duration-300">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#B66D38]" />
                <div className="text-3xl font-bold text-[#DFC6AA] mb-2">{stat.number}</div>
                <div className="text-sm text-[#889073]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#B66D38] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#B66D38] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;