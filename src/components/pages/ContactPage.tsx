import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/918460480045?text=Hi%2C%20I%20have%20a%20question%20about%20Wrapstick', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+918460480045';
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 8460480045',
      action: handleCall,
      actionText: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with us on WhatsApp',
      action: handleWhatsAppContact,
      actionText: 'Open WhatsApp',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Open Daily: 10:00 AM - 11:00 PM',
      action: null,
      actionText: null,
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Hotel Al Qama, Hussain Tekari, Post Kanodar, Palanpur, Banaskantha, Gujarat 385520, India',
      action: () => window.open('https://maps.google.com/?q=Hotel+Al+Qama+Hussain+Tekari+Kanodar+Palanpur+Gujarat+385520', '_blank'),
      actionText: 'Get Directions',
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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              We'd love to hear from you. Reach out for orders, questions, or feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-grey rounded-xl p-8 space-y-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-heading text-2xl text-foreground">
                    {info.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70 leading-relaxed">
                    {info.content}
                  </p>
                </div>

                {info.action && info.actionText && (
                  <Button
                    onClick={info.action}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph px-6 py-5 h-auto"
                  >
                    {info.actionText}
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-24 bg-dark-grey">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-6">
              <h2 className="font-heading text-5xl md:text-6xl text-foreground">
                Visit <span className="text-primary">Us</span>
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Find us at Hotel Al Qama in Palanpur, Gujarat
              </p>
            </div>

            <div className="bg-background rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.5!2d72.4!3d24.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDEyJzAwLjAiTiA3MsKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wrapstick Location"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-grey rounded-xl p-12 md:p-16 text-center space-y-8"
          >
            <h2 className="font-heading text-4xl md:text-6xl text-foreground">
              Ready to <span className="text-primary">Order?</span>
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              Place your order now via WhatsApp for quick and easy service
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button
                onClick={handleWhatsAppContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph text-lg px-8 py-6 h-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Order on WhatsApp
              </Button>
              <Button
                onClick={handleCall}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-paragraph text-lg px-8 py-6 h-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
