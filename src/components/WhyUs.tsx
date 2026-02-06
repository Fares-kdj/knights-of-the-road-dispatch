import { Shield, Clock, Star, CreditCard } from "lucide-react";

const reasons = [
  { icon: Shield, title: "أمان تام", desc: "سائقون محترفون وسيارات مؤمّنة بالكامل." },
  { icon: Clock, title: "دقة المواعيد", desc: "نلتزم بالمواعيد المحددة دون تأخير." },
  { icon: Star, title: "خدمة ممتازة", desc: "راحة ونظافة وتعامل راقي في كل رحلة." },
  { icon: CreditCard, title: "أسعار منافسة", desc: "أسعار شفافة ومناسبة لجميع الميزانيات." },
];

const WhyUs = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">ما يميزنا</p>
          <h2 className="text-3xl md:text-4xl font-black">لماذا فرسان الطريق؟</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reasons.map((item) => (
            <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
