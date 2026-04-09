import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Send, 
  TrendingUp, 
  Eye, 
  Users, 
  Target, 
  PenTool, 
  Play, 
  BarChart, 
  Lightbulb, 
  Video, 
  Award,
  Menu,
  X,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const yBackground = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="font-display font-bold text-2xl tracking-tighter text-white">
            VISION<span className="text-primary">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <button onClick={() => scrollTo("xizmatlar")} className="hover:text-primary transition-colors">Xizmatlar</button>
            <button onClick={() => scrollTo("natijalar")} className="hover:text-primary transition-colors">Natijalar</button>
            <button onClick={() => scrollTo("jarayon")} className="hover:text-primary transition-colors">Jarayon</button>
            <button onClick={() => scrollTo("haqimda")} className="hover:text-primary transition-colors">Haqimda</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button onClick={() => window.open("https://t.me/kontentmarketolog1", "_blank")} className="bg-primary text-black hover:bg-primary/90 font-semibold rounded-full px-6">
              Bog'lanish
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 20 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8 text-xl font-display font-medium">
              <button onClick={() => scrollTo("xizmatlar")} className="hover:text-primary transition-colors">Xizmatlar</button>
              <button onClick={() => scrollTo("natijalar")} className="hover:text-primary transition-colors">Natijalar</button>
              <button onClick={() => scrollTo("jarayon")} className="hover:text-primary transition-colors">Jarayon</button>
              <button onClick={() => scrollTo("haqimda")} className="hover:text-primary transition-colors">Haqimda</button>
              <Button onClick={() => window.open("https://t.me/kontentmarketolog1", "_blank")} className="bg-primary text-black hover:bg-primary/90 font-bold rounded-full px-8 py-6 text-lg mt-4">
                Bog'lanish
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden" id="hero">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <motion.div 
            style={{ y: yBackground }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="flex-1 text-center lg:text-left"
              style={{ opacity: opacityHero }}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium tracking-wide uppercase text-white/80">Kontent Marketolog</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6">
                Izzatillo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  Maripov
                </span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-white/80 font-light mb-4">
                Instagram orqali biznesingizni o'stiraman
              </motion.p>

              <motion.p variants={fadeIn} className="text-lg text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Kontent marketing va shaxsiy brend orqali mijozlar sonini oshiring. Sifatli kontent — biznesingiz yuzi.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button onClick={() => window.open("https://t.me/kontentmarketolog1", "_blank")} size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold rounded-full px-8 py-6 text-lg w-full sm:w-auto shadow-[0_0_40px_rgba(0,255,255,0.3)] transition-shadow hover:shadow-[0_0_60px_rgba(0,255,255,0.5)]">
                  Bepul konsultatsiya olish
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollTo("natijalar")} className="rounded-full px-8 py-6 text-lg w-full sm:w-auto border-white/10 hover:bg-white/5 text-white">
                  Natijalarni ko'rish
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative max-w-md w-full aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-full blur-[60px] opacity-30 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-white/20 p-2 glass-card">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                  <img 
  src="/images/logo-circle.png" 
  className="w-full h-full object-cover rounded-full"
/>
                  
                  {/* Floating badges */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
                  >
                    <div className="bg-primary/20 p-2 rounded-full"><Users size={20} className="text-primary" /></div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg leading-none">250K+</span>
                      <span className="text-xs text-white/60">Obunachi</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
                  >
                    <div className="bg-blue-500/20 p-2 rounded-full"><Eye size={20} className="text-blue-500" /></div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg leading-none">35M+</span>
                      <span className="text-xs text-white/60">Qamrov</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 relative border-t border-white/5 bg-neutral-950/50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              Ekspertiza
            </motion.h2>
            <motion.h3 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold mb-8">
              Vision Agency asoschisi
            </motion.h3>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/70 leading-relaxed mb-16">
              Instagram algoritmlari qanday ishlashini aniq bilamiz. Biznesingiz uchun to'g'ri strategiya, sifatli vizual va sotuvchi kontent orqali maqsadli auditoriyangizni jalb qilamiz va brendingizni bozorda yetakchiga aylantiramiz.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Obunachi", value: "250K+", icon: Users },
                { label: "Qamrov", value: "35M+", icon: Eye },
                { label: "Loyihalar", value: "Ko'plab", icon: Award }
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeIn} className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <stat.icon className="w-8 h-8 text-primary mb-4 mx-auto opacity-50" />
                  <div className="text-4xl font-display font-bold mb-2">{stat.value}</div>
                  <div className="text-white/60 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 relative" id="natijalar">
        <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Amaliy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Natijalar</span></h2>
            <p className="text-xl text-white/60 max-w-2xl">Raqamlar so'zlaydi. Mijozlarimiz erishgan asosiy natijalar va o'sish ko'rsatkichlari.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                metric: "+60,000",
                title: "Obunachi o'sishi",
                desc: "Maqsadli auditoriyani jalb qilish va to'g'ri reels strategiyasi orqali organik o'sish.",
                icon: TrendingUp,
                color: "from-primary to-blue-500"
              },
              {
                metric: "1.6M+",
                title: "Ko'rishlar (Reels)",
                desc: "Trendlar va qiziqarli stsenariylar asosida yaratilgan virusli kontentlar natijasi.",
                icon: Video,
                color: "from-blue-500 to-indigo-500"
              },
              {
                metric: "35M+",
                title: "Umumiy qamrov",
                desc: "Loyihalar bo'ylab umumiy auditoriya qamrovi va brend taniluvchanligi.",
                icon: Target,
                color: "from-indigo-500 to-purple-500"
              }
            ].map((caseStudy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="glass-card rounded-[2rem] p-8 h-full border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${caseStudy.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                    <caseStudy.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className={`text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r ${caseStudy.color} mb-4`}>
                    {caseStudy.metric}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                  <p className="text-white/60 leading-relaxed">{caseStudy.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative bg-neutral-950" id="xizmatlar">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Nimalar taklif <span className="text-primary">qilaman?</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Instagram rivojlantirish",
                desc: "Sahifangizni o'stirib, mijoz olib kelaman. Profilni to'liq qadoqlash va yuritish.",
                icon: Instagram
              },
              {
                title: "Shaxsiy brend yaratish",
                desc: "Sizni bozorda kuchli ekspertga aylantiraman. Ishonch va obro' shakllantirish.",
                icon: Award
              },
              {
                title: "Kontent strategiya",
                desc: "Sotadigan va jalb qiladigan kontent reja. G'oyadan tortib realizatsiyagacha.",
                icon: PenTool
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed mb-8">{service.desc}</p>
                <div className="flex items-center text-primary font-medium group cursor-pointer">
                  Batafsil <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Kontentlarim</h2>
              <p className="text-xl text-white/60 max-w-2xl">Reels formati orqali minglab odamlarni jalb qiluvchi videolar</p>
            </div>
            <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 shrink-0">
              <Instagram className="w-4 h-4 mr-2" /> Instagramda ko'rish
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((i) => (
              
  <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
                
                {/* Placeholder pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-primary text-white group-hover:text-black">
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center">
                    <Eye className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-sm font-medium">100K+ ko'rishlar</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative bg-neutral-950" id="jarayon">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Ish <span className="text-primary">Jarayoni</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
            
            {[
              { title: "Tahlil", desc: "Soha va raqobatchilarni o'rganish, auditoriya ehtiyojlarini aniqlash.", icon: BarChart },
              { title: "Strategiya", desc: "Aniq maqsadli kontent reja va progress strategiyasini tuzish.", icon: Lightbulb },
              { title: "Kontent", desc: "Yuqori sifatli vizual va sotuvchi matnlar yaratish.", icon: PenTool },
              { title: "Natija", desc: "Tahlil qilish va ko'rsatkichlarni optimallashtirish.", icon: Target }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10"
              >
                <div className="w-24 h-24 rounded-3xl bg-neutral-900 border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-black relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-black font-bold flex items-center justify-center border-4 border-neutral-950 z-20">
                    {i + 1}
                  </div>
                  <step.icon className="w-10 h-10 text-white group-hover:text-primary transition-colors relative z-10" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/60">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-[100%] blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-16 text-center"
          >
            Mijozlar nima <span className="text-primary">deydi?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-3xl p-8 relative"
              >
                <div className="text-primary text-6xl font-serif absolute top-4 right-6 opacity-20">"</div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center font-bold">
                    M{i}
                  </div>
                  <div>
                    <div className="font-bold">Mijoz Ismi {i}</div>
                    <div className="text-sm text-white/50">Biznes Egasi</div>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  "Izzatillo bilan ishlashni boshlaganimizdan so'ng, Instagram sahifamiz mutlaqo yangi bosqichga chiqdi. Mijozlar oqimi sezilarli darajada oshdi. O'z ishining ustasi!"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Personal Brand */}
      <section className="py-32 relative bg-neutral-950" id="haqimda">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="flex-1 relative aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden glass-card border-white/10"
>
  {/* ДО: заглушка */}
  {/* <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-900 flex items-center justify-center">
    <span className="text-6xl font-display font-bold text-white/10">Izzatillo Maripov</span>
  </div> */}

  {/* ПОСЛЕ: реальное фото */}
  <img 
    src="/images/izzatillo-photo.jpg" 
    alt="Izzatillo Maripov" 
    className="w-full h-full object-cover rounded-[2rem]"
  />
</motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">O'z ishimning <br/><span className="text-primary">fidoyisiman</span></h2>
              <div className="space-y-6 text-lg text-white/70">
                <p>
                  Men Izzatillo Maripov, kontent marketolog va Vision Agency asoschisiman. Maqsadim — biznesingizni Instagram orqali daromadli kanalga aylantirish.
                </p>
                <p>
                  Ko'pchilik "Menda kontent bor, nega natija yo'q?" deb so'raydi. Javob oddiy: strategiyasiz kontent shunchaki chiroyli rasm. Men chiroyli rasmlar emas, balki aniq ishlaydigan, jalb qiladigan va sotadigan tizim yarataman.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    "Aniq va tasdiqlangan strategiyalar",
                    "Trendlarga asoslangan yondashuv",
                    "Faqat natijaga qaratilgan ish"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="font-medium text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 border-primary/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white relative z-10">
              Biznesingizni keyingi bosqichga <br className="hidden md:block"/> olib chiqmoqchimisiz?
            </h2>
            <p className="text-xl text-white/70 mb-10 relative z-10">
              Hoziroq bog'laning va bepul konsultatsiya orqali sahifangizni <br className="hidden md:block"/> qanday o'stirish mumkinligini bilib oling.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Button onClick={() => window.open("https://t.me/kontentmarketolog1", "_blank")} size="lg" className="bg-primary text-black hover:bg-white font-bold rounded-full px-10 py-8 text-xl w-full sm:w-auto transition-colors shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] flex items-center gap-3">
                <Send className="w-6 h-6" /> Bog'lanish
              </Button>
              
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <a href="https://instagram.com/izzatillo.maripov" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10 text-white">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display font-bold text-2xl tracking-tighter">
              VISION<span className="text-primary">.</span>
            </div>
            
            <div className="text-white/50 text-sm">
              © {new Date().getFullYear()} Izzatillo Maripov. Barcha huquqlar himoyalangan.
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://t.me/kontentmarketolog1" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/izzatillo.maripov" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
