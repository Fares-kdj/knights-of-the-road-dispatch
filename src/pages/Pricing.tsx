import CTASection from "@/components/CTASection";

const routes = [
  { from: "وسط المدينة", to: "المطار", price: "2,500 د.ج" },
  { from: "وسط المدينة", to: "باب الزوار", price: "1,500 د.ج" },
  { from: "وسط المدينة", to: "الشراقة", price: "1,200 د.ج" },
  { from: "وسط المدينة", to: "بئر مراد رايس", price: "800 د.ج" },
  { from: "وسط المدينة", to: "دالي إبراهيم", price: "1,000 د.ج" },
  { from: "المطار", to: "بومرداس", price: "4,000 د.ج" },
  { from: "المطار", to: "البليدة", price: "5,000 د.ج" },
  { from: "المطار", to: "تيبازة", price: "6,500 د.ج" },
];

const Pricing = () => {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-2">شفافية تامة</p>
            <h1 className="text-3xl md:text-5xl font-black">أسعارنا</h1>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              أسعار واضحة وثابتة بدون مفاجآت. اتصل بنا للوجهات غير المدرجة.
            </p>
          </div>

          <div className="glass-card rounded-xl overflow-hidden max-w-2xl mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="gold-gradient text-primary-foreground">
                  <th className="py-3 px-4 text-right font-bold">من</th>
                  <th className="py-3 px-4 text-right font-bold">إلى</th>
                  <th className="py-3 px-4 text-right font-bold">السعر</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-secondary/50 transition-colors">
                    <td className="py-3 px-4 text-muted-foreground">{route.from}</td>
                    <td className="py-3 px-4 text-muted-foreground">{route.to}</td>
                    <td className="py-3 px-4 font-bold text-primary">{route.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            * الأسعار قابلة للتغيير. اتصل بنا للحصول على عرض سعر دقيق.
          </p>
        </div>
      </section>
      <CTASection />
    </main>
  );
};

export default Pricing;
