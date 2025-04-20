
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = ({ 
  icon: Icon, 
  title, 
  value 
}: { 
  icon: React.ElementType, 
  title: string, 
  value: string 
}) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="bg-mrxp-primary/10 p-2 rounded-full">
        <Icon className="h-5 w-5 text-mrxp-primary" />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will respond within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-mrxp-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Have questions about mrxp? Our team is here to help you get started and make the most of our platform.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" required placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" required placeholder="Tell us more about your needs..." className="min-h-[150px]" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-mrxp-primary hover:bg-mrxp-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <ContactInfo 
                    icon={Mail}
                    title="Email Us"
                    value="support@mrxp.pro"
                  />
                  <ContactInfo 
                    icon={Phone}
                    title="Call Us"
                    value="(888) 123-4567"
                  />
                  <ContactInfo 
                    icon={MessageCircle}
                    title="Live Chat"
                    value="Available Mon-Fri, 9am-6pm ET"
                  />
                  <ContactInfo 
                    icon={Clock}
                    title="Response Time"
                    value="Within 24 hours"
                  />
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold mb-2">Headquarters</h4>
                  <address className="not-italic text-gray-600">
                    123 Business Ave, Suite 100<br />
                    San Francisco, CA 94107<br />
                    United States
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
