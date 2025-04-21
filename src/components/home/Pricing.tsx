
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PricingTier from "./PricingTier";
import CommonFeatures from "./CommonFeatures";

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Starter",
      price: "$2,500",
      description: "Perfect for professionals just getting started with lead generation.",
      leadsPerMonth: "Up to 12 Exclusive Leads per Month",
      serviceAreas: "1 service area",
      teamSize: "Individual or Small Team",
      features: [
        "Branded MrXP Business Website",
        "Lead Dashboard",
        "Exclusive Leads",
        "Chat Box / Instant Messaging",
        "Click-to-Call functionality",
        "Priority Support"
      ]
    },
    {
      title: "Growth",
      price: "$5,000",
      description: "For established pros ready to grow their business significantly.",
      leadsPerMonth: "Up to 24 Exclusive Leads per Month",
      serviceAreas: "2-3 service areas",
      teamSize: "Growing Business or Medium Team",
      features: [
        "Everything in Starter",
        "Advanced lead management",
        "Extended service area coverage",
        "Team collaboration tools",
        "Campaign quality audits",
        "Performance tracking"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "$10,000",
      description: "Full-service solution for high-volume service businesses.",
      leadsPerMonth: "Up to 50 Exclusive Leads per Month",
      serviceAreas: "3-4 service areas",
      teamSize: "Established Business with Staffed Team",
      features: [
        "Everything in Growth",
        "Maximum lead volume",
        "Priority campaign optimization",
        "Custom reporting",
        "Dedicated account manager",
        "Strategic growth planning"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for the best. <span className="text-mrxp-primary">Unlock the Power of Your Experience</span>
          </h2>
          <p className="text-xl text-gray-600">
            Earn exclusive leads. Grow your business with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingTier 
              key={index} 
              {...tier}
            />
          ))}
        </div>

        <div className="text-center mb-20">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-mrxp-accent hover:bg-mrxp-accent/90 text-white px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-mrxp-primary text-mrxp-primary hover:bg-mrxp-primary/10 px-8">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
        
        <CommonFeatures />

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Need more than 50 leads/month?</h3>
          <p className="text-gray-600 mb-6">Let's build a custom plan around your business goals.</p>
          <Link to="/contact">
            <Button variant="outline" className="bg-white">
              Request Custom Plan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
