import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, Award, BookOpen, Star, ArrowRight } from 'lucide-react';

const TrainingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trainings = [
    {
      title: 'Lotus Inteligência Emocional',
      subtitle: 'Transformação pessoal completa',
      description: 'Desenvolva sua inteligência emocional através de técnicas avançadas e práticas transformadoras que irão revolucionar sua vida pessoal e profissional.',
      duration: '40h',
      students: '2,500+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Certificado Digital', 'Acesso Vitalício', 'Suporte Especializado', 'Comunidade Exclusiva']
    },
    {
      title: 'Lotus Legado',
      subtitle: 'Construindo seu legado',
      description: 'Aprenda a construir um legado duradouro através da inteligência emocional, impactando positivamente sua família e comunidade.',
      duration: '60h',
      students: '1,800+',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Metodologia Exclusiva', 'Mentoria Individual', 'Ferramentas Práticas', 'Network de Líderes']
    },
    {
      title: 'Formação em Inteligência Emocional',
      subtitle: 'Base sólida e científica',
      description: 'Formação completa baseada em neurociência e psicologia positiva para profissionais que desejam se especializar em IE.',
      duration: '120h',
      students: '950+',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Base Científica', 'Supervisão Clínica', 'Material Didático', 'Prática Supervisionada']
    },
    {
      title: 'Formação Master em Inteligência Emocional',
      subtitle: 'Nível avançado de especialização',
      description: 'O mais alto nível de formação em IE, preparando especialistas para atuar como referência na área.',
      duration: '200h',
      students: '500+',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Certificação Master', 'Pesquisa Aplicada', 'Supervisão Avançada', 'Rede Internacional']
    },
    {
      title: 'SBIE Business',
      subtitle: 'Inteligência emocional corporativa',
      description: 'Transforme sua organização através da implementação de cultura de inteligência emocional no ambiente corporativo.',
      duration: '80h',
      students: '300+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Diagnóstico Organizacional', 'Treinamento In-Company', 'Acompanhamento Contínuo', 'ROI Mensurável']
    },
    {
      title: 'Embaixadores do Bem',
      subtitle: 'Multiplicadores de transformação',
      description: 'Forme-se como embaixador da inteligência emocional e multiplique o bem-estar em sua comunidade.',
      duration: '60h',
      students: '750+',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Missão Social', 'Impacto Comunitário', 'Rede de Embaixadores', 'Certificação Especial']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trainings.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trainings.length) % trainings.length);
  };

  return (
    <section id="training" className="py-20 bg-gradient-to-b from-white via-[#DFC6AA]/10 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#B66D38]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#DFC6AA]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#21302B] to-[#B66D38] bg-clip-text text-transparent">
              Treinamentos
            </span>
          </h2>
          <p className="text-xl text-[#4F5948] max-w-3xl mx-auto">
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
                    <div className="relative bg-white/90 backdrop-blur-xl border border-[#DFC6AA]/50 rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-500 shadow-xl">
                      <div className="md:flex">
                        {/* Image */}
                        <div className="md:w-1/2 relative">
                          <img 
                            src={training.image} 
                            alt={training.title}
                            className="w-full h-64 md:h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#21302B]/60 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="md:w-1/2 p-8">
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-[#21302B] mb-2">{training.title}</h3>
                            <p className="text-[#B66D38] font-semibold mb-4">{training.subtitle}</p>
                            <p className="text-[#4F5948] leading-relaxed">{training.description}</p>
                          </div>

                          {/* Stats */}
                          <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center space-x-2 text-[#21302B]">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{training.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#21302B]">
                              <Users className="w-4 h-4" />
                              <span className="text-sm">{training.students}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#21302B]">
                              <Star className="w-4 h-4 fill-current text-yellow-400" />
                              <span className="text-sm">{training.rating}</span>
                            </div>
                          </div>

                          {/* Features */}
                          <ul className="space-y-2 mb-6">
                            {training.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2 text-[#4F5948]">
                                <Award className="w-4 h-4 text-[#B66D38]" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA Button */}
                          <button className="group/btn relative w-full px-6 py-3 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#B66D38]/30">
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                              <span>Saiba Mais</span>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-[#DFC6AA]/50 rounded-full p-3 text-[#21302B] hover:text-[#B66D38] hover:border-[#B66D38] transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border border-[#DFC6AA]/50 rounded-full p-3 text-[#21302B] hover:text-[#B66D38] hover:border-[#B66D38] transition-all duration-300 hover:scale-110 shadow-lg"
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
                    : 'bg-[#DFC6AA] hover:bg-[#4F5948]'
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