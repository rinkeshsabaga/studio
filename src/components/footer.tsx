import Link from 'next/link';
import Image from 'next/image';
import { Truck, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { Icon: Facebook, href: 'https://www.facebook.com/GoRoadship/', name: 'Facebook' },
  { Icon: Twitter, href: '#', name: 'Twitter' },
  { Icon: Linkedin, href: '#', name: 'LinkedIn' },
  { Icon: Instagram, href: 'https://www.instagram.com/roadship.in/#', name: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-300 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50 overflow-hidden">
                <Image src="/logo.png" alt="RoadShip Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="text-2xl font-bold font-headline text-white tracking-tight">RoadShip</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Modernizing India's freight network. We combine intelligent routing, verified fleets, and 24/7 support to deliver your cargo safely and on time.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map(({ Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white/5"
                  aria-label={`Follow us on ${name}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-headline font-semibold mb-6 text-white text-lg">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Services</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Careers</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Blog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-headline font-semibold mb-6 text-white text-lg">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/faq" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Help Center</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
              <li><Link href="/track" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Track Shipment</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-headline font-semibold mb-6 text-white text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>MOVEFLEX LOGISTICS PVT LTD,<br/>Achitpur Khajuraul Mirzapur,<br/>Uttar Pradesh, India 231305</span>
              </li>
              <li>
                <a href="tel:+919151829990" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                  <span>+91 91518 29990</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@roadship.in" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>contact@roadship.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} MOVEFLEX LOGISTICS PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
