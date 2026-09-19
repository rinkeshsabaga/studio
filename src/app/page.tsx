'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Package, Clock, ArrowRight, HelpCircle, ShieldCheck, Headset, MapPin, Star, TrendingUp, Zap, BarChart } from 'lucide-react';
import BookingForm from '@/components/booking-form';
import CityShowcase from '@/components/city-showcase';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50/50">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover scale-105"
              priority
              data-ai-hint={heroImage.imageHint}
            />
            {/* Elegant overlay: dark at the bottom, transparent at the top, slightly tinted */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-blue-900/60 to-slate-950/90" />
          </motion.div>
        )}
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 pt-24 pb-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 text-left max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 shadow-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-blue-100 uppercase">Next-Gen Logistics</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-headline text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-white">
              Move Forward with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Precision
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light">
              Experience the future of freight. Intelligent routing, real-time tracking, and unmatched reliability across India's largest transport network.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-gray-100 font-semibold h-14 px-8 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                <Link href="/services">Start Shipping</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-full backdrop-blur-md bg-white/5 transition-all hover:border-white/40">
                <Link href="/services#network">View Network</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
            className="flex-1 w-full max-w-md lg:max-w-lg perspective-1000"
          >
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-2 rounded-[2rem] shadow-2xl transform-gpu">
              <div className="bg-white rounded-[1.5rem] shadow-inner p-6 md:p-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-60"></div>
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -ml-10 -mb-10 opacity-60"></div>
                 <div className="relative z-10">
                   <h3 className="text-2xl font-bold text-slate-900 mb-2 font-headline">Book a Truck</h3>
                   <p className="text-slate-500 mb-6 text-sm">Instant quotes and guaranteed placement.</p>
                   <BookingForm />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="relative z-20 -mt-16 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100/50 p-8 md:p-12 backdrop-blur-xl bg-white/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-slate-100">
            {[
              { label: "Packages Delivered", value: "5M+", icon: Package },
              { label: "Active Trucks", value: "10,000+", icon: Truck },
              { label: "Cities Covered", value: "500+", icon: MapPin },
              { label: "On-time Delivery", value: "99.9%", icon: Clock }
            ].map((stat, i) => (
              <div key={i} className="text-center group px-4">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h4>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-headline font-extrabold mb-4 text-slate-900">
              Beyond Basic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Logistics</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 text-lg max-w-2xl">
              We leverage cutting-edge technology to provide visibility, reliability, and speed that traditional networks can't match.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]"
          >
            {/* Feature 1 - Large */}
            <motion.div variants={fadeUp} className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900 p-8 sm:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 mix-blend-overlay z-0" />
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md mb-6 border border-white/10">
                  <BarChart className="w-7 h-7 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">Predictive Analytics</h3>
                  <p className="text-slate-300 text-lg max-w-md leading-relaxed">
                    Our AI models predict transit times and potential delays before they happen, keeping your supply chain moving smoothly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 - Small */}
            <motion.div variants={fadeUp} className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-blue-50 p-8 sm:p-10 border border-blue-100">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 text-blue-600">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Verified Fleet</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Access 10,000+ thoroughly vetted vehicles and drivers across India.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 - Small */}
            <motion.div variants={fadeUp} className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-emerald-50 p-8 sm:p-10 border border-emerald-100">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 text-emerald-600">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Instant Booking</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Confirm your load in seconds with our automated matching system.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 4 - Large */}
            <motion.div variants={fadeUp} className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-sm">
              <div className="relative z-10 flex flex-col md:flex-row h-full gap-8 items-center">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600">
                    <Headset className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">24/7 Command Center</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Our operations team monitors your shipment round-the-clock, resolving exceptions instantly.
                  </p>
                </div>
                <div className="flex-1 w-full bg-slate-50 rounded-2xl p-6 border border-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  <div className="relative flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Status Update</div>
                      <div className="text-sm font-semibold text-slate-700">Truck arrived at origin facility</div>
                    </div>
                  </div>
                  <div className="relative flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 opacity-70">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">ETA Updated</div>
                      <div className="text-sm font-semibold text-slate-700">Delivery expected by 14:00 tomorrow</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CityShowcase />

      {/* Modern CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
          <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full bg-blue-600/20 blur-[120px]"></div>
          <div className="absolute -bottom-[500px] -left-[500px] w-[1000px] h-[1000px] rounded-full bg-emerald-600/20 blur-[120px]"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-white"/>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-white tracking-tight">Ready to Scale Your Supply Chain?</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto font-light">
              Join thousands of businesses that trust us with their most critical shipments. Experience logistics that actually works.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-gray-100 font-semibold h-14 px-10 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105 text-lg">
                <Link href="/services">
                  Create Account
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 h-14 px-10 rounded-full backdrop-blur-md bg-transparent transition-all text-lg hover:border-white/40">
                <Link href="/contact">
                  Talk to Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
