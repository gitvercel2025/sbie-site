import React from 'react';
import { Award, BookOpen, Users, Target, Brain, Heart } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Award, title: 'Especialista em IE', description: 'Certificado internacional em Inteligência Emocional' },
    { icon: BookOpen, title: '20+ Livros', description: 'Autor de bestsellers sobre desenvolvimento pessoal' },
    { icon: Users, title: '10k+ Alunos', description: 'Mais de 10 mil vidas transformadas' },
    { icon: Target, title: '500+ Empresas', description: 'Consultor de grandes organizações' },
    { icon: Brain, title: 'Neurocientista', description: 'PhD em Neurociência e Comportamento' },
    { icon: Heart, title: 'Coach Executivo', description: 'Especialista em liderança emocional' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#21302B] to-[#4F5948] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-[#B66D38]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-[#DFC6AA]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] bg-clip-text text-transparent">
                Rodrigo Fonseca
              </span>
            </h2>
            <p className="text-xl text-[#889073] max-w-3xl mx-auto leading-relaxed">
              Presidente da SBIE e referência mundial em Inteligência Emocional, 
              com mais de 15 anos transformando vidas e organizações.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-[#21302B]/90 backdrop-blur-xl border border-[#4F5948]/50 rounded-3xl p-8 transform group-hover:scale-105 transition-all duration-500">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#B66D38] to-[#DFC6AA] rounded-full p-1">
                  <div className="w-full h-full bg-[#21302B] rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-[#B66D38]" />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#DFC6AA] mb-2">Rodrigo Fonseca</h3>
                  <p className="text-[#B66D38] font-semibold mb-4">Presidente da SBIE</p>
                  <p className="text-[#889073] leading-relaxed">
                    "Acredito que a Inteligência Emocional é a chave para desbloquear o potencial 
                    humano e criar um mundo mais consciente e próspero."
                  </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#B66D38] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#DFC6AA] rounded-full animate-pulse animation-delay-1000"></div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-[#21302B]/60 backdrop-blur-sm border border-[#4F5948]/40 rounded-2xl p-6 h-full transform group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300">
                    <achievement.icon className="w-8 h-8 text-[#B66D38] mb-3" />
                    <h4 className="text-lg font-semibold text-[#DFC6AA] mb-2">{achievement.title}</h4>
                    <p className="text-sm text-[#889073] leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#21302B]/40 backdrop-blur-xl border border-[#4F5948]/30 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#DFC6AA] mb-6">Uma Jornada de Transformação</h3>
                <div className="space-y-4 text-[#889073] leading-relaxed text-lg">
                  <p>
                    Com uma carreira dedicada ao desenvolvimento humano, Rodrigo Fonseca é reconhecido 
                    internacionalmente como um dos maiores especialistas em Inteligência Emocional do Brasil.
                  </p>
                  <p>
                    Sua metodologia única combina neurociência, psicologia positiva e práticas contemplativas, 
                    oferecendo ferramentas práticas para a transformação pessoal e profissional.
                  </p>
                  <p>
                    Através da SBIE, já impactou mais de 10 mil pessoas e 500 empresas, criando uma 
                    revolução silenciosa no desenvolvimento da consciência emocional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;