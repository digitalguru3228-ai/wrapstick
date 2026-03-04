// HPI 1.7-G
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Phone, Utensils } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// --- Utility Components ---

const SectionDivider = () => (
  <div className="w-full flex items-center justify-center py-12 opacity-20">
    <div className="h-px bg-primary w-full max-w-[200px]" />
    <div className="mx-4 text-primary text-xs tracking-[0.2em]">WRAPSTICK</div>
    <div className="h-px bg-primary w-full max-w-[200px]" />
  </div>
);

const Marquee = ({ text, direction = 1 }: { text: string; direction?: number }) => {
  return (
    <div className="relative flex overflow-hidden py-6 bg-primary text-background">
      <motion.div
        className="flex whitespace-nowrap font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter"
        animate={{ x: direction * -1000 }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <span key={i} className="mx-8">
            {text} <span className="text-background/30 mx-4">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const ParallaxImage = ({ src, alt, className, height = "h-full" }: { src: string; alt: string; className?: string; height?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className} ${height}`}>
      <motion.div style={{ y }} className="w-full h-[120%] absolute top-[-10%] left-0">
        <Image
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          width={1200}
        />
      </motion.div>
    </div>
  );
};

// --- Main Component ---

export default function HomePage() {
  const containerRef = useRef(null);

  // Data Sources (Canonized)
  const menuCategories = [
    {
      id: 'burgers',
      title: "Veg Burgers",
      items: [
        { name: "Yummy Burger", price: "₹60" },
        { name: "Veg Delight Burger", price: "₹80" },
        { name: "Penny Burger", price: "₹90" },
        { name: "Maxi Burger", price: "₹100" },
        { name: "Jumbo Burger", price: "₹100" },
        { name: "Big Delecio", price: "₹120" }
      ]
    },
    {
      id: 'wraps',
      title: "Signature Wraps",
      items: [
        { name: "Paneer Twister ", price: "₹90" },
        { name: "Paneer Maxicana", price: "₹100" },
        { name: "Tangy Wrap", price: "₹110" },
        { name: "Chilly Wrap", price: "₹80" },
        { name: "Munchy Wrap", price: "₹80" },
        { name: "Fairy Wrap", price: "₹70" },
      ]
    },
    {
      id: 'pizza',
      title: "Premium Pizza",
      items: [
        { name: "Top 6 Inches", price: "₹130" },
        { name: "Cheese Square 8 inches / 6 inches Special", price: "₹200 / 150" },
        { name: "Co", price: "₹240" },
        { name: "Wrapstick Supreme", price: "₹280" }
      ]
    }
  ];

  const handleWhatsAppOrder = () => {
    window.open('https://wa.me/918460480045?text=Hi%2C%20I%20would%20like%20to%20order%20from%20Wrapstick', '_blank');
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      <style>{`
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          color: transparent;
        }
        .text-stroke-primary {
          -webkit-text-stroke: 1px #FF6600;
          color: transparent;
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>

      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
          <Image
            src="https://static.wixstatic.com/media/db083c_10c099e479d147bdadb1981ae3ba8f3c~mv2.png?originWidth=576&originHeight=576"
            alt="Dark moody food background"
            className="w-full h-full object-cover opacity-50"
            width={1920}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Typography Column */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="font-heading text-[12vw] lg:text-[9rem] leading-[0.85] tracking-tighter text-foreground uppercase">
                  Wrap <span className="text-stroke">The</span><br />
                  <span className="text-primary">Flavor.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="mt-8 md:mt-12 pl-2 md:pl-4 border-l-2 border-primary/50"
              >
                <h2 className="font-heading text-3xl md:text-5xl text-foreground/90 mb-4">
                  Taste the Passion.
                </h2>
                <p className="font-paragraph text-lg md:text-xl text-muted-foreground max-w-xl">
                  Experience the ultimate fusion of taste and hygiene. From juicy burgers to cheesy pizzas, we craft every meal with obsession.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <Button
                  onClick={handleWhatsAppOrder}
                  className="bg-primary text-white hover:bg-primary/90 font-heading text-lg px-10 py-8 rounded-none clip-diagonal transition-transform hover:-translate-y-1"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Order on WhatsApp
                </Button>
                <Link to="/menu">
                  <Button
                    variant="outline"
                    className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-black font-heading text-lg px-10 py-8 rounded-none transition-all"
                  >
                    View Full Menu
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Visual Column - Floating Card */}
            <div className="lg:col-span-4 hidden lg:block relative h-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
                className="absolute inset-0 z-10"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-dark-grey/50 backdrop-blur-sm">
                  <Image
                    src="https://static.wixstatic.com/media/db083c_0596e478faaf4dd6a73f6d5931ee8660~mv2.png?originWidth=576&originHeight=576"
                    alt="Featured Burger"
                    className="w-full h-full object-cover"
                    width={600}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-primary font-heading text-sm tracking-widest uppercase mb-1">Best Seller</p>
                        <h3 className="text-white font-heading text-3xl">Maxi Burger</h3>
                      </div>
                      <div className="text-white font-paragraph text-2xl font-bold">₹100</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border border-dashed border-primary/30 rounded-full z-0"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* --- MARQUEE SECTION --- */}
      <section className="w-full bg-primary z-30 relative">
        <Marquee text="BURGERS • WRAPS • PIZZA • SHAWARMA • FRIED CHICKEN • SHAKES" />
      </section>

      {/* --- ABOUT SECTION (Asymmetrical Split) --- */}
      <section className="w-full py-32 bg-dark-grey relative overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Image Grid */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-12">
                  <ParallaxImage
                    src="https://static.wixstatic.com/media/db083c_2e9dd948c80c4493aa2dcafd3f518bb6~mv2.png?originWidth=1152&originHeight=320"
                    alt="Fresh Ingredients"
                    className="rounded-2xl h-[300px]"
                  />
                  <div className="bg-background p-6 rounded-2xl border border-white/5">
                    <Utensils className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-heading text-xl text-white mb-2">Fresh Daily</h4>
                    <p className="font-paragraph text-sm text-white/60">Ingredients sourced locally every morning.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary p-6 rounded-2xl">
                    <Clock className="w-8 h-8 text-white mb-4" />
                    <h4 className="font-heading text-xl text-white mb-2">Fast Service</h4>
                    <p className="font-paragraph text-sm text-white/90">Hot and ready when you need it.</p>
                  </div>
                  <ParallaxImage
                    src="https://static.wixstatic.com/media/db083c_e3d264c871c24a0cb20a728f2022235f~mv2.png?originWidth=1152&originHeight=320"
                    alt="Chef Cooking"
                    className="rounded-2xl h-[350px]"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-primary font-heading text-lg tracking-widest uppercase mb-4">Our Story</h4>
                <h2 className="font-heading text-5xl md:text-7xl text-white mb-8 leading-[0.9]">
                  We Don't Just Make Food. <br />
                  <span className="text-white/20">We Craft Experiences.</span>
                </h2>
                <p className="font-paragraph text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
                  Wrapstick serves fresh, delicious and affordable fast food including burgers, wraps, pizza, shawarma, fried chicken and thick shakes. We focus on taste, hygiene and fast service. Located in the heart of Palanpur, we are redefining what fast food means.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 border-t border-white/10 pt-8">
                  <div>
                    <div className="font-heading text-4xl text-primary mb-1">100%</div>
                    <div className="font-paragraph text-sm text-white/50 uppercase tracking-wider">Hygiene Rating</div>
                  </div>
                  <div>
                    <div className="font-heading text-4xl text-primary mb-1">50+</div>
                    <div className="font-paragraph text-sm text-white/50 uppercase tracking-wider">Menu Items</div>
                  </div>
                  <div>
                    <div className="font-heading text-4xl text-primary mb-1">4.8</div>
                    <div className="font-paragraph text-sm text-white/50 uppercase tracking-wider">Customer Rating</div>
                  </div>
                </div>

                <div className="mt-12">
                  <Link to="/about">
                    <Button variant="link" className="text-white hover:text-primary p-0 font-heading text-xl group">
                      Read More About Us <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <SectionDivider />

      {/* --- MENU SHOWCASE (Sticky & Dynamic) --- */}
      <section className="w-full py-20 bg-background relative">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-20">

          <div className="mb-20 text-center">
            <h2 className="font-heading text-6xl md:text-8xl text-white mb-6">
              Menu <span className="text-primary">Highlights</span>
            </h2>
            <p className="font-paragraph text-xl text-white/60 max-w-2xl mx-auto">
              Explore our most popular categories. From crunchy bites to cheesy delights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sticky Navigation Sidebar */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32 space-y-2">
                {menuCategories.map((cat, idx) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="block p-4 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xl text-white/50 group-hover:text-primary transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="font-paragraph text-lg text-white group-hover:translate-x-2 transition-transform">
                        {cat.title}
                      </span>
                    </div>
                  </a>
                ))}
                <div className="pt-8 mt-8 border-t border-white/10">
                  <Link to="/menu">
                    <Button className="w-full bg-white text-black hover:bg-primary hover:text-white font-heading">
                      View Full Menu
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Menu Content Area */}
            <div className="lg:col-span-9 space-y-32">
              {menuCategories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
                      <h3 className="font-heading text-5xl md:text-6xl text-white">{category.title}</h3>
                      <span className="hidden md:block font-paragraph text-primary text-lg">Freshly Prepared</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Featured Item Card (First item gets special treatment) */}
                      <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-dark-grey border border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                          <div className="p-8 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-4">
                              <h4 className="font-heading text-3xl text-white">{category.items[0].name}</h4>
                              <span className="font-heading text-2xl text-primary">{category.items[0].price}</span>
                            </div>
                            <p className="font-paragraph text-white/60 mb-6">
                              Our signature preparation with secret spices and premium ingredients. A must try for everyone.
                            </p>
                            <Button
                              onClick={handleWhatsAppOrder}
                              variant="outline"
                              className="w-fit border-white/20 text-white hover:bg-primary hover:border-primary"
                            >
                              Order Now
                            </Button>
                          </div>
                          <div className="relative h-64 md:h-auto overflow-hidden">
                            <Image
                              src="https://static.wixstatic.com/media/db083c_90987eb1c29840fc8e0f483e37ad2307~mv2.png?originWidth=576&originHeight=576"
                              alt={category.items[0].name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              width={600}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Standard Items */}
                      {category.items.slice(1).map((item, idx) => (
                        <div
                          key={idx}
                          className="group p-6 rounded-xl bg-dark-grey/50 border border-white/5 hover:border-primary/50 transition-colors"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-heading text-xl text-white group-hover:text-primary transition-colors">
                              {item.name}
                            </h4>
                            <span className="font-paragraph font-bold text-white/80">{item.price}</span>
                          </div>
                          <div className="w-full h-px bg-white/5 group-hover:bg-primary/20 transition-colors my-4" />
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-white/40 uppercase tracking-wider">Fast Food</span>
                            <button onClick={handleWhatsAppOrder} className="text-primary text-sm font-bold hover:underline">
                              Add +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- FEATURED VISUAL BREAK --- */}
      <section className="w-full h-[80vh] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/db083c_713ceea0ca29475aac46d0e374b63c9f~mv2.png?originWidth=1920&originHeight=1024"
            alt="Pizza making process"
            className="w-full h-full object-cover fixed-bg-effect" // Note: fixed-bg-effect would need CSS, using standard object-cover here
            width={1920}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-6xl md:text-9xl text-white mb-4 mix-blend-overlay">
              CRAVING?
            </h2>
            <p className="font-paragraph text-2xl md:text-3xl text-white/90 mb-10">
              Don't wait. Indulge in the flavor now.
            </p>
            <Button
              onClick={handleWhatsAppOrder}
              className="bg-primary text-white hover:bg-white hover:text-black font-heading text-xl px-12 py-8 rounded-full transition-all transform hover:scale-105"
            >
              Order Now via WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- LOCATION & INFO --- */}
      <section className="w-full py-32 bg-dark-grey text-white">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="space-y-10">
              <h2 className="font-heading text-5xl md:text-7xl">
                Visit <span className="text-primary">Wrapstick</span>
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-2xl mb-2">Location</h4>
                    <p className="font-paragraph text-white/60 text-lg leading-relaxed">
                      Hotel Al Qama, Hussain Tekari,<br />
                      Post Kanodar, Palanpur,<br />
                      Banaskantha, Gujarat 385520, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-2xl mb-2">Contact</h4>
                    <p className="font-paragraph text-white/60 text-lg">
                      +91 8460480045
                    </p>
                    <button
                      onClick={handleWhatsAppOrder}
                      className="mt-2 text-primary hover:text-white transition-colors underline underline-offset-4"
                    >
                      Chat on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10">
               {/* Placeholder for Map - Using Image as visual representation */}
               <Image
                  src="https://static.wixstatic.com/media/db083c_64c7f06b8d644cd397d9d25cb7e18ba1~mv2.png?originWidth=768&originHeight=448"
                  alt="Map Location Visual"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  width={800}
               />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-primary/90 p-4 rounded-full shadow-xl animate-bounce">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
