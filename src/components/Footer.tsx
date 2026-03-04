import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-dark-grey border-t border-foreground/10">
      <div className="max-w-[100rem] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl text-foreground">
              Wrap<span className="text-primary">stick</span>
            </h2>
            <p className="font-paragraph text-base text-foreground/70">
              Fresh, delicious and affordable fast food. Taste the passion in every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors"
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl text-foreground">Contact</h3>
            <div className="space-y-4">
              <a
                href="tel:+918460480045"
                className="flex items-start space-x-3 font-paragraph text-base text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+91 8460480045</span>
              </a>
              <div className="flex items-start space-x-3 font-paragraph text-base text-foreground/70">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Open Daily<br />12:00 PM - 11:30 PM</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl text-foreground">Location</h3>
            <div className="flex items-start space-x-3 font-paragraph text-base text-foreground/70">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <address className="not-italic">
                Hotel Al Qama, Hussain Tekari,<br />
                Post Kanodar, Palanpur,<br />
                Banaskantha, Gujarat 385520,<br />
                India
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-paragraph text-sm text-foreground/60">
              © {new Date().getFullYear()} Wrapstick. All rights reserved.
            </p>
            <p className="font-paragraph text-sm text-foreground/60">
              Made with passion in Gujarat, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
