import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              🚀 New: AI-Powered Analytics Now Live
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Smart Analytics</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock actionable insights, automate workflows, and scale your business with our AI-powered SaaS platform trusted by 10,000+ companies worldwide.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-4">
                <Play className="mr-2" size={20} />
                Watch Demo
              </Button>
            </div>
            
            {/* Social Proof */}
            <p className="text-sm text-muted-foreground mb-8">
              Trusted by teams at Microsoft, Google, Stripe, and 10,000+ growing companies
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-glow animate-float">
              <img 
                src={heroDashboard} 
                alt="SaaSFlow Dashboard Interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-secondary rounded-full animate-pulse-glow animation-delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-warning rounded-full animate-bounce animation-delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;