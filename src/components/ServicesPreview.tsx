import { Link } from "react-router-dom";
import { Car, Plane, Building2, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "تاكسي المدينة",
    desc: "تنقل سريع وآمن داخل المدينة مع سائقين محترفين.",
  },
  {
    icon: Plane,
    title: "نقل المطار",
    desc: "خدمة استقبال وتوصيل من وإلى المطار بدقة مواعيد.",
  },
  {
    icon: Building2,
    title: "رحلات بين المدن",
    desc: "تنقل مريح بين المدن الجزائرية بسيارات حديثة.",
  },
  {
    icon: Users,
    title: "نقل المجموعات",
    desc: "سيارات واسعة لنقل المجموعات والعائلات.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">ماذا نقدم لك</p>
          <h2 className="text-3xl md:text-4xl font-black">خدماتنا</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card rounded-xl p-6 text-center group hover:gold-border-glow transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 gap-2">
              عرض جميع الخدمات
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
