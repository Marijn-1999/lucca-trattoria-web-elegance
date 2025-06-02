
import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-800 text-warm-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Lucca Trattoria</h3>
            <p className="text-warm-200 mb-4 max-w-md">
              Authentic Italian cuisine in the heart of the city. Experience the warmth of Italian hospitality with every dish.
            </p>
            <div className="flex items-center text-warm-200 mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span>123 Italian Way, Downtown City, ST 12345</span>
            </div>
            <div className="flex items-center text-warm-200">
              <Clock className="h-4 w-4 mr-2" />
              <span>Mon-Thu 5-10pm | Fri-Sat 5-11pm | Sun 4-9pm</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-warm-200 hover:text-warm-100 transition-colors">
                Home
              </Link>
              <Link to="/menu" className="block text-warm-200 hover:text-warm-100 transition-colors">
                Menu
              </Link>
              <Link to="/about" className="block text-warm-200 hover:text-warm-100 transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-warm-200 hover:text-warm-100 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-warm-200 space-y-2">
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@luccatrattoria.com</p>
              <p className="text-sm mt-4">
                Reservations recommended
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-700 mt-8 pt-8 text-center text-warm-300">
          <p>&copy; 2024 Lucca Trattoria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
