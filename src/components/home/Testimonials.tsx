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
  return <div className="bg-white p-6 lg:p-8 rounded-xl shadow-md border border-gray-100">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>;
};
const Testimonials = () => {
  const testimonials = [{
    quote: "Since using mrxp, my lead quality has gone up dramatically while my advertising costs have dropped. The instant messaging feature has helped me close deals that would have gone to competitors.",
    name: "Michael Johnson",
    title: "Electrician, Johnson Electric",
    rating: 5
  }, {
    quote: "The ability to send quick, professional quotes through the platform has been a game changer. Clients consistently tell me how impressed they are with my responsiveness.",
    name: "Sarah Williams",
    title: "Interior Designer, Williams Design",
    rating: 5
  }, {
    quote: "As a plumber who's always on the go, having all my leads and communication in one place has made my business much more efficient. I'm booking more jobs with less stress.",
    name: "David Rodriguez",
    title: "Master Plumber, Rodriguez Plumbing",
    rating: 5
  }];
  return;
};
export default Testimonials;