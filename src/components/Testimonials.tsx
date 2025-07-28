import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow Inc.",
    avatar: "SC",
    content: "SaaSFlow transformed how we handle data analysis. We've reduced our reporting time by 80% and gained insights we never had before.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Data Director",
    company: "GrowthLabs",
    avatar: "MR",
    content: "The integration capabilities are outstanding. We connected all our tools in minutes, not weeks. Game-changing for our workflow.",
    rating: 5
  },
  {
    name: "Emily Thompson",
    role: "CEO",
    company: "StartupXYZ",
    avatar: "ET",
    content: "As a growing startup, we needed something scalable and affordable. SaaSFlow delivered exactly that. Highly recommend!",
    rating: 5
  },
  {
    name: "David Park",
    role: "Analytics Manager",
    company: "DataCorp",
    avatar: "DP",
    content: "The AI-powered insights have helped us identify trends we would have missed. Our decision-making is now data-driven and faster.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Product Manager",
    company: "InnovateCo",
    avatar: "LW",
    content: "Customer support is exceptional. Whenever we had questions, the team was there to help. The platform just works beautifully.",
    rating: 5
  },
  {
    name: "James Miller",
    role: "CTO",
    company: "ScaleUp Ltd",
    avatar: "JM",
    content: "Security was our main concern, but SaaSFlow exceeded our expectations. Enterprise-grade security with startup-friendly pricing.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Loved by
              <span className="bg-gradient-hero bg-clip-text text-transparent"> 10,000+ teams</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our customers have to say about transforming their business with SaaSFlow.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-0 shadow-sm">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-warning fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-muted">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                10k+
              </div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                500M+
              </div>
              <div className="text-muted-foreground">Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;