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
  buttonText = "Get Started"
}) => {
  return <div className={`bg-white rounded-xl shadow-md border ${isPopular ? 'border-mrxp-primary' : 'border-gray-100'} relative`}>
      {isPopular && <div className="absolute top-0 right-0 bg-mrxp-accent text-white px-4 rounded-tr-xl rounded-bl-xl text-sm font-semibold py-[3px]">
          Most Popular
        </div>}
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-bold mb-2 px-0 mx-0 py-[7px]">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500">/mo</span>
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
const CommonFeatures = () => <div className="mt-16 bg-gray-50 p-8 rounded-xl">
    <h3 className="text-2xl font-bold mb-6 text-center">What You Get With Every Plan</h3>
    <p className="text-gray-600 mb-8 text-center">
      All plans include full access to tools, support, and marketing features.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {["Branded MrXP Business Website", "The Mr. Experience Report", "Lead Dashboard", "Chat Box / Instant Messaging", "Click-to-Call / Call Tracking", "Priority Support", "100% Customized Strategy", "Performance-Based Ad Spend Allocation", "Month-to-Month Commitment", "30-Day Cancellation Notice", "Campaigns Launch in 3–5 Days", "Profile Must Be Completed to Launch"].map((feature, idx) => <div key={idx} className="flex items-start">
          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{feature}</span>
        </div>)}
    </div>
    <p className="mt-8 text-sm text-gray-600 text-center">
      Each package includes everything you need to create a professional online presence and manage leads effectively.
    </p>
  </div>;
const Pricing = () => {
  const pricingTiers = [{
    title: "MrXP Website-Only Plan",
    price: "$697",
    description: "Website & Technology",
    features: ["Build Value, Win Jobs, Maximize Profits.", "Custom Website with Hosting (e.g., yourcompany.mrxp.com)", "Built-in Lead Capture", "Instant messaging", "Click-to-Call", "Reviews", "Photo's & Videos", "Mobile-Optimized Design", "Mr. Experience Report - showcase your credentials and build trust", "Ideal for: Home service professionals seeking a robust online presence", "Ideal for: Agencies managing multiple client profiles", "Ideal for: Businesses aiming to convert traffic into tangible leads"],
    isPopular: true
  }, {
    title: "Growth",
    price: "$5,000",
    description: "For established pros ready to grow their business significantly.",
    leadsPerMonth: "Up to 24 Exclusive Leads per Month",
    serviceAreas: "2-3 service areas",
    teamSize: "Growing Business or Medium Team",
    features: ["Everything in Starter", "Advanced lead management", "Extended service area coverage", "Team collaboration tools", "Campaign quality audits", "Performance tracking"],
    isPopular: false
  }, {
    title: "Enterprise",
    price: "$10,000",
    description: "Full-service solution for high-volume service businesses.",
    leadsPerMonth: "Up to 50 Exclusive Leads per Month",
    serviceAreas: "3-4 service areas",
    teamSize: "Established Business with Staffed Team",
    features: ["Everything in Growth", "Maximum lead volume", "Priority campaign optimization", "Custom reporting", "Dedicated account manager", "Strategic growth planning"]
  }];
  return <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for the best. <span className="text-blue-900">Unlock the Power of Your Experience</span>
          </h2>
          <p className="text-xl text-gray-600">
            Establish your online presence. Grow your business with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => <PricingTier key={index} title={tier.title} price={tier.price} description={tier.description} leadsPerMonth={tier.leadsPerMonth || ""} serviceAreas={tier.serviceAreas || ""} teamSize={tier.teamSize || ""} features={tier.features} isPopular={tier.isPopular || false} />)}
        </div>

        <div className="text-center mb-20">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-[#2563eb] hover:bg-[#2563eb]/90 text-white px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/10 px-8">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
        
        <CommonFeatures />

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a custom plan for your business?</h3>
          <p className="text-gray-600 mb-6">Let's build a custom plan around your business goals.</p>
          <Link to="/contact">
            <Button variant="outline" className="bg-sky-400 hover:bg-sky-300">
              Request Custom Plan
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default Pricing;