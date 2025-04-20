
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  buttonText = "Get Started"
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  isPopular?: boolean;
  buttonText?: string;
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md border ${isPopular ? 'border-mrxp-primary' : 'border-gray-100'} relative`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-mrxp-accent text-white px-4 py-1 rounded-tr-xl rounded-bl-xl text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500">/mo</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Link to="/signup">
          <Button 
            className={`w-full mb-6 ${isPopular ? 'bg-mrxp-accent hover:bg-mrxp-accent/90' : 'bg-mrxp-primary hover:bg-mrxp-primary/90'}`}
          >
            {buttonText}
          </Button>
        </Link>
        
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Starter",
      price: "$49",
      description: "Perfect for professionals just getting started with lead generation.",
      features: [
        "Professional mini-website",
        "Instant messaging",
        "Click-to-call functionality",
        "Basic lead tracking",
        "Email notifications",
        "5 leads per month included"
      ]
    },
    {
      title: "Professional",
      price: "$99",
      description: "For established pros ready to grow their business significantly.",
      features: [
        "Everything in Starter",
        "Custom domain name",
        "Instant quote generator",
        "Advanced lead management",
        "Targeted local advertising",
        "20 leads per month included",
        "Priority support"
      ],
      isPopular: true
    },
    {
      title: "Premium",
      price: "$199",
      description: "Full-service solution for high-volume service businesses.",
      features: [
        "Everything in Professional",
        "Unlimited leads",
        "Advanced analytics dashboard",
        "Team collaboration tools",
        "Client CRM integration",
        "Booking/scheduling system",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-mrxp-primary">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier 
              key={index} 
              title={tier.title} 
              price={tier.price} 
              description={tier.description} 
              features={tier.features} 
              isPopular={tier.isPopular} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-2">Need a custom solution for your business?</p>
          <Link to="/contact">
            <Button variant="outline" className="bg-white">Contact our team</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
