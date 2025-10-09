import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Package, Warehouse, Box, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Full Truckload (FTL)',
    description: 'Dedicated transportation for your large shipments. We offer a range of truck sizes to meet your needs, ensuring your goods travel securely and exclusively.'
  },
  {
    icon: Box,
    title: 'Part Truckload (PTL)',
    description: 'A cost-effective solution for smaller shipments that don\'t require a full truck. We consolidate your cargo with others to optimize costs and efficiency.'
  },
  {
    icon: Package,
    title: 'Express Cargo & Parcel',
    description: 'Time-sensitive delivery for your parcels and documents. Our express network ensures swift and secure transportation across major cities.'
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Storage',
    description: 'Secure, modern warehousing facilities to store your inventory. Our solutions are flexible, scalable, and integrated with our transport network.'
  }
];

export default function ServicesPage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Logistics Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to meet the diverse needs of your business, from single parcels to full truckloads.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col md:flex-row items-start p-6 group">
                  <div className="bg-primary/10 text-primary rounded-lg p-4 mb-4 md:mb-0 md:mr-6">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-headline text-2xl mb-2">{service.title}</CardTitle>
                    <CardContent className="p-0 text-muted-foreground">
                      <p>{service.description}</p>
                    </CardContent>
                  </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
