import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "You get full access to all features for 14 days, no credit card required. You can explore everything SaaSFlow has to offer and see how it transforms your workflow before making any commitment."
  },
  {
    question: "Can I change plans at any time?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments on your next invoice."
  },
  {
    question: "What integrations do you support?",
    answer: "We support 100+ integrations including Slack, Salesforce, HubSpot, Google Workspace, Microsoft Teams, Shopify, and many more. We also provide a robust API for custom integrations."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, security is our top priority. We're SOC2 compliant, use enterprise-grade encryption, perform regular security audits, and offer GDPR compliance for our European customers."
  },
  {
    question: "Do you offer customer support?",
    answer: "We provide email support for all plans, priority support for Professional plans, and dedicated 24/7 support for Enterprise customers. Our average response time is under 2 hours."
  },
  {
    question: "Can I export my data?",
    answer: "Yes, you own your data and can export it at any time in multiple formats including CSV, JSON, and PDF reports. There are no data lock-in policies."
  },
  {
    question: "Do you offer training or onboarding?",
    answer: "We provide comprehensive documentation, video tutorials, and webinars for all users. Enterprise customers get dedicated onboarding sessions and training for their team."
  },
  {
    question: "What's your uptime guarantee?",
    answer: "We maintain 99.9% uptime and provide status updates at status.saasflow.com. Enterprise customers receive SLA guarantees with compensation for any downtime beyond our commitment."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Frequently
              <span className="bg-gradient-hero bg-clip-text text-transparent"> asked questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about SaaSFlow. Can't find what you're looking for? 
              <a href="#" className="text-primary hover:underline ml-1">Contact our support team</a>.
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;