
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
const PricingTier = ({
  title,
  price,
  description,
  leadsPerMonth,
  serviceAreas,
  teamSize,
  features,
  isPopular = false,
  isGrowthPopular = false,
  buttonText = "Get Started",
  priceSubtext
}) => {
  return <div className={`bg-white rounded-xl shadow-md border ${isPopular ? 'border-mrxp-primary' : isGrowthPopular ? 'border-blue-400' : 'border-gray-100'} relative`}>
      {isPopular && <div className="absolute top-0 right-0 bg-mrxp-accent text-white px-4 rounded-tr-xl rounded-bl-xl text-sm font-semibold py-[3px]">
          Most Popular
        </div>}
      {isGrowthPopular && <div className="absolute top-0 right-0 bg-blue-400 text-white px-4 rounded-tr-xl rounded-bl-xl text-sm font-semibold py-[3px]">
          Popular
        </div>}
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-bold mb-2 px-0 mx-0 py-[7px]">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-gray-500">/mo</span>}
          {priceSubtext && <div className="text-sm text-gray-600 mt-1">{priceSubtext}</div>}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-3 mb-6">
          {leadsPerMonth && <div className="flex items-center text-sm">
              <span className="font-medium">🔹 {leadsPerMonth}</span>
            </div>}
          {serviceAreas && <div className="flex items-center text-sm">
              <span className="font-bold">{serviceAreas}</span>
            </div>}
          {teamSize && <div className="flex items-center text-sm">
              <span className="font-bold">{teamSize}</span>
            </div>}
        </div>

        <Link to="/contact">
          <Button className={`w-full mb-6 ${isPopular ? 'bg-mrxp-accent hover:bg-mrxp-accent/90' : 'bg-mrxp-primary hover:bg-mrxp-primary/90'}`}>
            {buttonText}
          </Button>
        </Link>
        
        <ul className="space-y-3">
          {features.map((feature, idx) => <li key={idx} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>)}
        </ul>
      </div>
    </div>;
};
const CommonFeatures = () => {
  return null;
};
const Pricing = () => {
  const pricingTiers = [{
    title: "MrXP Website-Only Plan",
    price: "$0",
    priceSubtext: "for the first 30 days, then $597/mo",
    description: "Website & Technology",
    features: ["Build Value, Win Jobs, Maximize Profits.", "Custom Website with Hosting (e.g., yourcompany.mrxp.com)", "Reputation marketing", "Built-in Lead Capture", "Instant messaging", "Click-to-Call", "Reviews", "Photo's & Videos", "Mobile-Optimized Design", "Mr. Experience Report - showcase your credentials and build trust", "Ideal for: Home service professionals seeking to enhance online presence", "Ideal for: Agencies seeking to enhance clients ad portfolio", "Ideal for: Businesses aiming to convert traffic into real leads"],
    isPopular: true,
    isGrowthPopular: false
  }, {
    title: "Growth",
    price: "$5,000",
    description: "For established pros ready to grow their business significantly.",
    leadsPerMonth: "Up to 24 Exclusive Leads per Month",
    serviceAreas: "2-3 service areas",
    teamSize: "Growing Business or Medium Team",
    features: ["Everything in Starter", "Exclusive leads", "Advanced lead management", "Extended service area coverage", "Team collaboration tools", "Campaign quality audits", "Performance tracking"],
    isPopular: false,
    isGrowthPopular: true
  }, {
    title: "Enterprise",
    price: "Custom",
    description: "Full-service solution for high-volume service businesses.",
    leadsPerMonth: "Custom amount of exclusive leads",
    serviceAreas: "Custom service areas",
    teamSize: "Established Business with Staffed Team",
    features: ["Everything in Growth", "Maximum lead volume", "Priority campaign optimization", "Custom reporting", "Dedicated account manager", "Strategic growth planning"],
    isPopular: false,
    isGrowthPopular: false
  }];
  return <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for the best. <span className="text-blue-900">Unlock the Power of Your Experience</span>
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => <PricingTier key={index} title={tier.title} price={tier.price} priceSubtext={tier.priceSubtext} description={tier.description} leadsPerMonth={tier.leadsPerMonth || ""} serviceAreas={tier.serviceAreas || ""} teamSize={tier.teamSize || ""} features={tier.features} isPopular={tier.isPopular || false} isGrowthPopular={tier.isGrowthPopular || false} />)}
        </div>

        <div className="text-center mb-20">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-[#2563eb] hover:bg-[#2563eb]/90 text-white px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="bg-transparent border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/10 px-8">
                View More Details
              </Button>
            </Link>
          </div>
        </div>
        
        <CommonFeatures />
        
      </div>
    </section>;
};
export default Pricing;
