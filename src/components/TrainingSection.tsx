import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, Award, BookOpen, Star, ArrowRight } from 'lucide-react';

const TrainingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trainings = [
    {
      title: 'Fundamentos da IE',
      subtitle: 'Base sólida para transformação',
      description: 'Desenvolva autoconsciência, autorregulação e empatia através de técnicas comprovadas científicamente.',
      duration: '40h',
      students: '2,500+',
      rating: 4.9,
      price: 'R$ 497',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Certificado Digital', 'Acesso Vitalício', 'Suporte Especializado', 'Comunidade Exclusiva']
    },
    {
      title: 'Liderança Emocional',
      subtitle: 'Para líderes visionários',
      description: 'Transforme seu estilo de liderança através da inteligência emocional e inspire equipes de alta performance.',
      duration: '60h',
      students: '1,800+',
      rating: 4.8,
      price: 'R$ 897',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Cases Reais', 'Mentoria Individual', 'Ferramentas Exclusivas', 'Network de Líderes']
    },
    {
      title: 'Coach em IE',
      subtitle: 'Certificação profissional',
      description: 'Torne-se um coach certificado em Inteligência Emocional e impacte vidas profissionalmente.',
      duration: '120h',
      students: '950+',
      rating: 5.0,
      price: 'R$ 1,497',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Certificação Internacional', 'Supervisão Clínica', 'Material Didático', 'Prática Supervisionada']
    },
    {
      title: 'IE para Empresas',
      subtitle: 'Transformação organizacional',
      description: 'Implemente cultura de inteligência emocional em sua organização e potencialize resultados.',
      duration: '80h',
      students: '500+',
      rating: 4.9,
      price: 'Sob consulta',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Diagnóstico Organizacional', 'Treinamento In-Company', 'Acompanhamento Contínuo', 'ROI Mensurável']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trainings.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trainings.length) % trainings.length);
  };

  return (
    <section id="training" className="py-20 bg-gradient-to-b from-[#4F5948] to-[#21302B] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#B66D38]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#DFC6AA]/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] bg-clip-text text-transparent">
              Treinamentos
            </span>
          </h2>
          <p className="text-xl text-[#889073] max-w-3xl mx-auto">
            Programas exclusivos desenvolvidos para acelerar sua jornada de desenvolvimento emocional
          </p>
        </div>

        {/* Training Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {trainings.map((training, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="group relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative bg-[#21302B]/80 backdrop-blur-xl border border-[#4F5948]/50 rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                      <div className="md:flex">
                        {/* Image */}
                        <div className="md:w-1/2 relative">
                          <img 
                            src={training.image} 
                            alt={training.title}
                            className="w-full h-64 md:h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#21302B]/60 to-transparent"></div>
                          
                          {/* Floating Price */}
                          <div className="absolute top-4 right-4 bg-[#B66D38] text-white px-4 py-2 rounded-full font-bold">
                            {training.price}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:w-1/2 p-8">
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-[#DFC6AA] mb-2">{training.title}</h3>
                            <p className="text-[#B66D38] font-semibold mb-4">{training.subtitle}</p>
                            <p className="text-[#889073] leading-relaxed">{training.description}</p>
                          </div>

                          {/* Stats */}
                          <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center space-x-2 text-[#DFC6AA]">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{training.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#DFC6AA]">
                              <Users className="w-4 h-4" />
                              <span className="text-sm">{training.students}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#DFC6AA]">
                              <Star className="w-4 h-4 fill-current text-yellow-400" />
                              <span className="text-sm">{training.rating}</span>
                            </div>
                          </div>

                          {/* Features */}
                          <ul className="space-y-2 mb-6">
                            {training.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2 text-[#889073]">
                                <Award className="w-4 h-4 text-[#B66D38]" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA Button */}
                          <button className="group/btn relative w-full px-6 py-3 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full text-[#21302B] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#B66D38]/30">
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                              <span>Inscrever-se Agora</span>
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#21302B]/80 backdrop-blur-sm border border-[#4F5948]/50 rounded-full p-3 text-[#DFC6AA] hover:text-white hover:border-[#B66D38] transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#21302B]/80 backdrop-blur-sm border border-[#4F5948]/50 rounded-full p-3 text-[#DFC6AA] hover:text-white hover:border-[#B66D38] transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {trainings.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#B66D38] scale-125' 
                    : 'bg-[#4F5948] hover:bg-[#889073]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;