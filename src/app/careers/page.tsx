import { Card, CardContent } from '@/components/ui/card';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-slate-900 mb-8">Careers at RoadShip</h1>
        <Card className="shadow-sm border-slate-200">
          <CardContent className="p-12">
            <h2 className="text-2xl font-bold text-slate-700 mb-4">We are growing!</h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              We are always on the lookout for talented engineers, logistics experts, and operations managers. 
              Currently, there are no open positions, but please check back later or send your resume to our contact email.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
