import { Button } from "@/components/ui/button";

const QualificationSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 text-white">
      <div className="bg-card rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">**What's the catch?**</h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-muted-foreground text-lg">
            **There is really no catch you just have to put the work upfront**,
          </p>
        </div>

        <h3 className="text-xl font-bold text-white mb-6">You will get</h3>
        
        <div className="space-y-3 mb-8 text-muted-foreground">
          <div className="flex justify-between">
            <span>Franchise Opportunity</span>
            <span className="font-bold">$25,000</span>
          </div>
          <div className="flex justify-between">
            <span>A.I. Package</span>
            <span className="font-bold">$100,000</span>
          </div>
          <div className="flex justify-between">
            <span>Mentorship Program</span>
            <span className="font-bold">$10,000</span>
          </div>
          <div className="flex justify-between">
            <span>In-Person Training</span>
            <span className="font-bold">$5,000</span>
          </div>
          <div className="flex justify-between">
            <span>Telegram Group</span>
            <span className="font-bold">$250/mo</span>
          </div>
          <div className="flex justify-between">
            <span>Pre - Licensing</span>
            <span className="font-bold line-through">$300</span>
          </div>
          <div className="flex justify-between">
            <span>IUL Course</span>
            <span className="font-bold line-through">$250</span>
          </div>
          <div className="flex justify-between">
            <span>Weekly Online Training</span>
            <span className="font-bold">$6,000</span>
          </div>
          <div className="flex justify-between">
            <span>Contact with Product Providers</span>
            <span className="font-bold">$2,000</span>
          </div>
          <div className="flex justify-between">
            <span>Contractual Ownership</span>
            <span className="font-bold">$100,000</span>
          </div>
          
          <hr className="border-gray-600 my-4" />
          
          <div className="flex justify-between text-xl">
            <span className="font-bold text-white">TOTAL VALUE:</span>
            <span className="font-bold text-red-500 line-through">$248,800</span>
          </div>
          <div className="flex justify-between text-2xl">
            <span className="font-bold text-white">TODAYS VALUE:</span>
            <span className="font-bold text-green-500">$199</span>
          </div>
          <p className="text-center font-bold">Everything Included Above!!</p>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-muted-foreground text-lg">
            **As a franchise, we would charge a quarter millions for all of this stuff combined**,
          </p>
          
          <p className="text-muted-foreground text-lg">
            **But with us, it will be just 200 bucks**,
          </p>
          
          <p className="text-muted-foreground text-lg">
            **Along with the registration of your brokerages and licensing material**.
          </p>
          
          <p className="text-muted-foreground text-lg">
            **You literally don't have to do anything apart from just clicking the link below**.
          </p>
          
          <p className="text-muted-foreground text-lg">
            **There we will set a time for you and me to chat face-to-face**,
          </p>
          
          <p className="text-muted-foreground text-lg">
            **Then we will get you started on your journey to earning passive income with your Faceless Insurance Company**.
          </p>
        </div>

        <div className="text-center mb-8">
          <Button variant="cta-large" className="mb-6">
            I am Ready. Take me in.
          </Button>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6 text-center">Testimonials</h2>
        
        <div className="text-center mb-8">
          <Button variant="cta-large" className="mb-6">
            Yes! I Want Similar Results. Take Me in Already.
          </Button>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-6">FAQ's/ Recap</h3>
          
          <div className="mt-6">
            <Button variant="cta-large">
              Get Started for Just $200 Now.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationSection;
