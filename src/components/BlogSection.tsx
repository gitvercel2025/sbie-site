import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', count: 12 },
    { id: 'ie', name: 'Inteligência Emocional', count: 5 },
    { id: 'lideranca', name: 'Liderança', count: 3 },
    { id: 'desenvolvimento', name: 'Desenvolvimento', count: 4 }
  ];

  const posts = [
    {
      id: 1,
      title: 'Os 5 Pilares da Inteligência Emocional no Século XXI',
      excerpt: 'Descubra como os pilares fundamentais da IE evoluíram e se adaptaram aos desafios modernos.',
      category: 'ie',
      author: 'Rodrigo Fonseca',
      date: '2024-01-15',
      readTime: '8 min',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Liderança Transformacional: O Futuro das Organizações',
      excerpt: 'Como líderes emocionalmente inteligentes estão revolucionando o mundo corporativo.',
      category: 'lideranca',
      author: 'Rodrigo Fonseca',
      date: '2024-01-10',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Neurociência e Emoções: O que a Ciência Revela',
      excerpt: 'Últimas descobertas científicas sobre como nosso cérebro processa emoções.',
      category: 'desenvolvimento',
      author: 'Rodrigo Fonseca',
      date: '2024-01-05',
      readTime: '10 min',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Técnicas Práticas para Autorregulação Emocional',
      excerpt: 'Exercícios simples e eficazes para desenvolver o controle emocional no dia a dia.',
      category: 'ie',
      author: 'Rodrigo Fonseca',
      date: '2023-12-28',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'O Poder da Empatia no Ambiente de Trabalho',
      excerpt: 'Como cultivar empatia pode transformar relacionamentos profissionais.',
      category: 'lideranca',
      author: 'Rodrigo Fonseca',
      date: '2023-12-20',
      readTime: '7 min',
      image: 'https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Inteligência Emocional e Inovação Empresarial',
      excerpt: 'A correlação entre IE e capacidade inovativa nas organizações modernas.',
      category: 'desenvolvimento',
      author: 'Rodrigo Fonseca',
      date: '2023-12-15',
      readTime: '9 min',
      image: 'https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-[#21302B] via-[#4F5948] to-[#21302B] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-[#B66D38]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-[#DFC6AA]/3 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#DFC6AA] to-[#B66D38] bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h2>
          <p className="text-xl text-[#889073] max-w-3xl mx-auto mb-8">
            Conteúdos exclusivos sobre inteligência emocional, liderança e desenvolvimento pessoal
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="relative flex-1 w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#889073] w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="w-full bg-[#21302B]/50 backdrop-blur-sm border border-[#4F5948]/50 rounded-full pl-12 pr-4 py-3 text-[#DFC6AA] placeholder-[#889073] focus:outline-none focus:border-[#B66D38] focus:ring-2 focus:ring-[#B66D38]/30 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] text-[#21302B]'
                  : 'bg-[#21302B]/50 backdrop-blur-sm border border-[#4F5948]/50 text-[#DFC6AA] hover:border-[#B66D38]/50'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && (
          <div className="mb-16">
            <div className="group relative max-w-4xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#B66D38] via-[#DFC6AA] to-[#B66D38] rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-[#21302B]/80 backdrop-blur-xl border border-[#4F5948]/50 rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="mb-4">
                      <span className="inline-block bg-[#B66D38] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                        Destaque
                      </span>
                      <h3 className="text-2xl font-bold text-[#DFC6AA] mb-4 group-hover:text-white transition-colors duration-300">
                        {featuredPost.title}
                      </h3>
                      <p className="text-[#889073] leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-[#889073] mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <button className="group/btn flex items-center space-x-2 text-[#B66D38] hover:text-[#DFC6AA] transition-colors duration-300">
                      <span className="font-semibold">Ler mais</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#B66D38]/20 to-[#DFC6AA]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-[#21302B]/60 backdrop-blur-sm border border-[#4F5948]/40 rounded-2xl overflow-hidden transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#21302B]/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#DFC6AA] mb-3 line-clamp-2 group-hover:text-white transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-[#889073] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-[#889073] mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <button className="group/btn flex items-center space-x-2 text-[#B66D38] hover:text-[#DFC6AA] transition-colors duration-300">
                    <span className="text-sm font-semibold">Ler artigo</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#B66D38] to-[#DFC6AA] rounded-full text-[#21302B] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#B66D38]/30">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Ver Mais Artigos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;