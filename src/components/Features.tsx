import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  Smartphone, 
  Puzzle 
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your business with AI-powered analytics and real-time dashboards."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process millions of data points in seconds with our optimized cloud infrastructure."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC2 compliance, end-to-end encryption, and regular audits."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team using real-time collaboration tools and shared workspaces."
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your data anywhere with our responsive design and native mobile apps."
  },
  {
    icon: Puzzle,
    title: "Easy Integration",
    description: "Connect with 100+ tools and services through our robust API and pre-built integrations."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Everything you need to
              <span className="bg-gradient-hero bg-clip-text text-transparent"> scale your business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed to help you grow faster, work smarter, and achieve more with less effort.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;