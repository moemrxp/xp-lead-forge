
import React from "react";
import { Link } from "react-router-dom";
import { 
  MessageCircle, 
  PhoneCall, 
  Bell,
  Users,
  Star,
  Calendar,
  Edit
} from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full">
      <div className="bg-mrxp-primary/10 w-14 h-14 flex items-center justify-center rounded-lg mb-4">
        <Icon className="text-mrxp-primary w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Instant Messaging",
      description: "Connect with leads in real-time through a professional chat interface tailored for service businesses."
    },
    {
      icon: PhoneCall,
      title: "Click-to-Call",
      description: "Make it easy for potential clients to reach you directly with one-click calling from any device."
    },
    {
      icon: Edit,
      title: "Instant Quotes",
      description: "Send professional estimates quickly using customizable templates that match your branding."
    },
    {
      icon: Users,
      title: "Lead Management",
      description: "Track and manage your leads through a simple but powerful dashboard designed for busy pros."
    },
    {
      icon: Star,
      title: "Smart Advertising",
      description: "Run targeted local ads that generate exclusive leads only for your business, not shared with competitors."
    },
    {
      icon: Calendar,
      title: "Scheduling Tools",
      description: "Let clients book appointments that sync with your calendar and send automatic reminders."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need To <span className="text-mrxp-primary">Grow Your Business</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our all-in-one platform helps experienced home service professionals convert more leads and deliver exceptional customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
            />
          ))}
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
    </section>
  );
};

export default Features;
