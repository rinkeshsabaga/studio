'use client';

import { useState } from 'react';
import { MapPin, Phone, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const PLAY_URL = 'https://play.google.com/store/apps/details?id=YOUR_APP_ID';
const APPLE_URL = 'https://apps.apple.com/app/idYOUR_APP_ID';

export default function BookingForm() {
  const [mode, setMode] = useState<'shipper' | 'owner'>('shipper');

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode !== 'shipper') return;

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
        headers: {
          "Content-Type": "application/json",
          "Origin": "https://rinkeshsabaga.github.io/",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        toast({
          title: "✅ Success",
          description: result.message || "Row added successfully.",
        });
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
      <CardContent className="p-4 space-y-4">

        {/* Segmented tabs like your screenshot */}
        <div className="rounded-2xl border bg-white p-1 shadow-sm">
          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              aria-pressed={mode === 'shipper'}
              onClick={() => setMode('shipper')}
              disabled={loading}
              className={[
                "rounded-xl px-4 py-3 text-center transition",
                mode === 'shipper'
                  ? "bg-white shadow font-semibold text-blue-600"
                  : "bg-transparent text-slate-700 hover:bg-slate-50"
              ].join(' ')}
            >
              <div className="leading-tight">Book Truck</div>
              <div className="text-xs text-slate-500">I'm Shipper</div>
            </button>

            <button
              type="button"
              aria-pressed={mode === 'owner'}
              onClick={() => setMode('owner')}
              disabled={loading}
              className={[
                "rounded-xl px-4 py-3 text-center transition",
                mode === 'owner'
                  ? "bg-white shadow font-semibold text-blue-600"
                  : "bg-transparent text-slate-700 hover:bg-slate-50"
              ].join(' ')}
            >
              <div className="leading-tight">Find Load</div>
              <div className="text-xs text-slate-500">I'm Truck Owner</div>
            </button>
          </div>
        </div>

        {/* Content area */}
        {mode === 'owner' ? (

          <div className="text-sm text-slate-600">
            To find load you can contact us on {' '}
            <a href="tel:+919876543210" className="font-medium underline underline-offset-4">
              +919151829990
            </a>
          </div>


        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-center"
          >
            <div className="w-full lg:col-span-1">
              <label className="mb-1 block font-semibold">From:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-green-500" />
                <Input
                  type="text"
                  placeholder="Enter your loading city"
                  className="pl-7"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  aria-label="Origin City"
                  disabled={loading}
                  autoComplete="address-level2"
                />
              </div>
            </div>

            <div className="w-full lg:col-span-1">
              <label className="mb-1 block font-semibold">To:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-red-500" />
                <Input
                  type="text"
                  placeholder="Enter your unloading city"
                  className="pl-7"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  aria-label="Destination City"
                  disabled={loading}
                  autoComplete="address-level2"
                />
              </div>
            </div>

            <div className="w-full md:col-span-2 lg:col-span-1">
              <label className="mb-1 block font-semibold" htmlFor="phone">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="pl-10"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-label="Phone Number"
                  disabled={loading}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="tel"
                />
              </div>
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
                "Book"
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

