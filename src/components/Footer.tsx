import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gold-text mb-3">فرسان الطريق</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Les Chevaliers de Route — شريكك الموثوق في النقل والتنقل. خدمة احترافية على مدار الساعة.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-3">روابط سريعة</h4>
            <div className="space-y-2">
              {[
                { label: "خدماتنا", href: "/services" },
                { label: "الأسعار", href: "/pricing" },
                { label: "من نحن", href: "/about" },
                { label: "اتصل بنا", href: "/contact" },
                { label: "احجز رحلتك", href: "/booking" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-3">تواصل معنا</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+213000000000" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +213 000 000 000
              </a>
              <a href="mailto:contact@chevaliers-route.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                contact@chevaliers-route.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                الجزائر العاصمة، الجزائر
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} فرسان الطريق — Les Chevaliers de Route. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
