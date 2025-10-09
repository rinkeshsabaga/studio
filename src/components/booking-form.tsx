'use client';

import { useState } from 'react';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast"

export default function BookingForm() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [phone, setPhone] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin || !destination || !phone) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please enter origin, destination, and phone number.",
      })
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      toast({
        variant: "destructive",
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian phone number.",
      });
      return;
    }

    toast({
        title: "Booking Initiated",
        description: `Searching for routes from ${origin} to ${destination}. We will contact you at ${phone}.`,
    })
    // In a real app, you would handle the booking logic here.
  };

  return (
    <Card className="w-full shadow-lg">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 items-center">
          <div className="relative w-full lg:col-span-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Origin City"
              className="pl-10"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              aria-label="Origin City"
            />
          </div>
          
          <div className="relative w-full lg:col-span-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Destination City"
              className="pl-10"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              aria-label="Destination City"
            />
          </div>

          <div className="relative w-full md:col-span-2 lg:col-span-1">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="pl-10"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-label="Phone Number"
            />
          </div>
          
          <Button type="submit" className="w-full md:col-span-2 lg:col-span-3">
            Get Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
