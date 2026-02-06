import { Star } from "lucide-react";

const testimonials = [
  { name: "أحمد بن علي", text: "خدمة ممتازة! السائق كان محترف والسيارة نظيفة جداً. أنصح الجميع.", rating: 5 },
  { name: "سارة بوزيد", text: "استخدمت خدمة نقل المطار وكانوا في الموعد بالضبط. شكراً فرسان الطريق!", rating: 5 },
  { name: "محمد لعريبي", text: "أسعار معقولة وخدمة راقية. أفضل تاكسي في المنطقة بدون منازع.", rating: 4 },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">ماذا يقول عملاؤنا</p>
          <h2 className="text-3xl md:text-4xl font-black">آراء العملاء</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-xl p-6 space-y-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < t.rating ? "text-primary fill-primary" : "text-muted"}`} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
              <p className="font-bold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
