import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Package, CheckCircle2, Clock, Truck } from 'lucide-react';

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-slate-900 mb-4">Track Your Shipment</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Enter your tracking ID or LR number to get real-time updates on your cargo's location and status.
          </p>
        </div>

        <Card className="shadow-lg border-0 rounded-3xl mb-12 overflow-hidden bg-white">
          <CardContent className="p-2 sm:p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  placeholder="Enter Tracking ID (e.g., RS123456789)" 
                  className="h-16 pl-12 pr-4 rounded-2xl bg-slate-50 border-transparent text-lg focus-visible:ring-blue-500 focus-visible:ring-2 focus-visible:bg-white transition-all shadow-inner" 
                />
              </div>
              <Button size="lg" className="h-16 px-10 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white shrink-0">
                Track Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Demo Tracking Result State (can be hidden or shown dynamically) */}
        <div className="opacity-50 pointer-events-none">
          <h3 className="text-center text-slate-500 font-medium mb-6 uppercase tracking-wider text-sm">Example Tracking Result</h3>
          <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-900 p-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">Tracking ID</p>
                <p className="text-2xl font-bold font-mono">RS123456789</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm font-medium mb-1">Expected Delivery</p>
                <p className="text-lg font-bold text-emerald-400">Oct 24, 2026 - 14:00</p>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="relative">
                {/* Line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-200"></div>

                <div className="space-y-8 relative">
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 border-4 border-white relative z-10 shadow-sm">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Delivered</h4>
                      <p className="text-slate-500">New Delhi Warehouse, DL</p>
                      <p className="text-sm text-slate-400 mt-1">Oct 24, 13:45</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 border-4 border-white relative z-10 shadow-sm">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Out for Delivery</h4>
                      <p className="text-slate-500">Gurugram Hub, HR</p>
                      <p className="text-sm text-slate-400 mt-1">Oct 24, 08:30</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 border-4 border-white relative z-10 shadow-sm">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg text-slate-400">Dispatched</h4>
                      <p className="text-slate-400">Mumbai Origin Facility, MH</p>
                      <p className="text-sm text-slate-400 mt-1">Oct 22, 18:15</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
