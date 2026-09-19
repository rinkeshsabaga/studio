import { Card, CardContent } from '@/components/ui/card';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-slate-900 mb-8">RoadShip Blog</h1>
        <Card className="shadow-sm border-slate-200">
          <CardContent className="p-12">
            <h2 className="text-2xl font-bold text-slate-700 mb-4">Coming Soon</h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Our industry experts are currently writing amazing content about the future of logistics, supply chain optimization, and fleet management in India. Stay tuned!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
