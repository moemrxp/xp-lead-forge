
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MessageCircle, PhoneCall, Bell, Users, Star, Calendar, Edit, Search, Settings, Link } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const FeatureSection = ({
  title,
  description,
  icon: Icon,
  features,
  imagePosition = "right",
  imageSrc
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  imagePosition?: "left" | "right";
  imageSrc?: string;
}) => {
  const isMobile = useIsMobile();
  
  return <div className="py-16 border-b border-gray-200 last:border-0">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>
          <div className="space-y-6">
            <div className="bg-mrxp-primary/10 w-14 h-14 flex items-center justify-center rounded-lg">
              <Icon className="text-mrxp-primary w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-xl text-gray-600">{description}</p>
            
            <ul className="space-y-3 pt-4">
              {features.map((feature, idx) => <li key={idx} className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>)}
            </ul>
          </div>
          
          <div className={`${imagePosition === "left" ? "order-first lg:order-last" : ""}`}>
            {imageSrc ? (
              <AspectRatio ratio={isMobile ? 16 / 9 : 4 / 3} className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            ) : (
              <div className="bg-gray-100 rounded-xl p-4 aspect-video flex items-center justify-center">
                <div className="text-center text-gray-400">Feature Preview Image</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>;
};

const Features = () => {
  const featureSections = [
    {
      title: "Modern Communication Tools",
      description: "Connect with leads instantly through multiple channels, providing the quick responses today's customers expect.",
      icon: MessageCircle,
      features: ["Real-time chat with typing indicators and read receipts", "Click-to-call functionality that works on any device", "Automated response scheduling for off-hours", "Message templates for quick, consistent replies"],
      imagePosition: "right",
      imageSrc: "/lovable-uploads/61c20c59-7541-4b3e-910a-d372ba5f307f.png"
    }, 
    {
      title: "Lead Generation & Management",
      description: "Generate exclusive leads that come directly to you, not shared with competitors in your area.",
      icon: Users,
      features: ["Targeted local advertising campaigns", "Lead scoring and qualification tools", "Comprehensive lead activity tracking", "Follow-up reminders and task automation"],
      imagePosition: "left",
      imageSrc: "/lovable-uploads/ec7429b3-2739-4397-801a-a652e838e789.png"
    }, 
    {
      title: "Your Professional Website",
      description: "Get a professional online presence without the headache of web design or expensive developers.",
      icon: Link,
      features: ["Mobile-optimized mini-website with your branding", "Custom domain name options", "Built-in SEO optimization", "Service showcase and portfolio gallery"],
      imagePosition: "right",
      imageSrc: "/lovable-uploads/61989651-41ba-4083-a9af-bbd9b33681ee.png"
    }, 
    {
      title: "Business Tools & Analytics",
      description: "Make data-driven decisions with powerful but easy-to-understand analytics.",
      icon: Settings,
      features: ["Performance dashboard with key metrics", "Lead source attribution", "Conversion rate optimization", "ROI tracking for advertising spend"],
      imagePosition: "left"
    }
  ];
  
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-blue-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Features Built For Home Service Pros
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Our platform is designed specifically for experienced professionals in home services who want to grow their business with quality leads and modern technology.</p>
          </div>
        </section>

        {featureSections.map((section, index) => (
          <FeatureSection 
            key={index} 
            title={section.title} 
            description={section.description} 
            icon={section.icon} 
            features={section.features} 
            imagePosition={section.imagePosition as "left" | "right"}
            imageSrc={section.imageSrc}
          />
        ))}
      </main>
      <Footer />
    </div>;
};

export default Features;
