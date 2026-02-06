import { Shield, Award, Users, Clock } from "lucide-react";
import CTASection from "@/components/CTASection";

const stats = [
  { icon: Clock, value: "+10", label: "سنوات خبرة" },
  { icon: Users, value: "+5,000", label: "عميل راضٍ" },
  { icon: Award, value: "+15,000", label: "رحلة ناجحة" },
  { icon: Shield, value: "100%", label: "سلامة" },
];

const About = () => {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-2">تعرف علينا</p>
            <h1 className="text-3xl md:text-5xl font-black">من نحن</h1>
          </div>

          <div className="glass-card rounded-xl p-8 md:p-12 space-y-6 mb-12">
            <h2 className="text-2xl font-bold gold-text">فرسان الطريق — Les Chevaliers de Route</h2>
            <p className="text-muted-foreground leading-relaxed">
              تأسست شركة فرسان الطريق بهدف تقديم خدمة نقل احترافية وموثوقة في الجزائر. منذ أكثر من 10 سنوات ونحن نخدم عملاءنا بأعلى معايير الجودة والأمان.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              نمتلك أسطولاً حديثاً من السيارات المجهزة بالكامل، ونوظف سائقين محترفين مدربين على أعلى مستوى. هدفنا هو جعل كل رحلة تجربة مميزة وآمنة.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              نقدم خدماتنا على مدار الساعة، 7 أيام في الأسبوع، لنكون دائماً بجانبكم أينما كنتم وأينما أردتم الذهاب.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-6 text-center gold-border-glow">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-black text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
};

export default About;
