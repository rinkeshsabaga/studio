'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "relative text-sm font-semibold transition-all duration-300",
          isActive ? "text-blue-600" : (scrolled ? "text-slate-600 hover:text-blue-600" : "text-white/90 hover:text-white")
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {label}
        {isActive && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
            initial={false}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
      </Link>
    );
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-sm py-2" 
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <Image src="/logo.png" alt="RoadShip Logo" width={40} height={40} className="object-contain rounded-lg" />
          <span className={cn(
            "font-bold font-headline text-2xl tracking-tight transition-colors duration-300",
            scrolled ? "text-slate-900" : "text-white"
          )}>
           ROADSHIP
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="ghost" className={cn(
              "font-semibold rounded-full px-6 transition-colors",
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/20"
            )}>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className={cn(
              "rounded-full px-6 font-bold shadow-lg transition-all hover:scale-105",
              scrolled ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20" : "bg-white text-blue-900 hover:bg-gray-100 shadow-black/10"
            )}>
              <Link href="/track">Track Load</Link>
            </Button>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={cn(
                scrolled ? "text-slate-900" : "text-white"
              )}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white border-l-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-3 mb-10 mt-4">
                  <Image src="/logo.png" alt="RoadShip Logo" width={40} height={40} className="object-contain rounded-lg" />
                  <span className="font-bold font-headline text-2xl text-slate-900">ROADSHIP</span>
                </div>
                
                <div className="flex flex-col space-y-2 flex-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-semibold transition-all px-4 py-3 rounded-xl",
                        pathname === item.href ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-3 mt-auto mb-8">
                  <Button asChild variant="outline" className="w-full justify-start h-12 rounded-xl text-slate-700 border-slate-200" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/login"><User className="mr-2 h-5 w-5" /> Login to Dashboard</Link>
                  </Button>
                  <Button asChild className="w-full justify-between h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/track">Track Shipment <ArrowRight className="h-5 w-5" /></Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
