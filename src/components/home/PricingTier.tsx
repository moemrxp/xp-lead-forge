
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  leadsPerMonth: string;
  serviceAreas: string;
  teamSize: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

const PricingTier = ({ 
  title, 
  price, 
  description,
  leadsPerMonth,
  serviceAreas,
  teamSize,
  features,
  isPopular = false,
  buttonText = "Get Started"
}: PricingTierProps) => {
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
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm">
            <span className="font-medium">🔹 {leadsPerMonth}</span>
          </div>
          <div className="flex items-center text-sm">
            <span>{serviceAreas}</span>
          </div>
          <div className="flex items-center text-sm">
            <span>{teamSize}</span>
          </div>
        </div>

        <Link to="/contact">
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

export default PricingTier;
