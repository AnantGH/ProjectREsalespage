import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import videoThumbnail from "@/assets/video-thumbnail.jpg";

const VideoSection = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-16 animate-fade-in-up">
      {/* Main Headline */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Learn How You Can Start a **Faceless Insurance Company** Selling Insurance passively with **AI** to scale **upto 10k/mo**
        </h1>
        <p className="text-muted-foreground text-lg">
          Even if you don't know anything about Social Media, AI or selling online
        </p>
      </div>

      {/* Video Player */}
      <div className="relative bg-card rounded-lg overflow-hidden shadow-video mb-8">
        <div className="relative aspect-video">
          <img 
            src={videoThumbnail} 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="rounded-full w-20 h-20 p-0"
            >
              <Play className="w-8 h-8 fill-current" />
            </Button>
          </div>
          <div className="absolute top-4 left-4 bg-header-attention text-white px-3 py-1 rounded-full text-sm font-bold">
            🔊 CLICK TO TURN ON SOUND
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Button variant="cta-large" className="mb-4">
          Yes! I Want to Join Today.
        </Button>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          🔒 Backed by Our <span className="text-trust-badge font-bold">100% Money Back Guarantee</span>
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
