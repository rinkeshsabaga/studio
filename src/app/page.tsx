import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Package, Clock, ArrowRight, HelpCircle, IndianRupee, ShieldCheck, Headset} from 'lucide-react';
import BookingForm from '@/components/booking-form';
import CityShowcase from '@/components/city-showcase';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Seamless Logistics, Delivered.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Your trusted partner for fast, reliable, and efficient shipping across India.
          </p>
          <div className="max-w-2xl mx-auto">
        
            <BookingForm />
           
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg mb-12">
              We offer a comprehensive range of logistics services tailored to meet your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center transition-transform transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                  <Truck className="w-8 h-8" />
                </div>
                <CardTitle className="mt-4 font-headline">Best Truck Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transparent and best truck rates across India.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center transition-transform transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <CardTitle className="mt-4 font-headline">Verified Trucks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Verified trucks from 5000+ truck owners from India.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center transition-transform transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                  <Clock className="w-8 h-8" />
                </div>
                <CardTitle className="mt-4 font-headline">Ontime Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Realtime truck tracking to delivery your goods on time.
                </p>
              </CardContent>
            </Card>
             <Card className="text-center transition-transform transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                  <Headset className="w-8 h-8" />
                </div>
                <CardTitle className="mt-4 font-headline">Customer Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We utilise our 3+ years expertise and provide 24/7 service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CityShowcase />

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <HelpCircle className="w-12 h-12 mx-auto text-primary mb-4"/>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Have Questions?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Find answers to common questions about our services, booking process, and more in our dedicated FAQ section.
            </p>
            <Button asChild size="lg">
              <Link href="/faq">
                Visit FAQs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
