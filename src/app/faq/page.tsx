import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: "What types of goods can I ship with RoadShip?",
    answer: "You can ship a wide variety of goods, including general merchandise, industrial parts, electronics, textiles, and more. We do not handle hazardous materials, perishable goods without proper packaging, or illegal items. Please contact our support team for specific inquiries."
  },
  {
    question: "How can I track my shipment?",
    answer: "Once your booking is confirmed, you will receive a unique tracking ID. You can enter this ID on the 'Track Shipment' section of our website or mobile app to get real-time updates on the location and status of your cargo."
  },
  {
    question: "What is the difference between Full Truckload (FTL) and Part Truckload (PTL)?",
    answer: "FTL (Full Truckload) means you book an entire truck for your exclusive use, which is ideal for large shipments. PTL (Part Truckload) is for smaller shipments where you share truck space with other customers, making it a more cost-effective option for non-urgent, smaller cargo."
  },
  {
    question: "What is your service area?",
    answer: "RoadShip provides logistics services across all major cities and industrial hubs in India. Our network is continuously expanding to cover more remote locations. Please check our 'Cities Served' section or contact us for specific route availability."
  },
  {
    question: "How is the shipping cost calculated?",
    answer: "Shipping costs are calculated based on several factors, including the weight and dimensions of the cargo, the distance between origin and destination, the type of service selected (e.g., Express, PTL, FTL), and any special handling requirements."
  }
];

export default function FAQPage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Find quick answers to common questions about our services, booking, and tracking.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
