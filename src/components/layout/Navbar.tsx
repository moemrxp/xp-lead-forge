import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/lovable-uploads/0f79698b-2dc7-436b-8d02-ba068661b6b6.png" alt="mrxp logo" className="h-16" />
          <span className="text-sm text-gray-600 hidden md:inline">
            Mr. Experience
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          
          
          
          
          <div className="flex items-center space-x-2">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-mrxp-accent hover:bg-mrxp-accent/90">Sign Up</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-md py-4 px-6 animate-fade-down">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/0f79698b-2dc7-436b-8d02-ba068661b6b6.png" alt="mrxp logo" className="h-12" />
              <span className="text-sm text-gray-600">
                Mr. Experience
              </span>
            </div>
            <Link to="/" className="text-mrxp-dark hover:text-mrxp-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/features" className="text-mrxp-dark hover:text-mrxp-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link to="/pricing" className="text-mrxp-dark hover:text-mrxp-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link to="/contact" className="text-mrxp-dark hover:text-mrxp-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-mrxp-accent hover:bg-mrxp-accent/90">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;