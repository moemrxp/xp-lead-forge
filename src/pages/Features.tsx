import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MessageCircle, PhoneCall, Bell, Users, Star, Calendar, Edit, Search, Settings, Link } from "lucide-react";
const FeatureSection = ({
  title,
  description,
  icon: Icon,
  features,
  imagePosition = "right"
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  imagePosition?: "left" | "right";
}) => {
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
            <div className="bg-gray-100 rounded-xl p-4 aspect-video flex items-center justify-center">
              <div className="text-center text-gray-400">Feature Preview Image</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const Features = () => {
  const featureSections = [{
    title: "Modern Communication Tools",
    description: "Connect with leads instantly through multiple channels, providing the quick responses today's customers expect.",
    icon: MessageCircle,
    features: ["Real-time chat with typing indicators and read receipts", "Click-to-call functionality that works on any device", "Automated response scheduling for off-hours", "Message templates for quick, consistent replies"],
    imagePosition: "right"
  }, {
    title: "Lead Generation & Management",
    description: "Generate exclusive leads that come directly to you, not shared with competitors in your area.",
    icon: Users,
    features: ["Targeted local advertising campaigns", "Lead scoring and qualification tools", "Comprehensive lead activity tracking", "Follow-up reminders and task automation"],
    imagePosition: "left"
  }, {
    title: "Professional Quote System",
    description: "Create and send professional quotes in minutes that help you win more business.",
    icon: Edit,
    features: ["Customizable quote templates with your branding", "Digital signature collection", "Automated follow-ups for pending quotes", "Conversion tracking from quote to job"],
    imagePosition: "right"
  }, {
    title: "Your Professional Website",
    description: "Get a professional online presence without the headache of web design or expensive developers.",
    icon: Link,
    features: ["Mobile-optimized mini-website with your branding", "Custom domain name options", "Built-in SEO optimization", "Service showcase and portfolio gallery"],
    imagePosition: "left"
  }, {
    title: "Business Tools & Analytics",
    description: "Make data-driven decisions with powerful but easy-to-understand analytics.",
    icon: Settings,
    features: ["Performance dashboard with key metrics", "Lead source attribution", "Conversion rate optimization", "ROI tracking for advertising spend"],
    imagePosition: "right"
  }];
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

        {featureSections.map((section, index) => <FeatureSection key={index} title={section.title} description={section.description} icon={section.icon} features={section.features} imagePosition={section.imagePosition as "left" | "right"} />)}
      </main>
      <Footer />
    </div>;
};
export default Features;