import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const sitemapLinks = [
  {
    category: 'Main Pages',
    links: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ]
  },
  {
    category: 'Logistics',
    links: [
      { name: 'Track Shipment', path: '/track' },
      { name: 'Book a Truck', path: '/services' },
      { name: 'Network', path: '/services#network' },
    ]
  },
  {
    category: 'Support & Legal',
    links: [
      { name: 'Help Center (FAQ)', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-slate-900 mb-8 text-center">Sitemap</h1>
        <Card className="shadow-sm border-slate-200">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {sitemapLinks.map((section) => (
                <div key={section.category}>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">
                    {section.category}
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.path} className="text-slate-600 hover:text-blue-600 hover:underline transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
