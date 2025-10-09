import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <div>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">About RoadShip</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Connecting India, one shipment at a time. Discover our story, mission, and the values that drive us.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-headline font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with the goal of revolutionizing the Indian logistics landscape, RoadShip started as a small operation with a big vision: to make shipping simple, transparent, and reliable for businesses of all sizes.
                </p>
                <p>
                  Over the years, we have grown our network, embraced technology, and built a team of dedicated professionals who are passionate about logistics. Today, we are proud to be a leading logistics provider, helping businesses thrive by connecting them to markets across the country.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                  <Target className="w-8 h-8" />
                </div>
                <CardTitle className="mt-4 font-headline">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide seamless, innovative, and cost-effective logistics solutions that empower businesses and drive economic growth across India.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                  <Eye className="w-8 h-8" />
                </div>
                <CardTitle className="mt-4 font-headline">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be India’s most trusted and technologically advanced logistics partner, recognized for our commitment to customer success and operational excellence.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                  <Heart className="w-8 h-8" />
                </div>
                <CardTitle className="mt-4 font-headline">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reliability, Integrity, Customer-Centricity, and Innovation. These principles guide every decision we make and every shipment we handle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
