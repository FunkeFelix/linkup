import { Button } from "@/components/ui/button";
import { Download, Smartphone, Users, Zap } from "lucide-react";
import heroMockup from "@/assets/app-hero-mockup.jpg";

const Hero = () => {
  return (
    <section className="hero-section section-padding overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">LinkUp</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Dein Event. Deine Connections.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Connect with people at events via QR code login. See who's coming, 
              reconnect up to 24h later, and start chatting instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="cta-button flex items-center gap-2">
                <Download className="w-5 h-5" />
                App Store
              </Button>
              <Button className="cta-button flex items-center gap-2">
                <Download className="w-5 h-5" />
                Google Play
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">10k+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24h</div>
                <div className="text-sm text-muted-foreground">Connect Time</div>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroMockup} 
                alt="LinkUp App Interface"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-float delay-1000">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center animate-float delay-2000">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float delay-500">
              <Zap className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;