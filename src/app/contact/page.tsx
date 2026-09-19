import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-slate-900 mb-4">Contact Our Sales Team</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to optimize your logistics? Fill out the form below and one of our supply chain experts will get in touch with you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">First Name</label>
                    <Input placeholder="John" className="h-12 rounded-xl bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Last Name</label>
                    <Input placeholder="Doe" className="h-12 rounded-xl bg-slate-50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <Input type="email" placeholder="john@company.com" className="h-12 rounded-xl bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <Input type="tel" placeholder="+91 98765 43210" className="h-12 rounded-xl bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[120px] rounded-xl bg-slate-50" />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 rounded-xl font-bold shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Headquarters</h3>
                <p className="text-slate-600 leading-relaxed">
                  MOVEFLEX LOGISTICS PVT LTD,<br />
                  Achitpur Khajuraul Mirzapur,<br />
                  Uttar Pradesh, India 231305
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                <p className="text-slate-600 mb-1">Sales & Support</p>
                <a href="tel:+919151829990" className="text-lg font-semibold text-slate-900 hover:text-emerald-600 transition-colors">
                  +91 91518 29990
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600 mb-1">General Inquiries</p>
                <a href="mailto:contact@roadship.in" className="text-lg font-semibold text-slate-900 hover:text-purple-600 transition-colors">
                  contact@roadship.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
