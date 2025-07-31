import { Button } from "@/components/ui/button";

const ProgramSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12 text-white">
      <div className="bg-card rounded-lg p-8">
        
        <div className="space-y-8">
          {/* Phase 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">**Phase 1: 90 Days 1-1 Mentorship**</h3>
            <p className="text-muted-foreground text-lg">
              **So as soon as you sign up with me**,
            </p>
            <p className="text-muted-foreground text-lg">
              **I will mentor you and transfer to you all of the skills that I have accumulated over the years**,
            </p>
            
            <div className="ml-4 space-y-3">
              <p className="text-muted-foreground text-lg">
                **In this duration, we will have 1-1 training, where you and I will learn and grow together**,
              </p>
              
              <p className="text-muted-foreground text-lg">
                **Then we also have classroom training where I will talk about product and business-related stuff in a classroom with several other people**,
              </p>
              
              <p className="text-muted-foreground text-lg">
                **We will also have online recorded trainings which you can refer back to any time and brush up on your skills**.
              </p>
              
              <p className="text-muted-foreground text-lg">
                **This way you will learn the fundamentals of how to become an insurance agent**,
              </p>
              
              <p className="text-muted-foreground text-lg">
                **And over the 90 days, you will become an expert too**.
              </p>
            </div>

            <h4 className="text-xl font-bold text-white">**Here's how it works -**</h4>
            
            <p className="text-muted-foreground text-lg">
              **You target your clientele, take them to a landing page where they will have to sign an application and within 15 minutes they are qualified, the policy is issued and commissions are paid without you meeting them**
            </p>
            
            <p className="text-muted-foreground text-lg">
              **And we combine with the traditional model while you learn social media side-by-side**
            </p>
          </div>

          {/* Phase 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">**Phase 2 : Consultation Model**</h3>
            <p className="text-muted-foreground text-lg">
              **After 90 days you and I will switch to a consulting model**,
            </p>
            <p className="text-muted-foreground text-lg">
              **Meaning now we won't hop on calls and trainings daily**,
            </p>
            <p className="text-muted-foreground text-lg">
              **But you will still have access to me**.
            </p>
            
            <div className="ml-4 space-y-3">
              <p className="text-muted-foreground text-lg">
                **And the best part is that we will provide you with our in-house leads**,
              </p>
              
              <p className="text-muted-foreground text-lg">
                **Because even after learning all of this getting online leads is not going to be an easy task**,
              </p>
              
              <p className="text-muted-foreground text-lg">
                **But you will get those leads only when you are certified and qualified enough for them**,
              </p>
              
              <p className="text-muted-foreground text-lg">
                **Depending on how much skills you have gained**,
              </p>
              
              <p className="text-muted-foreground text-lg">
                **How much work did you do, and how much knowledge did you absorb?**
              </p>
            </div>
          </div>

          {/* Commission Structure */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">
              **So you can sell those leads in a traditional way and at the same time you will keep learning how to build a Faceless Insurance Company**.
            </p>
            
            <p className="text-muted-foreground text-lg">
              **And don't worry for those leads you will be paid handsomely**,
            </p>
            
            <h4 className="text-xl font-bold text-white">**Here's the breakdown -**</h4>
            
            <div className="ml-4 space-y-3 text-muted-foreground text-lg">
              <p>
                **If you sell term insurance policies for at least $91/mo, then you will get $495 in an entry-level contract and with promotion (associate) you will be paid $935**.
              </p>
              
              <p>
                **Similarly, if you can get people to reallocate funds from 401k/403b TSPS into Infinite Bank (IUL) (at $500/mo)**
              </p>
              
              <p>
                **Then you get $2.7k in entry-level and as a broker for $5.1k**
              </p>
              
              <p>
                **And if you sell a rollover plan (upto $250k), then you would make 7800 as a broker and 14000 as a representative**.
              </p>
              
              <p className="font-bold text-white">
                **These are way higher numbers than your average agency would give**.
              </p>
              
              <p>
                **And remember along with that we will keep helping you to start an agency and compete with the likes of State Farm, Edward Jones, Farmers Insurance, Allstate etc**.
              </p>
              
              <p>
                **Most agencies won't do that because of things like payroll, training, and admin fees but we take care of everything for you**
              </p>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">
              **And your trainees which we train will further train others and you will be compensated because you run the brokerage**.
            </p>
            
            <p className="text-muted-foreground text-lg">
              **We don't get paid for recruiting but only for account openings**.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Button variant="cta-large" className="mb-6">
              Yes! I Want to Join Today.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
