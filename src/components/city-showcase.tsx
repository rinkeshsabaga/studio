import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const cityIds = ['city-mumbai', 'city-delhi', 'city-bangalore', 'city-chennai'];

export default function CityShowcase() {
  const cities = PlaceHolderImages.filter(p => cityIds.includes(p.id));

  return (
    <section id="cities" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Serving Major Indian Cities</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Our network spans across all major metropolitan areas, ensuring your cargo reaches its destination.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city) => (
            <Card key={city.id} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-w-3 aspect-h-2">
                  <Image
                    src={city.imageUrl}
                    alt={city.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={city.imageHint}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-headline text-xl font-semibold">
                    {city.description.split(',')[0].replace('The ', '').replace('A modern tech park in ', '').replace('A traditional temple in ', '')}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
