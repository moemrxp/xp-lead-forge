
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone } from "lucide-react";

interface ScreenshotProps {
  imageUrl: string;
  title: string;
  description: string;
}

const MobileScreenshot = ({ imageUrl, title, description }: ScreenshotProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-60 mx-auto mb-4">
        {/* Phone frame */}
        <div className="absolute inset-0 bg-gray-900 rounded-[36px] shadow-xl"></div>
        
        {/* Phone bezel */}
        <div className="absolute inset-[2px] bg-black rounded-[32px] overflow-hidden">
          {/* Screen content */}
          <div className="w-full h-full pt-6 pb-8 relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl"></div>
            
            {/* Screenshot */}
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <h4 className="font-bold text-lg mt-3">{title}</h4>
      <p className="text-sm text-gray-600 text-center max-w-xs mt-1">{description}</p>
    </div>
  );
};

const AppShowcase = () => {
  const isMobile = useIsMobile();
  
  const screenshots = [
    {
      imageUrl: "https://placehold.co/720x1280/e2e8f0/1e293b?text=Home+Page",
      title: "Custom Website",
      description: "Professional web presence with your branding and tailored service information",
    },
    {
      imageUrl: "https://placehold.co/720x1280/e2e8f0/1e293b?text=Dashboard",
      title: "Lead Dashboard",
      description: "Track and manage all your leads in one central location",
    },
    {
      imageUrl: "https://placehold.co/720x1280/e2e8f0/1e293b?text=Messaging",
      title: "Instant Messaging",
      description: "Communicate with potential customers instantly to close deals faster",
    },
    {
      imageUrl: "https://placehold.co/720x1280/e2e8f0/1e293b?text=Experience+Report",
      title: "Experience Report",
      description: "Showcase your credentials and build trust with potential customers",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <Smartphone className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See the MrXP App in Action
          </h2>
          <p className="text-xl text-gray-600">
            Discover how our platform helps home service professionals grow their business
          </p>
        </div>
        
        {isMobile ? (
          <Carousel className="mx-auto max-w-xs">
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index} className="px-1">
                  <MobileScreenshot
                    imageUrl={screenshot.imageUrl}
                    title={screenshot.title}
                    description={screenshot.description}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {screenshots.map((screenshot, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <MobileScreenshot
                    imageUrl={screenshot.imageUrl}
                    title={screenshot.title}
                    description={screenshot.description}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Get access to all these features and more with any MrXP plan
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
