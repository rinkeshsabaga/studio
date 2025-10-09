
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Truck, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-foreground/80"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Truck className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">RoadShip</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link
                href="/"
                className="mr-6 flex items-center space-x-2 mb-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Truck className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">RoadShip</span>
              </Link>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary pl-4 py-2 rounded-l-md",
                      pathname === item.href ? "bg-primary/10 text-primary" : "text-foreground/80"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
