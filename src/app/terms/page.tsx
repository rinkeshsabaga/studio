import { Card, CardContent } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-slate-900 mb-8 text-center">Terms of Service</h1>
        <Card className="shadow-sm border-slate-200">
          <CardContent className="p-8 md:p-12 prose prose-slate max-w-none">
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing and using RoadShip's platform and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
            
            <h3>2. Description of Service</h3>
            <p>RoadShip provides a digital logistics platform that connects shippers with truck owners and fleet operators. We provide matching, tracking, and payment facilitation services. We do not own the vehicles used in transportation.</p>

            <h3>3. User Conduct</h3>
            <p>You agree to use our services only for lawful purposes. You are prohibited from violating or attempting to violate the security of the platform, including, without limitation, accessing data not intended for you or logging onto a server or an account which you are not authorized to access.</p>

            <h3>4. Payments and Billing</h3>
            <p>All payments for freight services must be processed through the RoadShip platform unless explicitly agreed otherwise in writing. Invoices are due upon receipt unless alternative credit terms have been established and approved.</p>

            <h3>5. Limitation of Liability</h3>
            <p>In no event shall RoadShip, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any errors, mistakes, or inaccuracies of content, or any cargo damage or loss during transit beyond the mandated insurance coverage limits.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
