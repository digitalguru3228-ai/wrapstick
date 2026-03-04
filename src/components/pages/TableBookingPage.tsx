import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function TableBookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    people: '1',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatBookingMessage = () => {
    const message = `New Table Booking

Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time || 'Not specified'}
People: ${formData.people}
Notes: ${formData.notes || 'Not specified'}

Location: Wrapstick, Kanodar`;

    return message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.date || !formData.people) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    const message = formatBookingMessage();
    const encodedMessage = encodeURIComponent(message);
    
    try {
      window.open(`https://wa.me/918460480045?text=${encodedMessage}`, '_blank');
      // Reset form after sending
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        people: '1',
        notes: '',
      });
    } catch (error) {
      console.error('Error sending booking:', error);
      alert('Failed to send booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Book Your <span className="text-primary">Table</span>
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              Reserve your table at Wrapstick and enjoy an amazing dining experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="w-full py-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-3">
                <h2 className="font-heading text-4xl text-foreground">
                  Reserve Your <span className="text-primary">Spot</span>
                </h2>
                <p className="font-paragraph text-base text-foreground/70">
                  Fill in your details and we'll confirm your booking via WhatsApp
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="font-paragraph text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="bg-dark-grey border-secondary text-foreground placeholder:text-foreground/50 font-paragraph"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="font-paragraph text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="bg-dark-grey border-secondary text-foreground placeholder:text-foreground/50 font-paragraph"
                    required
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="font-paragraph text-sm font-medium text-foreground">
                    Preferred Date *
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="bg-dark-grey border-secondary text-foreground font-paragraph"
                    required
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="font-paragraph text-sm font-medium text-foreground">
                    Preferred Time
                  </label>
                  <Input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="bg-dark-grey border-secondary text-foreground font-paragraph"
                  />
                </div>

                {/* Number of People */}
                <div className="space-y-2">
                  <label className="font-paragraph text-sm font-medium text-foreground">
                    Number of People *
                  </label>
                  <Input
                    type="number"
                    name="people"
                    value={formData.people}
                    onChange={handleInputChange}
                    min="1"
                    max="20"
                    className="bg-dark-grey border-secondary text-foreground font-paragraph"
                    required
                  />
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="font-paragraph text-sm font-medium text-foreground">
                    Special Requests or Notes
                  </label>
                  <Textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any special requests or dietary preferences?"
                    className="bg-dark-grey border-secondary text-foreground placeholder:text-foreground/50 font-paragraph min-h-24 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph text-lg px-8 py-6 h-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Booking via WhatsApp'}
                </Button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-dark-grey rounded-xl p-8 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground">Business Hours</h3>
                <p className="font-paragraph text-base text-foreground/70">
                  Open Daily: 12:00 PM - 11:30 PM
                </p>
              </div>

              <div className="bg-dark-grey rounded-xl p-8 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground">Location</h3>
                <p className="font-paragraph text-base text-foreground/70">
                  Hotel Al Qama, Hussain Tekari, Post Kanodar, Palanpur, Banaskantha, Gujarat 385520, India
                </p>
                <Button
                  onClick={() => window.open('https://maps.app.goo.gl/NXz6ouRKxdrfpv3R8', '_blank')}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-paragraph w-full"
                >
                  Get Directions
                </Button>
              </div>

              <div className="bg-dark-grey rounded-xl p-8 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground">Contact Us</h3>
                <p className="font-paragraph text-base text-foreground/70">
                  +91 8460480045
                </p>
                <Button
                  onClick={() => window.location.href = 'tel:+918460480045'}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph w-full"
                >
                  Call Now
                </Button>
              </div>

              <div className="bg-primary/10 rounded-xl p-8 space-y-4 border border-primary/20">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground">Group Bookings</h3>
                <p className="font-paragraph text-base text-foreground/70">
                  For large group bookings, please call us directly for special arrangements
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-dark-grey">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="font-heading text-4xl md:text-6xl text-foreground">
              Can't Wait to <span className="text-primary">Book?</span>
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              You can also reach us directly via WhatsApp or phone call
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button
                onClick={() => window.open('https://wa.me/918460480045?text=Hi%2C%20I%20want%20to%20book%20a%20table', '_blank')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph text-lg px-8 py-6 h-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
              <Button
                onClick={() => window.location.href = 'tel:+918460480045'}
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
