
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "@/components/home/CTA";

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
  features: {
    included: boolean;
    text: string;
  }[];
  isPopular?: boolean;
  buttonText?: string;
}) => {
  return <div className={`bg-white rounded-xl shadow-md ${isPopular ? 'border-2 border-mrxp-primary' : 'border border-gray-200'} relative h-full`}>
      {isPopular && <div className="absolute top-0 right-0 bg-mrxp-accent text-white px-4 py-1 rounded-tr-xl rounded-bl-xl text-sm font-semibold">
          Most Popular
        </div>}
      <div className="p-6 lg:p-8 h-full flex flex-col">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-gray-500">/mo</span>
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>
        
        <div className="mt-auto">
          <Link to="/signup">
            <Button className={`w-full mb-6 ${isPopular ? 'bg-mrxp-accent hover:bg-mrxp-accent/90' : 'bg-mrxp-primary hover:bg-mrxp-primary/90'}`}>
              {buttonText}
            </Button>
          </Link>
          
          <ul className="space-y-3">
            {features.map((feature, idx) => <li key={idx} className="flex items-start">
                {feature.included ? <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> : <div className="h-5 w-5 mr-2 flex-shrink-0" />}
                <span className={`${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                  {feature.text}
                </span>
              </li>)}
          </ul>
        </div>
      </div>
    </div>;
};

const FAQ = ({
  question,
  answer
}: {
  question: string;
  answer: string;
}) => {
  return <div className="border-b border-gray-200 pb-4 mb-4 last:border-0">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>;
};

const Pricing = () => {
  const pricingTiers = [{
    title: "MrXP Website-Only Plan",
    price: "$699",
    description: "Website & Technology",
    features: [
      {
        included: true,
        text: "Build Value, Win Jobs, Maximize Profits."
      },
      {
        included: true,
        text: "Custom Website with Hosting (e.g., yourcompany.mrxp.com)"
      },
      {
        included: true,
        text: "Built-in Lead Capture"
      },
      {
        included: true,
        text: "Instant messaging"
      },
      {
        included: true,
        text: "Click-to-Call"
      },
      {
        included: true,
        text: "Reviews"
      },
      {
        included: true,
        text: "Photo's & Videos"
      },
      {
        included: true,
        text: "Mobile-Optimized Design"
      },
      {
        included: true,
        text: "Mr. Experience Report - showcase your credentials and build trust"
      },
      {
        included: true,
        text: "Ideal for: Home service professionals seeking a robust online presence"
      },
      {
        included: true,
        text: "Ideal for: Agencies managing multiple client profiles"
      },
      {
        included: true,
        text: "Ideal for: Businesses aiming to convert traffic into tangible leads"
      }
    ]
  }, {
    title: "Growth",
    price: "$5,000",
    description: "For established pros ready to grow their business significantly.",
    features: [
      {
        included: true,
        text: "Up to 24 Exclusive Leads per Month"
      },
      {
        included: true,
        text: "2-3 service areas"
      },
      {
        included: true,
        text: "Everything in Starter"
      },
      {
        included: true,
        text: "Advanced lead management"
      },
      {
        included: true,
        text: "Extended service area coverage"
      },
      {
        included: true,
        text: "Team collaboration tools"
      },
      {
        included: true,
        text: "Campaign quality audits"
      },
      {
        included: true,
        text: "Performance tracking"
      },
      {
        included: false,
        text: "Maximum lead volume"
      },
      {
        included: false,
        text: "Priority campaign optimization"
      },
      {
        included: false,
        text: "Custom reporting"
      },
      {
        included: false,
        text: "Strategic growth planning"
      }
    ],
    isPopular: true
  }, {
    title: "Enterprise",
    price: "$10,000",
    description: "Full-service solution for high-volume service businesses.",
    features: [
      {
        included: true,
        text: "Up to 50 Exclusive Leads per Month"
      },
      {
        included: true,
        text: "3-4 service areas"
      },
      {
        included: true,
        text: "Everything in Growth"
      },
      {
        included: true,
        text: "Maximum lead volume"
      },
      {
        included: true,
        text: "Priority campaign optimization"
      },
      {
        included: true,
        text: "Custom reporting"
      },
      {
        included: true,
        text: "Dedicated account manager"
      },
      {
        included: true,
        text: "Strategic growth planning"
      },
      {
        included: true,
        text: "Team collaboration tools"
      },
      {
        included: true,
        text: "Campaign quality audits"
      },
      {
        included: true,
        text: "Performance tracking"
      },
      {
        included: true,
        text: "Advanced lead management"
      }
    ]
  }];
  
  const faqs = [
    {
      question: "Do I need technical skills to use mrxp?",
      answer: "No technical skills required! Our platform is designed to be user-friendly for busy service professionals. We handle all the technical details so you can focus on your business."
    },
    {
      question: "How do the lead generation advertisements work?",
      answer: "We create and manage targeted local ad campaigns that direct potential customers to your mrxp mini-website. These leads are exclusive to you — not shared with other service providers in your area."
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes! With our Professional and Premium plans, you can connect your own custom domain or use a free subdomain on our platform (yourname.mrxp.pro)."
    },
    {
      question: "What happens after my free trial ends?",
      answer: "After your 14-day free trial, your account will automatically switch to the plan you selected. You can change or cancel your plan at any time through your account settings."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service. Simply contact our support team within 30 days of your first payment."
    }
  ];

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-[#2563eb]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Build Value, Win Jobs, Maximize Profitability.</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => <PricingTier key={index} title={tier.title} price={tier.price} description={tier.description} features={tier.features} isPopular={tier.isPopular} />)}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => <FAQ key={index} question={faq.question} answer={faq.answer} />)}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>;
};

export default Pricing;
