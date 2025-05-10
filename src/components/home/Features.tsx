import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, PhoneCall, Bell, Users, Star, Calendar, Edit } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const FeatureShowcase = ({
  title,
  description,
  image,
  icon: Icon,
  imagePosition = "right"
}: {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  imagePosition?: "left" | "right";
}) => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="overflow-hidden border-0 bg-white shadow-md mb-6">
      <CardContent className="p-0">
        <div className={`grid grid-cols-1 ${isMobile ? "" : "md:grid-cols-2"} gap-6`}>
          <div className={`p-6 ${imagePosition === "right" || isMobile ? "order-1" : "order-2"}`}>
            <div className="bg-mrxp-primary/10 w-14 h-14 flex items-center justify-center rounded-lg mb-4">
              <Icon className="text-mrxp-primary w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className={`${imagePosition === "right" || isMobile ? "order-2" : "order-1"} ${isMobile ? "px-6 pb-6" : "p-0"}`}>
            <AspectRatio ratio={isMobile ? 16 / 9 : 4 / 3} className="bg-gray-50">
              <img 
                src={image} 
                alt={title} 
                className={`w-full h-full object-cover ${isMobile ? "" : "rounded-tr-lg rounded-br-lg"}`}
              />
            </AspectRatio>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full">
      <div className="bg-mrxp-primary/10 w-14 h-14 flex items-center justify-center rounded-lg mb-4">
        <Icon className="text-mrxp-primary w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};

const Features = () => {
  const featuredItems = [
    {
      icon: MessageCircle,
      title: "Modern Communication Tools",
      description: "Connect with leads instantly through our professional messaging interface. Respond quickly, track conversations, and never miss an opportunity with real-time notifications.",
      image: "/lovable-uploads/61c20c59-7541-4b3e-910a-d372ba5f307f.png",
      imagePosition: "right"
    },
    {
      icon: Users,
      title: "Lead Generation & Management",
      description: "Track your performance, manage leads, and get insights through an intuitive dashboard. See your conversion rates, response times, and lead quality at a glance.",
      image: "/lovable-uploads/ec7429b3-2739-4397-801a-a652e838e789.png",
      imagePosition: "left"
    },
    {
      icon: Star,
      title: "Your Professional Website",
      description: "Get a mobile-optimized website that showcases your experience, services, and makes it easy for customers to contact you through multiple channels.",
      image: "/lovable-uploads/61989651-41ba-4083-a9af-bbd9b33681ee.png",
      imagePosition: "right"
    }
  ];
  
  const features = [
    {
      icon: PhoneCall,
      title: "Click-to-Call",
      description: "Make it easy for potential clients to reach you directly with one-click calling from any device."
    },
    {
      icon: Calendar,
      title: "Scheduling Tools",
      description: "Let clients book appointments that sync with your calendar and send automatic reminders."
    },
    {
      icon: Edit,
      title: "Experience Reports",
      description: "Share verified summaries of your credentials, past projects, and expertise to build trust with potential clients."
    }
  ];
  
  const faqs = [{
    question: "What makes MrXP different from Angi, Home Advisor, & Thumbtack?",
    answer: "You get a high-converting website (not listing), exclusive leads (not shared), and technology built to close jobs — not chase them. With you in the driver seat of managing your own ads internally, or we can do that for you."
  }, {
    question: "Do I need a website to sign up?",
    answer: "Nope. MrXP is designed to help any service provider stand out — even if you don't have a website. Your MrXP profile acts like a mini-website and credibility hub — perfect for sharing with homeowners to build value."
  }, {
    question: "Can my employees use my MrXP account?",
    answer: "Yes. Your team can access your account, send reports, and communicate with leads under one profile."
  }, {
    question: "Can I accept payments on MrXP?",
    answer: "Not at this time. We focus on showcasing your experience and connecting you with quality leads — not handling transactions."
  }, {
    question: "What's the \"Mr. Experience Report\"?",
    answer: "It's a verified, shareable summary of your business background, credentials, past projects, and credibility — like a Carfax for your business. Share it with homeowners to build trust, separate yourself from the competition, and win more jobs at higher margins."
  }, {
    question: "How soon will my ad campaign start?",
    answer: "Campaigns go live in 3–5 business days after your profile is completed."
  }, {
    question: "Is this a contract?",
    answer: "Nope. MrXP is month-to-month. You can cancel any time with 30 days' notice."
  }, {
    question: "How does Instant Messaging work?",
    answer: "A homeowner will have the opportunity to safely message your business with questions or concerns about a job. As simple as instant messaging someone on any social media platform."
  }, {
    question: "How does the referral program work?",
    answer: "You refer 3 providers to advertise on mrxp at any plan you earn an additional $1000 in advertising credits."
  }];
  
  return <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need To <span className="text-blue-900">Grow Your Business</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our all-in-one platform helps experienced home service professionals convert more leads and deliver exceptional customer experiences.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {featuredItems.map((item, index) => (
            <FeatureShowcase 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              image={item.image}
              imagePosition={item.imagePosition as "left" | "right"}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <Link to="/features" className="text-mrxp-primary hover:text-mrxp-primary/80 font-medium text-lg inline-flex items-center">
            View all features
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>;
};

export default Features;
