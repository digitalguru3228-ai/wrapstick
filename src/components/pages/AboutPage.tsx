import { motion } from 'framer-motion';
import { Award, Heart, Clock, Users } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Quality Ingredients',
      description: 'We use only the freshest ingredients to ensure every bite is delicious and satisfying.',
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Quick preparation and delivery without compromising on taste or quality.',
    },
    {
      icon: Award,
      title: 'Hygiene First',
      description: 'Maintaining the highest standards of cleanliness and food safety in our kitchen.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, adapt, and serve with passion.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 bg-dark-grey">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="font-heading text-6xl md:text-8xl text-foreground">
              About <span className="text-primary">Wrapstick</span>
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              Serving passion and flavor in every dish
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="font-heading text-5xl md:text-6xl text-foreground">
                Our <span className="text-primary">Story</span>
              </h2>
              
              <div className="space-y-6 font-paragraph text-lg text-foreground/80 leading-relaxed">
                <p>
                  Wrapstick was born from a simple passion: to serve fresh, delicious, and affordable fast food that brings joy to every customer. Located in the heart of Palanpur, Gujarat, we've become a favorite destination for food lovers seeking quality and taste.
                </p>
                <p>
                  Our menu features a diverse selection of burgers, wraps, pizza, shawarma, fried chicken, and thick shakes. Each item is carefully crafted with fresh ingredients and prepared with attention to detail that sets us apart.
                </p>
                <p>
                  What makes Wrapstick special is our unwavering commitment to three core principles: exceptional taste, strict hygiene standards, and fast service. We believe that great food shouldn't require compromise, and we work tirelessly to deliver on that promise every single day.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://static.wixstatic.com/media/db083c_1b12f976b7054089adba29049ce6684a~mv2.png?originWidth=768&originHeight=576"
                  alt="Wrapstick restaurant interior"
                  className="w-full h-auto"
                  width={800}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-24 bg-dark-grey">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-foreground">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-xl p-8 space-y-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground">
                  {value.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://static.wixstatic.com/media/db083c_fbbb24895602496db2f00b3db6590a7f~mv2.png?originWidth=768&originHeight=576"
                  alt="Fresh ingredients"
                  className="w-full h-auto"
                  width={800}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <h2 className="font-heading text-5xl md:text-6xl text-foreground">
                Our <span className="text-primary">Mission</span>
              </h2>
              
              <div className="space-y-6 font-paragraph text-lg text-foreground/80 leading-relaxed">
                <p>
                  At Wrapstick, our mission is simple yet powerful: to make delicious, high-quality fast food accessible to everyone in our community. We believe that great taste and affordability can coexist without compromise.
                </p>
                <p>
                  Every day, we strive to exceed expectations by maintaining the highest standards of food quality, kitchen hygiene, and customer service. We're not just serving food; we're creating memorable experiences that keep our customers coming back.
                </p>
                <p>
                  As we grow, we remain committed to our roots and the values that define us. Whether you're grabbing a quick bite or ordering for the whole family, we promise to deliver the same passion and quality in every single order.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
