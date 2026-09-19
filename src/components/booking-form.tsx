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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"  
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
    <Card className="w-full shadow-none border-0 bg-transparent">
      <CardContent className="p-0 space-y-6">

        {/* Segmented tabs like your screenshot */}
        <div className="rounded-2xl bg-gray-100/80 p-1 backdrop-blur-sm shadow-inner">
          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              aria-pressed={mode === 'shipper'}
              onClick={() => setMode('shipper')}
              disabled={loading}
              className={[
                "rounded-xl px-4 py-3 text-center transition-all duration-300",
                mode === 'shipper'
                  ? "bg-white shadow-md font-semibold text-primary scale-100"
                  : "bg-transparent text-slate-600 hover:text-slate-900 scale-95 hover:scale-100"
              ].join(' ')}
            >
              <div className="leading-tight text-base">Book Truck</div>
              <div className="text-xs opacity-70">I'm a Shipper</div>
            </button>

            <button
              type="button"
              aria-pressed={mode === 'owner'}
              onClick={() => setMode('owner')}
              disabled={loading}
              className={[
                "rounded-xl px-4 py-3 text-center transition-all duration-300",
                mode === 'owner'
                  ? "bg-white shadow-md font-semibold text-primary scale-100"
                  : "bg-transparent text-slate-600 hover:text-slate-900 scale-95 hover:scale-100"
              ].join(' ')}
            >
              <div className="leading-tight text-base">Find Load</div>
              <div className="text-xs opacity-70">I'm a Truck Owner</div>
            </button>
          </div>
        </div>

        {/* Content area */}
        {mode === 'owner' ? (
          <div className="text-center py-8 px-4 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-base text-slate-600 mb-2">To find a load, please contact our support team:</p>
            <a href="tel:+919151829990" className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-blue-700 transition-colors">
              <Phone className="w-6 h-6" /> +91 91518 29990
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="w-full">
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">From (Origin)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <Input
                  type="text"
                  placeholder="Enter your loading city"
                  className="pl-10 h-12 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-primary focus-visible:bg-white transition-all text-base"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  aria-label="Origin City"
                  disabled={loading}
                  autoComplete="address-level2"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">To (Destination)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                <Input
                  type="text"
                  placeholder="Enter your unloading city"
                  className="pl-10 h-12 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-primary focus-visible:bg-white transition-all text-base"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  aria-label="Destination City"
                  disabled={loading}
                  autoComplete="address-level2"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="mb-1.5 block text-sm font-semibold text-slate-700" htmlFor="phone">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="10-digit mobile number"
                  className="pl-10 h-12 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-primary focus-visible:bg-white transition-all text-base"
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
              size="lg"
              className="w-full h-14 mt-2 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" /> Processing...
                </>
              ) : (
                "Get Best Price"
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

