'use client';

import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast"

export default function BookingForm() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin || !destination) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please enter both origin and destination.",
      })
      return;
    }
    toast({
        title: "Booking Initiated",
        description: `Searching for routes from ${origin} to ${destination}.`,
    })
    // In a real app, you would handle the booking logic here.
  };

  return (
    <Card className="w-full shadow-lg">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-2">
          <div className="relative w-full">
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
          <div className="hidden md:block">
            <ArrowRight className="h-5 w-5 text-muted-foreground"/>
          </div>
          <div className="relative w-full">
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
          <Button type="submit" className="w-full md:w-auto flex-shrink-0">
            Get Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
