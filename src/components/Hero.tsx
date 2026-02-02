import { Clock, Star, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-hero py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
              Delicious Food,{" "}
              <span className="text-gradient">Delivered Fast</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-lg mx-auto md:mx-0">
              Order from your favorite restaurants and enjoy fresh, hot meals
              delivered right to your door in minutes.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">30 min or less</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Top Rated</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 gradient-warm opacity-20 blur-3xl rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
                alt="Delicious food spread"
                className="relative w-full h-auto rounded-2xl shadow-card-hover object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-3 animate-bounce-subtle">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <p className="text-xs text-muted-foreground">New Users</p>
                    <p className="text-sm font-bold text-primary">20% OFF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
