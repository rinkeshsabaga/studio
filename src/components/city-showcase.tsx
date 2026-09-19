'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const cityIds = ['city-mumbai', 'city-gurugram', 'city-bangalore', 'city-chennai','city-hydrabad','city-ahemedabad'];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function CityShowcase() {
  const cities = PlaceHolderImages.filter(p => cityIds.includes(p.id));

  return (
    <section id="cities" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <MapPin className="w-8 h-8 text-primary"/>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-headline font-bold mb-6">Serving Major Indian Cities</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
            Our network spans across all major metropolitan areas, ensuring your cargo reaches its destination safely and on time.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cities.map((city, index) => {
            const cityName = city.description.split(',')[0].replace('The ', '').replace('A modern tech park in ', '').replace('A traditional temple in ', '');
            
            // Make every 3rd item slightly taller to break the grid monotony slightly
            const isTall = index % 3 === 0;

            return (
              <motion.div key={city.id} variants={fadeUp} className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-black ${isTall ? 'h-[400px]' : 'h-[320px] lg:h-[400px]'}`}>
                <Image
                  src={city.imageUrl}
                  alt={city.description}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                  data-ai-hint={city.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium text-sm tracking-wider uppercase">Hub</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-white drop-shadow-md">
                    {cityName}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
