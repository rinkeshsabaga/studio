import Link from 'next/link';
import { Truck, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { Icon: Facebook, href: 'https://www.facebook.com/GoRoadship/', name: 'Facebook' },
  { Icon: Twitter, href: '#', name: 'Twitter' },
  { Icon: Linkedin, href: '#', name: 'LinkedIn' },
  { Icon: Instagram, href: 'https://www.instagram.com/roadship.in/#', name: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">RoadShip</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for fast, reliable, and efficient shipping solutions across India.
            </p>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>MOVEFLEX LOGISTICS PVT LTD,</p>
              <p>Achitpur Khajuraul Mirzapur,</p>
              <p> Uttar Pradesh India 231305</p>
              <p>
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +919151829990
                </a>
              </p>
              <p>
                <a href="mailto:contact@roadship.com" className="hover:text-primary transition-colors">
                  contact@roadship.in
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Follow us on ${name}`}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MOVEFLEX LOGISTICS PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
