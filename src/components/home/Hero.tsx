
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Hero = () => {
  return <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mrxp-dark leading-tight">
              Win More Jobs With <span className="text-blue-900">Reputation Marketing</span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-mrxp-dark/80 max-w-xl mx-auto lg:mx-0 font-medium">
                High-Converting Website. Verified Experience. Exclusive Leads That Trust You.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Separator className="w-24 h-1 bg-mrxp-accent" />
              </div>
              
              <p className="text-lg md:text-xl text-mrxp-dark/70 max-w-xl mx-auto lg:mx-0">
                MrXP helps contractors turn their experience and reputation into a powerful marketing tool. We give you a high-converting website, exclusive leads, and the trust signals you need to close more jobs — without chasing or competing.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link to="/signup">
                <Button className="w-full sm:w-auto text-lg px-8 py-6 bg-mrxp-primary text-white hover:bg-mrxp-primary/90">
                  Get Started
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-mrxp-primary text-mrxp-primary hover:bg-mrxp-primary/10">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-72 h-72 bg-mrxp-accent/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-500">Your Website</div>
                    <div className="text-lg font-semibold">yourcompany.mrxp.com</div>
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    LIVE
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium">New Leads This Week</span>
                      <span className="text-mrxp-primary font-bold">10</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium">Instant Messages </span>
                      <span className="text-green-600 font-bold">6</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium">Calls</span>
                      <span className="text-mrxp-accent font-bold">12

                    </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 border-t pt-4">
                  <div className="text-sm text-gray-500 mb-2">Latest Lead</div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center text-gray-500">
                      JD
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">John Doe</div>
                      <div className="text-sm text-gray-500">Roof replacement, budget $15-20k</div>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" className="bg-mrxp-primary hover:bg-mrxp-primary/90 mx-0 my-0 py-0 px-[20px]">Call Now</Button>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
