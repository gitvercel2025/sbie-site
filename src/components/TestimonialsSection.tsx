import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ana Carolina Silva',
      role: 'CEO da TechCorp',
      company: 'TechCorp',
      rating: 5,
      text: 'A metodologia do Rodrigo transformou completamente nossa cultura organizacional. Nossos índices de engajamento aumentaram 85% em apenas 6 meses.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Marcus Vinicius Santos',
      role: 'Diretor de RH',
      company: 'GlobalTech',
      rating: 5,
      text: 'Nunca vi um treinamento tão impactante. As ferramentas de IE que aprendemos estão sendo aplicadas diariamente por toda nossa equipe de liderança.',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Fernanda Oliveira',
      role: 'Empreendedora',
      company: 'Startup Inovação',
      rating: 5,
      text: 'O programa de coaching mudou minha vida pessoal e profissional. Hoje sou uma líder mais consciente e empática.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'Roberto Mendes',
      role: 'Executivo Senior',
      company: 'Banco Nacional',
      rating: 5,
      text: 'A aplicação prática dos conceitos de IE me ajudou a melhorar drasticamente meu relacionamento com a equipe e os resultados seguiram.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-b from-[#21302B] to-[#4F5948] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#B66D38]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#DFC6AA]/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] bg-clip-text text-transparent">
              Depoimentos
            </span>
          </h2>
          <p className="text-xl text-[#889073] max-w-3xl mx-auto">
            Histórias reais de transformação através da Inteligência Emocional
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-[#21302B]/80 backdrop-blur-xl border border-[#4F5948]/50 rounded-3xl p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] p-4 rounded-full">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-[#DFC6AA] leading-relaxed mb-8 font-light italic">
                  "{currentData.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full blur opacity-75"></div>
                    <img 
                      src={currentData.image} 
                      alt={currentData.name}
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-[#DFC6AA]/30"
                    />
                  </div>

                  {/* Author Details */}
                  <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-[#DFC6AA]">
                      {currentData.name}
                    </h4>
                    <p className="text-[#B66D38] font-medium">
                      {currentData.role}
                    </p>
                    <p className="text-[#889073] text-sm">
                      {currentData.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="group bg-[#21302B]/60 backdrop-blur-sm border border-[#4F5948]/50 rounded-full p-3 text-[#DFC6AA] hover:text-white hover:border-[#B66D38] transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-[#B66D38] scale-125' 
                      : 'bg-[#4F5948] hover:bg-[#889073]'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="group bg-[#21302B]/60 backdrop-blur-sm border border-[#4F5948]/50 rounded-full p-3 text-[#DFC6AA] hover:text-white hover:border-[#B66D38] transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: '98%', label: 'Satisfação' },
            { number: '10K+', label: 'Vidas Impactadas' },
            { number: '500+', label: 'Empresas' },
            { number: '4.9/5', label: 'Avaliação Média' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-[#21302B]/40 backdrop-blur-sm border border-[#4F5948]/30 rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-[#B66D38] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[#889073]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;