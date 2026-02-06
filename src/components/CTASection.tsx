import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="glass-card gold-border-glow rounded-2xl p-8 md:p-12 text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black">
            جاهز <span className="gold-text">للانطلاق؟</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            احجز رحلتك الآن أو تواصل معنا مباشرة. فريقنا جاهز لخدمتك على مدار الساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground font-bold px-8">
                احجز الآن
              </Button>
            </Link>
            <a href="tel:+213000000000">
              <Button size="lg" variant="outline" className="border-primary/50 text-primary gap-2">
                <Phone className="w-5 h-5" />
                اتصل بنا
              </Button>
            </a>
            <a href="https://wa.me/213000000000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-whatsapp/50 text-whatsapp gap-2">
                <MessageCircle className="w-5 h-5" />
                واتساب
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
