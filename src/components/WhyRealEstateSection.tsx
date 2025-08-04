import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const WhyRealEstateSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Austin, TX",
      profit: "$47,000",
      timeframe: "3 months",
      text: "I was completely new to real estate but James's system made it so clear. My first flip netted me $47,000 in just 3 months. The step-by-step guidance was invaluable!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      location: "Phoenix, AZ", 
      profit: "$73,500",
      timeframe: "4 months",
      text: "After struggling with my 9-5 for years, ProjectRE changed everything. I've now completed 6 flips and consistently make 80-100% profit on each deal. This program works!",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      location: "Denver, CO",
      profit: "$92,000",
      timeframe: "5 months", 
      text: "The funding strategies alone paid for the entire program. I learned how to flip houses with minimal upfront capital and made $92,000 on my second property.",
      rating: 5
    }
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 text-white">
      {/* Don't just take my word section */}
      <div className="bg-card rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Don't just take my word -</h2>
        
        <div className="mb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-secondary border-border p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-trust-badge font-bold">Profit: {testimonial.profit}</span>
                    <span className="text-muted-foreground">Time: {testimonial.timeframe}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center">
          <Button variant="cta-large" className="mb-4">
            I Want Similar Results.
          </Button>
          </div>
        </div>
      </div>

      {/* Why Real Estate section */}
      <div className="bg-card rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Why Real Estate is the best?</h2>
        
        <div className="space-y-4 text-muted-foreground text-lg">
          <p>
            And before I take you the fantastic program setup I have for you which can earn you money like the people above, there is another thing which I wanted to share -
          </p>
          
          <p>
            People ask me "Why Real Estate?"
          </p>
          
          <p className="font-bold text-white italic">
            "Real Estate is so old-school people earn money through Crypto, SMMA, Dropshipping, trading etc. nowadays"
          </p>
          
          <p className="font-bold text-white italic">
            "How does Real Estate stand apart from them?"
          </p>
          
          <p>
            Well, wherever you are now I want you to get up and go outside.
          </p>
          
          <p>
            Notice the world around if there is any building near you, then that is real estate.
          </p>
          
          <p>
            So you see every skyscraper or farmhouse is owned by someone,
          </p>
          
          <p className="font-bold text-white">
            This means as long as humanity is alive we will keep making buildings and that is why real estate is evergreen.
          </p>
          
          <p className="font-bold text-white">
            So there is literally no limit to how much money you can make in this industry.
          </p>
          
          <p>
            Also, this industry is the only one out of all the new-age business models which cannot be completely dominated by AI, because…
          </p>
          
          <p className="font-bold text-white">
            Ultimately real estate will only be owned by a human and not a machine.
          </p>
          
          <p>
            But the same cannot be said for other business models.
          </p>
          
          <p className="font-bold text-white">
            So here is how you can learn how you can make quick money from real estate -
          </p>
          
          <div className="space-y-2 ml-4">
            <p>1. Without reading multiple books on real estate.</p>
            <p>2. Without just consuming knowledge and not having the platform to apply it.</p>
            <p>3. Without placing your hard-earned life savings at stake.</p>
          </div>
          
          <p className="font-bold text-white">
            That is why I compiled and provided each one of these inside the ProjectRE, which will change your life forever -
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyRealEstateSection;
