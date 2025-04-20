
import React from "react";
import { Star } from "lucide-react";

const Testimonial = ({ 
  quote, 
  name, 
  title, 
  rating = 5 
}: { 
  quote: string; 
  name: string; 
  title: string; 
  rating?: number;
}) => {
  return (
    <div className="bg-white p-6 lg:p-8 rounded-xl shadow-md border border-gray-100">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Since using mrxp, my lead quality has gone up dramatically while my advertising costs have dropped. The instant messaging feature has helped me close deals that would have gone to competitors.",
      name: "Michael Johnson",
      title: "Electrician, Johnson Electric",
      rating: 5
    },
    {
      quote: "The ability to send quick, professional quotes through the platform has been a game changer. Clients consistently tell me how impressed they are with my responsiveness.",
      name: "Sarah Williams",
      title: "Interior Designer, Williams Design",
      rating: 5
    },
    {
      quote: "As a plumber who's always on the go, having all my leads and communication in one place has made my business much more efficient. I'm booking more jobs with less stress.",
      name: "David Rodriguez",
      title: "Master Plumber, Rodriguez Plumbing",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-mrxp-primary">Home Service Pros</span> Like You
          </h2>
          <p className="text-xl text-gray-600">
            Hear from experienced professionals who've transformed their businesses with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index} 
              quote={testimonial.quote} 
              name={testimonial.name} 
              title={testimonial.title} 
              rating={testimonial.rating} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
