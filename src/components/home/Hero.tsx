import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mrxp-dark leading-tight">
              Grow Your Business With <span className="text-blue-900">Exclusive Leads</span>
            </h1>
            <p className="text-xl md:text-2xl text-mrxp-dark/80 max-w-xl mx-auto lg:mx-0">Professional technology to help experienced service pros generate quality leads, improve communication, and maximize every opportunity.</p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link to="/signup">
                <Button className="w-full sm:w-auto text-lg px-8 py-6 text-white bg-blue-700 hover:bg-blue-600">
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
                    <div className="text-lg font-semibold">universalroofing.mrxp.com</div>
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
                      <span className="font-medium">Response Time</span>
                      <span className="text-green-600 font-bold">2 min avg</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium">Conversion Rate</span>
                      <span className="text-mrxp-accent font-bold">42%</span>
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
                        <Button size="sm" className="bg-blue-700 hover:bg-blue-600">
                          Respond
                        </Button>
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