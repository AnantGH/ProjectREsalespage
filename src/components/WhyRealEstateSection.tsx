import { Button } from "@/components/ui/button";

const WhyRealEstateSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 text-white">
      {/* Don't just take my word section */}
      <div className="bg-card rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Don't just take my word -</h2>
        
        <div className="text-center mb-8">
          <p className="text-muted-foreground mb-6">(Testimonials)</p>
          <Button variant="cta-large" className="mb-4">
            I Want Similar Results.
          </Button>
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
