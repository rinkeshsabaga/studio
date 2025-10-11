'use client';

import { useState } from 'react';
import { MapPin, Phone, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

export default function BookingForm() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false); // <-- new loading state
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!origin || !destination || !phone) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please enter origin, destination, and phone number.",
      });
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
  
    const bookingData = { origin, destination, phone };
    setLoading(true);
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/exec`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
  
      const result = await response.json();
  
      if (response.ok && result.status === "success") {
        toast({
          title: "✅ Success",
          description: result.message || "Row added successfully.",
        });
  
        // Reset form
        setOrigin('');
        setDestination('');
        setPhone('');
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.message || "Something went wrong.",
        });
      }
    } catch (error) {
      console.error("Booking failed:", error);
      toast({
        variant: "destructive",
        title: "Booking Failed",
        description: "Unable to connect to the server. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Card className="w-full shadow-lg">
      <CardContent className="p-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 items-center"
        >
          <div className="relative w-full lg:col-span-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Origin City"
              className="pl-10"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              aria-label="Origin City"
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>

          <Button
            type="submit"
            className="w-full md:col-span-2 lg:col-span-3 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5 mr-2" /> Processing...
              </>
            ) : (
              "Get Quote"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
