
import React from "react";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialCard = ({
  quote,
  company,
  url,
  rating = 5,
  hasLogo = false,
  logoUrl
}: {
  quote: string;
  company: string;
  url?: string;
  rating?: number;
  hasLogo?: boolean;
  logoUrl?: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {hasLogo && (
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center overflow-hidden">
              {logoUrl ? (
                <img 
                  src={logoUrl} 
                  alt={`${company} logo`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-sm font-semibold text-blue-700">
                  {company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </span>
              )}
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-900">{company}</p>
            {url && (
              <a 
                href={`https://${url}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-1"
              >
                {url}
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Highly Recommend you at least book a call to see for yourself. Everything about this just makes sense if you're a company that's value-driven and Homeowners Love it. They Love the pitch, the exclusive feel, and they love that they can message us before and after we show up. That confidence makes a huge difference.",
      company: "Future Remodeling",
      url: "futureremodeling.mrxp.com",
      hasLogo: true,
      logoUrl: "/lovable-uploads/453e79be-f930-4167-91be-de4877204986.png"
    },
    {
      quote: "This isn't Angi. This isn't Thumbtack. It's a totally different approach and honestly, and it's about damn time. If you're an agency and are serious about your clients standing out online, you need to book a call and see it for yourself.",
      company: "Kraken Ads",
      hasLogo: true
    },
    {
      quote: "MrXP really brought carfax to the home industry. The Experience Report helps us close more jobs and help maximize our profits. Shoutout to MoeMrXP for this one!",
      company: "Happy Home Improvement",
      url: "happyhomeimprovement.mrxp.com",
      hasLogo: true,
      logoUrl: "/lovable-uploads/dc0710f2-6e39-4c3f-9a99-7821c6e425b4.png"
    },
    {
      quote: "We've seen a 200% Increase in Jobs won. We cut ties with all the old lead companies. MrXP gives us full control over our advertising, and the leads are exclusive. No chasing, no competing, just good business. Moe MrXP is the man!!!",
      company: "Universal Roofing Solutions",
      url: "universalroofingsolutions.mrxp.com",
      hasLogo: true,
      logoUrl: "/lovable-uploads/d8df9207-de4b-49d1-b106-2b7ced7ec890.png"
    },
    {
      quote: "I met MoeMrXP at a trade show during their earliest days and its been an awesome journey seeing this come about, highly recommend you book a call and see what the hype is about!!",
      company: "Cabinet IQ",
      url: "cabinetiqofbridgewater.mrxp.com",
      hasLogo: true,
      logoUrl: "/lovable-uploads/5600021c-4143-48e4-ba03-a3d05658dbf0.png"
    },
    {
      quote: "We onboarded 5 of our clients onto MrXP with the Website & Tech Package and we run our own ads and The results have been consistent so far. With leads converting to jobs, less back-and-forth, and way better customer experience.",
      company: "NextLead Agency",
      hasLogo: true
    },
    {
      quote: "We've tried every platform, MrXP is just smarter. This does not replace your website, this ADDS to your online presence. We love it! Highly Recommended",
      company: "Pacific Air HVAC",
      url: "pacificairhvac.mrxp.com",
      hasLogo: true,
      logoUrl: "/lovable-uploads/ccae1ab6-eff8-4d35-866d-9cc7029fa5d4.png"
    },
    {
      quote: "The first thing we did was CRM blast our experience report to all our customers! Saw lots of engagement and feedback asking what it was, so far so good",
      company: "Jazz Construction Group",
      url: "jazzconstructiongroup.mrxp.com",
      hasLogo: true,
      logoUrl: "/lovable-uploads/3a7a0ea8-3314-4a37-9327-814533074434.png"
    },
    {
      quote: "As an agency owner, we're working with… not against MrXP. It fits perfectly into our workflow as Another True Lead Source that's plug-and-play. Pricing is fair for website hosting and tech, allowing us to still generate income on the ad spend.",
      company: "NJ Home Marketing",
      hasLogo: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Testimonials from <span className="text-blue-900">Real Professionals</span>
          </h2>
          <p className="text-xl text-gray-600">
            See how home service professionals and agencies are transforming their businesses with MrXP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              company={testimonial.company}
              url={testimonial.url}
              hasLogo={testimonial.hasLogo}
              logoUrl={testimonial.logoUrl}
            />
          ))}
        </div>

        <div className="text-center bg-white rounded-xl p-8 shadow-md border border-gray-100 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Want Results Like This?
          </h3>
          <p className="text-gray-600 mb-6">
            Join hundreds of successful home service professionals who've transformed their businesses with MrXP.
          </p>
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Book a Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
