import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="فرسان الطريق" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center space-y-8 pt-20">
        <div className="animate-fade-in-up">
          <p className="text-primary font-medium text-lg mb-2">Les Chevaliers de Route</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="gold-text">فرسان الطريق</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            خدمة نقل وتاكسي فاخرة وموثوقة. نوصلك بأمان وراحة في أي وقت وأي مكان.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Link to="/booking">
            <Button size="lg" className="gold-gradient text-primary-foreground font-bold text-lg px-8 py-6 gap-2 animate-pulse-gold">
              احجز رحلتك الآن
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <a href="tel:+213000000000">
            <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6 gap-2">
              <Phone className="w-5 h-5" />
              اتصل بنا
            </Button>
          </a>
          <a href="https://wa.me/213000000000" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-whatsapp/50 text-whatsapp hover:bg-whatsapp/10 text-lg px-8 py-6 gap-2">
              <MessageCircle className="w-5 h-5" />
              واتساب
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "+10", label: "سنوات خبرة" },
            { value: "+5000", label: "رحلة ناجحة" },
            { value: "24/7", label: "خدمة متواصلة" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
