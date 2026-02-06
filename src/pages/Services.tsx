import { Car, Plane, Building2, Users, Briefcase, Heart } from "lucide-react";
import CTASection from "@/components/CTASection";

const services = [
  {
    icon: Car,
    title: "تاكسي المدينة",
    desc: "تنقل سريع وآمن داخل المدينة. سائقون يعرفون كل الطرق والاختصارات للوصول في أسرع وقت.",
    features: ["سيارات حديثة ومكيفة", "سائقون محترفون", "متوفر 24/7"],
  },
  {
    icon: Plane,
    title: "نقل المطار",
    desc: "خدمة استقبال وتوصيل من وإلى المطار. نتابع مواعيد الرحلات لضمان وصولك في الوقت المناسب.",
    features: ["تتبع الرحلات", "انتظار مجاني", "لافتة باسمك"],
  },
  {
    icon: Building2,
    title: "رحلات بين المدن",
    desc: "تنقل مريح وآمن بين المدن الجزائرية بسيارات حديثة وسائقين ذوي خبرة.",
    features: ["سيارات مريحة", "أسعار ثابتة", "حجز مسبق"],
  },
  {
    icon: Users,
    title: "نقل المجموعات",
    desc: "سيارات واسعة لنقل العائلات والمجموعات في مناسباتهم ورحلاتهم.",
    features: ["سيارات 7 مقاعد", "مساحة أمتعة كبيرة", "أسعار خاصة"],
  },
  {
    icon: Briefcase,
    title: "خدمة VIP",
    desc: "خدمة نقل فاخرة لرجال الأعمال والضيوف المميزين مع أعلى معايير الراحة.",
    features: ["سيارات فاخرة", "سرية تامة", "مشروبات مجانية"],
  },
  {
    icon: Heart,
    title: "نقل طبي",
    desc: "خدمة نقل المرضى ومرافقيهم إلى المستشفيات والعيادات بعناية خاصة.",
    features: ["سائقون مدربون", "مساعدة خاصة", "مواعيد مرنة"],
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-2">ماذا نقدم لك</p>
            <h1 className="text-3xl md:text-5xl font-black">خدماتنا</h1>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              نقدم مجموعة متنوعة من خدمات النقل لتلبية جميع احتياجاتك بأعلى مستوى من الجودة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card rounded-xl p-6 group hover:gold-border-glow transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-1">
                  {service.features.map((f) => (
                    <li key={f} className="text-xs text-primary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full gold-gradient" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
};

export default Services;
