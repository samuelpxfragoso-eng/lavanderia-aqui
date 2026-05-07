/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Waves, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  Star,
  Instagram,
  Facebook,
  MessageCircle,
  Wifi,
  ShieldCheck,
  Zap,
  Navigation,
  Sparkles,
  CreditCard
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Information Strip */}
      <div className="bg-lavanderia-green text-white py-2 px-6 overflow-hidden border-b border-white/10">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-[9px] font-black uppercase tracking-[0.3em]">
          <span className="flex items-center gap-2"><Zap className="w-3 h-3 fill-current" /> Aberto 24 Horas todos os dias</span>
          <span className="flex items-center gap-2"><Wifi className="w-3 h-3" /> Wi-fi Grátis para Clientes</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> Sabão e Amaciante Inclusos em cada ciclo</span>
          <span className="flex items-center gap-2"><Zap className="w-3 h-3 fill-current" /> Aberto 24 Horas todos os dias</span>
          <span className="flex items-center gap-2"><Wifi className="w-3 h-3" /> Wi-fi Grátis para Clientes</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> Sabão e Amaciante Inclusos em cada ciclo</span>
        </div>
      </div>

      <nav className="bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-4">
              <motion.div 
                className="logo-shine-container rounded-lg group"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777558914/WhatsApp_Image_2026-04-30_at_11.20.12_AM_e7vkjw.jpg" 
                  alt="Lavanderia Aqui Logo" 
                  className="h-14 w-auto object-contain"
                />
              </motion.div>
              <span className="text-xl font-extrabold tracking-tighter text-slate-900 uppercase hidden sm:block">
                Lavanderia <span className="text-lavanderia-cyan">Aqui</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-slate-500">
              <a href="#unidades" className="hover:text-lavanderia-green transition-colors">Unidades</a>
              <a href="#vantagens" className="hover:text-lavanderia-green transition-colors">Vantagens</a>
              <a href="#contato" className="hover:text-lavanderia-green transition-colors">Contato</a>
              <button 
                 className="bg-lavanderia-green text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-all shadow-xl shadow-lavanderia-green/20 text-[10px] font-black"
              >
                INICIAR LAVAGEM
              </button>
            </div>
  
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-b border-slate-100 shadow-2xl"
            >
              <div className="px-6 py-8 space-y-6">
                <a href="#unidades" className="block text-sm font-bold uppercase tracking-widest text-slate-600" onClick={() => setIsOpen(false)}>Unidades</a>
                <a href="#vantagens" className="block text-sm font-bold uppercase tracking-widest text-slate-600" onClick={() => setIsOpen(false)}>Vantagens</a>
                <a href="#contato" className="block text-sm font-bold uppercase tracking-widest text-slate-600" onClick={() => setIsOpen(false)}>Contato</a>
                <button 
                  className="w-full bg-lavanderia-green text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-widest"
                >
                  INICIAR LAVAGEM
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

const GoogleReviews = () => {
  const reviews = [
    { name: "Carlos Silva", text: "Melhor lavanderia de Formosa! Máquinas modernas e o ambiente é super agradável.", stars: 5 },
    { name: "Mariana Costa", text: "Super prático e rápido. Em menos de 1 hora minhas roupas estavam limpas e secas.", stars: 5 },
    { name: "João Pereira", text: "Excelente custo-benefício. Recomendo muito a unidade do Posto Paraná.", stars: 5 },
    { name: "Ana Beatriz", text: "O Wi-fi grátis ajuda muito enquanto espero. Ambiente nota 10!", stars: 5 },
    { name: "Ricardo Oliveira", text: "Sempre limpo e organizado. Gosto da facilidade do autoatendimento.", stars: 5 },
    { name: "Fernanda Lima", text: "Minha primeira vez e amei. As instruções são bem claras.", stars: 5 },
    { name: "Paulo Santos", text: "Aberto 24h me salvou! Atendimento impecável mesmo de madrugada.", stars: 5 },
    { name: "Juliana Mendes", text: "Roupas saem cheirosas e muito bem secas. Não troco por nada.", stars: 5 },
    { name: "Marcos Vinícius", text: "Segurança total no ambiente. Me sinto tranquilo lavando minhas roupas aqui.", stars: 5 },
    { name: "Sofia Rocha", text: "Lugar moderno e tecnológico. O pagamento é super simples.", stars: 5 },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-12">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="Google" 
            className="w-8 h-8"
          />
          <div>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Avaliações do Google</h2>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              <span className="ml-2 text-slate-400 font-bold text-xs uppercase tracking-widest leading-none mt-1">4.9 de 5 baseado em 500+ clientes</span>
            </div>
          </div>
        </div>

        <motion.div 
          drag="x"
          dragConstraints={{ right: 0, left: -2500 }}
          className="flex gap-8 cursor-grab active:cursor-grabbing"
        >
          {reviews.map((rev, i) => (
            <motion.div 
              key={i} 
              className="min-w-[320px] bg-slate-50 p-8 rounded-[2rem] border border-slate-100"
            >
              <div className="flex text-amber-400 mb-4 text-xs">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-slate-600 font-medium mb-6 leading-relaxed italic">"{rev.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lavanderia-green/20 rounded-full flex items-center justify-center font-black text-lavanderia-green text-xs">
                  {rev.name[0]}
                </div>
                <span className="font-black text-slate-900 text-xs uppercase tracking-widest">{rev.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 flex items-center gap-2 text-slate-300 text-[10px] font-black uppercase tracking-widest">
          <ChevronRight className="w-4 h-4" />
          Arraste para o lado para ver mais
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center bg-white">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lavanderia-cyan/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lavanderia-green/5 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 mb-12 lg:mb-0"
          >
            <div className="inline-flex items-center gap-2 bg-lavanderia-green/10 text-lavanderia-green px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
              <Zap className="w-3 h-3 fill-current" />
              Aberta 24 horas por dia
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[1.05] tracking-tighter mb-8 text-slate-900">
              Roupa suja <br/>
              se lava <br/>
              <span className="text-lavanderia-green">AQUI.</span>
            </h1>
            <p className="text-slate-500 max-w-md text-xl leading-relaxed mb-10 font-medium">
              A lavanderia mais completa de Formosa. Conveniência, tecnologia e cuidado impecável para suas roupas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                className="bg-lavanderia-green text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-emerald-600 transition-all shadow-2xl shadow-lavanderia-green/20 scale-100 hover:scale-105 active:scale-95"
              >
                Iniciar Lavagem
              </button>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img 
                      key={i} 
                      className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm" 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} 
                      alt="User"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-lavanderia-cyan">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-slate-400 font-bold text-[10px] tracking-widest uppercase">Mais de 2k lavagens</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="bg-slate-50 rounded-[3rem] p-4 overflow-hidden shadow-2xl relative animate-float group">
              <div className="logo-shine-container rounded-[2.5rem] overflow-hidden w-full h-full">
                <img 
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777558914/WhatsApp_Image_2026-04-30_at_11.20.13_AM_ir15c5.jpg" 
                  alt="Autoatendimento Lavanderia Aqui" 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Status Card Overlay */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-10 -right-5 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-5 animate-float"
            >
              <div className="w-12 h-12 bg-lavanderia-cyan/10 rounded-2xl flex items-center justify-center text-lavanderia-cyan">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Status da Máquina</p>
                <p className="text-lg font-black text-slate-900 leading-none mt-1">Pronta para uso</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Dicas de Lavagem",
      desc: "Instruções claras para cada tipo de tecido e mancha.",
      icon: <Waves className="w-6 h-6" />,
    },
    {
      title: "Autoatendimento 24h",
      desc: "Lave suas roupas no seu tempo, sem filas ou horários fixos.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Ambiente Monitorado",
      desc: "Segurança total com câmeras e monitoramento 24/7.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Wi-fi Grátis",
      desc: "Trabalhe ou relaxe enquanto suas roupas ficam prontas.",
      icon: <Wifi className="w-6 h-6" />,
    }
  ];

  return (
    <section id="vantagens" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:shadow-lavanderia-green/5"
            >
              <div className="w-14 h-14 bg-lavanderia-green/5 text-lavanderia-green rounded-2xl flex items-center justify-center mb-8">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Units = () => {
  const stores = [
    {
      name: "Loja 01 - Posto Paraná",
      price: "15,99",
      address: "N 1234 anexo Posto Paranã, Formosa-GO",
      maps: "https://maps.google.com",
      image: "https://res.cloudinary.com/dqukldtq1/image/upload/v1777562155/WhatsApp_Image_2026-04-27_at_4.22.38_PM_lveoi7.jpg"
    },
    {
      name: "Loja 02 - Rua Auta Vidal saída para Planaltina de Goiás",
      price: "15,99",
      address: "Rua Auta Vidal n 32 centro Formosa Goiás cep 73801480",
      maps: "https://maps.google.com",
      image: "https://res.cloudinary.com/dqukldtq1/image/upload/v1777562155/WhatsApp_Image_2026-04-27_at_4.22.59_PM_qb20cd.jpg"
    },
    {
      name: "Loja 03 - Posto Indaiá",
      price: "19,99",
      address: "Go-118 km 05 Zona rural Planaltina Goiás",
      maps: "https://maps.google.com",
      image: "https://res.cloudinary.com/dqukldtq1/image/upload/v1777562155/WhatsApp_Image_2026-04-27_at_4.25.16_PM_sdif9p.jpg"
    },
    {
      name: "Loja 04 - Distrito do Bezerra",
      price: "19,99",
      address: "Avenida Maria Paulina Gomes Pereira n 30 centro Distrito do Bezerra cep 73817000",
      maps: "https://maps.google.com",
      image: "https://res.cloudinary.com/dqukldtq1/image/upload/v1777562155/WhatsApp_Image_2026-04-27_at_4.23.59_PM_i4zotv.jpg"
    }
  ];

  return (
    <section id="unidades" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-[10px] font-black text-lavanderia-green uppercase tracking-[0.4em] mb-6">Nossas Unidades</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">Quatro lojas prontas para te atender em Formosa.</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {stores.map((store, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 transition-all hover:border-lavanderia-green/30"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-xl">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Ciclo a partir de</p>
                  <p className="text-xl font-black text-lavanderia-green">R$ {store.price}</p>
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-black text-slate-900 mb-3">{store.name}</h4>
                <div className="flex items-start gap-3 text-slate-500 mb-8">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-lavanderia-green" />
                  <p className="text-sm font-medium leading-relaxed">{store.address}</p>
                </div>
                <a 
                  href={store.maps} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest border border-slate-200 hover:bg-slate-100 transition-all"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  Abrir no Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DeixeComAGente = () => {
  const steps = [
    { title: "MEDIÇÃO", desc: "Coloque suas roupas no cesto de medida." },
    { title: "ARMÁRIO", desc: "Escolha um armário disponível para deixar seus pertences." },
    { title: "PAGAMENTO", desc: "Pagamento somente na maquininha." },
    { title: "COMUNICAÇÃO", desc: "Envie o comprovante para nosso WhatsApp (61) 99915-5433." },
    { title: "PROCESSAMENTO", desc: "Nossa equipe cuida de tudo: lavamos, secamos, dobramos e embalamos." },
    { title: "RETIRADA", desc: "Você recebe um aviso quando estiver tudo pronto para buscar." }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-slate-900 rounded-[4rem] text-white overflow-hidden relative p-12 lg:p-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lavanderia-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-lavanderia-green/20 text-lavanderia-green px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                <Sparkles className="w-3 h-3 fill-current" />
                Conveniência Total
              </div>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-8">
                Deixe com <br/>
                <span className="text-lavanderia-green italic font-serif not-italic">a Gente.</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12">
                Não tem tempo para esperar? Nós lavamos, secamos e dobramos tudo para você. Praticidade extrema para sua rotina.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <h4 className="text-[10px] font-black text-lavanderia-cyan uppercase tracking-widest mb-6">Prazos de Entrega</h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-sm font-bold">Segunda a Quinta</span>
                    <span className="text-xs text-lavanderia-green font-black">Entrega dia seguinte até 17h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">Sexta, Sáb e Dom</span>
                    <span className="text-xs text-lavanderia-green font-black">Entrega na Segunda até 17h</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-10 text-center lg:text-left">Fluxo do Atendimento</h4>
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black group-hover:bg-lavanderia-green group-hover:border-lavanderia-green group-hover:text-black transition-all">
                      {i + 1}
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black text-lavanderia-green uppercase tracking-widest mb-1">{step.title}</h5>
                      <p className="text-slate-300 text-sm font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Aceitamos</h4>
                <div className="flex gap-6">
                  <div className="text-xs font-black text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" /> PIX
                  </div>
                  <div className="text-xs font-black text-white flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-sky-400" /> CRÉDITO
                  </div>
                  <div className="text-xs font-black text-white flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-indigo-400" /> DÉBITO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AppDownload = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-br from-white to-slate-100 rounded-[4rem] p-12 lg:p-24 border border-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lavanderia-cyan/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-[10px] font-black text-lavanderia-cyan uppercase tracking-[0.4em] mb-8">Poupe Tempo</h2>
              <h3 className="text-5xl lg:text-7xl font-black text-slate-900 leading-none tracking-tighter mb-8">
                Tudo na palma <br/>
                <span className="text-lavanderia-cyan italic font-serif not-italic">da sua mão.</span>
              </h3>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-sm">
                Acompanhe suas lavagens, realize pagamentos e receba avisos quando suas roupas estiverem prontas. Nosso app é a ponte para sua liberdade.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-black transition-all group">
                  <div className="text-left leading-none">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-1">Disponível na</p>
                    <p className="text-xs font-black uppercase tracking-widest">App Store</p>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-black transition-all group">
                  <div className="text-left leading-none">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-1">Disponível no</p>
                    <p className="text-xs font-black uppercase tracking-widest">Google Play</p>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777564953/WhatsApp_Image_2026-04-30_at_12.50.14_PM_cpha8r.jpg" 
                  alt="App da Lavanderia Aqui" 
                  className="rounded-[3rem] shadow-2xl border-8 border-white w-full h-auto object-cover max-w-sm mx-auto overflow-hidden animate-float"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-lavanderia-green/20 rounded-full blur-[120px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Franchise = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute inset-0 bg-lavanderia-green/10 rounded-[3rem] blur-3xl -z-10"></div>
             <img 
               src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777565956/WhatsApp_Image_2026-04-30_at_1.16.47_PM_pxxtsi.jpg" 
               alt="Franquia Lavanderia Aqui" 
               className="rounded-[3rem] shadow-2xl border-4 border-slate-50 aspect-square object-cover"
               referrerPolicy="no-referrer"
             />
             <div className="absolute -bottom-8 -right-8 bg-lavanderia-green text-white p-8 rounded-3xl shadow-2xl space-y-2">
               <p className="text-4xl font-extrabold tracking-tighter">18 Meses</p>
               <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-100">Payback Médio Estimado</p>
             </div>
          </div>
          <div>
            <h2 className="text-[10px] font-black text-lavanderia-green uppercase tracking-[0.4em] mb-6">Investimento</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
              Seja dono do seu <br/>
              próprio <span className="text-lavanderia-green italic font-serif not-italic">negócio 24h.</span>
            </h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              O mercado de lavanderias de autoatendimento está em plena expansão. Baixo custo operacional, sem necessidade de funcionários locais e tecnologia de ponta.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Gestão Remota</h4>
                <p className="text-sm text-slate-500">Controle faturamento e máquinas pelo seu celular.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Suporte Total</h4>
                <p className="text-sm text-slate-500">Apoio na escolha do ponto e instalação das máquinas.</p>
              </div>
            </div>
            <a 
              href="https://wa.me/5561999996444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-lavanderia-green transition-all shadow-xl shadow-slate-200 text-center"
            >
              Quero ser um Franqueado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Como funciona o autoatendimento?", a: "É simples: você escolhe a máquina, coloca suas roupas, realiza o pagamento via cartão ou app, e a máquina inicia automaticamente. Não precisa trazer sabão." },
    { q: "As máquinas já incluem sabão e amaciante?", a: "Sim, os produtos (sabão e amaciante profissionais) já são dosificados automaticamente pelas máquinas em cada ciclo." },
    { q: "Quanto tempo demora uma lavagem?", a: "O ciclo de lavagem dura aproximadamente 30 a 35 minutos, e a secagem em torno de 45 minutos." },
    { q: "Posso lavar edredons e cobertores?", a: "Sim! Temos máquinas de grande capacidade ideais para enxovais pesados que não cabem em máquinas domésticas e lavamos edredom do tamanho queen." },
    { q: "Quais as formas de pagamento aceitas?", a: "Aceitamos cartões de crédito, débito, PIX e pagamentos via aplicativo oficial." },
    { q: "As máquinas também secam a roupa?", a: "Sim, temos lavadoras e secadoras separadas para garantir que você saia com suas roupas prontas para o uso." },
    { q: "A lavanderia fica aberta em feriados?", a: "Nossas unidades funcionam 24 horas por dia, 7 dias por semana, incluindo feriados e finais de semana." },
    { q: "Existe algum monitoramento de segurança?", a: "Sim, todas as nossas unidades possuem monitoramento por câmeras 24h e Wi-fi grátis para sua espera." },
    { q: "Como utilizar o serviço 'Deixe com a gente'?", a: "Neste serviço, você coloca a roupa no cesto medida, deixa em um armário e nos avisa. Nós lavamos e dobramos para você buscar depois." },
    { q: "Onde ficam localizadas as unidades?", a: "Atualmente temos 4 unidades em Formosa-GO: Posto Paraná, Saída Planaltina, Posto Indaiá e Distrito do Bezerra." }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black text-lavanderia-cyan uppercase tracking-[0.4em] mb-6">Dúvida?</h2>
          <h3 className="text-4xl font-black text-slate-900 tracking-tight">Perguntas Frequentes</h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className="font-bold text-slate-700 group-hover:text-lavanderia-cyan transition-colors">{faq.q}</span>
                <ChevronRight className={`w-5 h-5 text-slate-300 transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-50"
                  >
                    <div className="px-8 py-6 text-slate-500 font-medium leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RateUnits = () => {
  const units = [
    { name: "Posto Paraná", link: "#" },
    { name: "Rua Auta Vidal saída para Planaltina de Goiás", link: "#" },
    { name: "Posto Indaiá", link: "#" },
    { name: "Distrito do Bezerra", link: "#" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-lavanderia-green/5 border border-lavanderia-green/10 rounded-[3rem] p-12 lg:p-20 text-center">
          <h3 className="text-[10px] font-black text-lavanderia-green uppercase tracking-[0.4em] mb-6">Google Reviews</h3>
          <h4 className="text-3xl lg:text-4xl font-black text-slate-900 mb-10 leading-tight">Nos ajude a crescer. <br/> Avalie sua unidade favorita:</h4>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {units.map((unit, i) => (
              <a 
                key={i} 
                href={unit.link} 
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-lavanderia-green/30 transition-all group"
              >
                <div className="flex text-amber-400 justify-center mb-4">
                   {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Avaliar no Google</p>
                <p className="text-sm font-black text-slate-900 group-hover:text-lavanderia-green transition-colors">{unit.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[500px] border-8 border-slate-50 relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123476.353347915!2d-47.38793049182373!3d-15.54145719584742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bc20c1537b003%3A0xc0f1b2f0a1c1d000!2sFormosa%2C%20GO!5e0!3m2!1spt-BR!2sbr!4v1714480000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          ></iframe>
          <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 pointer-events-none">
             <div className="flex items-center gap-3 text-white">
               <Navigation className="w-6 h-6 text-lavanderia-green" />
               <span className="text-xl font-black tracking-tighter uppercase">Nossa Presença em Formosa</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InstagramSection = () => {
  const reels = [
    { id: 1, video: "https://res.cloudinary.com/dqukldtq1/video/upload/v1777562669/WhatsApp_Video_2026-04-27_at_4.22.37_PM_ghoprb.mp4", label: "Posto Paraná" },
    { id: 2, video: "https://res.cloudinary.com/dqukldtq1/video/upload/v1777562668/WhatsApp_Video_2026-04-27_at_4.23.11_PM_x9ohtr.mp4", label: "Rua Auta Vidal saída para Planaltina de Goiás" },
    { id: 3, video: "https://res.cloudinary.com/dqukldtq1/video/upload/v1777562655/WhatsApp_Video_2026-04-27_at_4.25.19_PM_vu5ssk.mp4", label: "Posto Indaiá" },
    { id: 4, video: "https://res.cloudinary.com/dqukldtq1/video/upload/v1777563470/WhatsApp_Video_2026-04-27_at_4.25.16_PM_v929gj.mp4", label: "Distrito do Bezerra" },
  ];

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black text-lavanderia-cyan uppercase tracking-[0.4em] mb-6">Instagram Reels</h2>
            <h3 className="text-4xl font-black text-slate-900 leading-tight">
              Acompanhe os bastidores e dicas exclusivas no <span className="text-lavanderia-cyan">@lavanderiaaqui</span>.
            </h3>
          </div>
          <a 
            href="#" 
            className="bg-lavanderia-cyan text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-lavanderia-cyan/20 hover:scale-105 transition-all flex items-center gap-3"
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
          </a>
        </div>

        <motion.div 
          drag="x"
          dragConstraints={{ right: 0, left: -800 }}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
        >
          {reels.map((reel) => (
            <motion.div 
              key={reel.id} 
              className="min-w-[280px] lg:min-w-[320px] aspect-[9/16] bg-black rounded-[2.5rem] overflow-hidden relative group shadow-xl"
            >
              <video 
                src={reel.video} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 pointer-events-none">
                <div className="flex items-center gap-3 text-white mb-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white/40 overflow-hidden bg-white">
                    <img src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777558914/WhatsApp_Image_2026-04-30_at_11.20.12_AM_e7vkjw.jpg" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Lavanderia Aqui</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 bg-lavanderia-cyan rounded-full animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">{reel.label}</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <Zap className="w-8 h-8 text-white fill-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-10 flex items-center gap-2 text-slate-300 text-[10px] font-black uppercase tracking-widest">
          <ChevronRight className="w-4 h-4" />
          Arraste para ver mais Reels
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="bg-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-slate-100 pt-20">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="logo-shine-container p-2 bg-slate-50 rounded-xl"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777558914/WhatsApp_Image_2026-04-30_at_11.20.12_AM_e7vkjw.jpg" 
                  alt="Lavanderia Aqui Logo" 
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
                Lavanderia <span className="text-lavanderia-cyan">Aqui</span>
              </span>
            </div>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm mb-10">
              Limpando o seu dia a dia com tecnologia e sustentabilidade, 24 horas por dia em Formosa.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-lavanderia-green transition-colors border border-slate-100">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-lavanderia-green transition-colors border border-slate-100">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">Endereço Principal</h4>
            <div className="flex items-start gap-4">
               <MapPin className="w-6 h-6 text-lavanderia-green flex-shrink-0" />
               <p className="text-slate-600 font-bold leading-relaxed">
                 Av. Maestro João Luiz do Espírito Santo, 1234, <br/>
                 Ed. Pátio Laguna, <br/>
                 Formosa-GO
               </p>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">Central</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-lavanderia-cyan" />
                <span className="text-slate-900 font-black">(61) 99915-5433</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-lavanderia-cyan" />
                <span className="text-slate-900 font-black">Sempre Aberto 24h</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-50">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em]">
            © 2026 LAVANDERIA AQUI - AUTOATENDIMENTO
          </p>
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-widest text-slate-300">
            <span>Privacidade</span>
            <span>Termos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-lavanderia-green/20 selection:text-lavanderia-green transition-colors duration-300">
      <Navbar />
      <Hero />
      <GoogleReviews />
      <Features />
      <DeixeComAGente />
      <Units />
      <Franchise />
      <AppDownload />
      <InstagramSection />
      <FAQ />
      <RateUnits />
      <MapSection />
      <Footer />
      
      {/* Floating WhatsApp Action */}
      <motion.a 
        href="https://wa.me/5561999155433" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-[2rem] shadow-2xl z-50 flex items-center gap-3 group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 font-black text-xs uppercase tracking-widest whitespace-nowrap">
          Falar no WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
