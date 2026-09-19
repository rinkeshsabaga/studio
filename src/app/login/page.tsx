import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Truck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center space-x-3 group mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
              <span className="text-white font-extrabold text-2xl">R</span>
            </div>
            <span className="font-bold font-headline text-3xl tracking-tight text-slate-900">
              RoadShip
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Login to your dashboard to manage shipments.</p>
        </div>

        <Card className="shadow-xl border-0 rounded-2xl overflow-hidden">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number or Email</label>
                <Input placeholder="Enter your credentials" className="h-12 rounded-xl bg-slate-50 border-slate-200" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-700">Password</label>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Forgot password?</a>
                </div>
                <Input type="password" placeholder="••••••••" className="h-12 rounded-xl bg-slate-50 border-slate-200" />
              </div>
              
              <Button type="button" size="lg" className="w-full h-14 rounded-xl font-bold shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white">
                Sign In
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-500">
              Don't have an account? <Link href="/contact" className="font-semibold text-blue-600 hover:underline">Contact Sales</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
