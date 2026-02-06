import { useState } from "react";
import { Send, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "تاكسي المدينة",
  "نقل المطار",
  "رحلات بين المدن",
  "نقل المجموعات",
  "خدمة VIP",
  "نقل طبي",
];

const Booking = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "تم إرسال الطلب", description: "سنتواصل معك قريباً لتأكيد الحجز. شكراً لثقتك!" });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto max-w-xl">
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black">احجز رحلتك</h1>
            <p className="text-muted-foreground mt-3">
              املأ النموذج التالي وسنتواصل معك لتأكيد الحجز.
            </p>
          </div>

          <div className="glass-card gold-border-glow rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">الاسم الكامل *</label>
                <Input placeholder="أدخل اسمك" required className="bg-secondary/50 border-border/50" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">رقم الهاتف *</label>
                <Input type="tel" placeholder="+213 XXX XXX XXX" required className="bg-secondary/50 border-border/50" dir="ltr" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">الخدمة المطلوبة *</label>
                <Select required>
                  <SelectTrigger className="bg-secondary/50 border-border/50">
                    <SelectValue placeholder="اختر الخدمة" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">موقع الانطلاق *</label>
                <Input placeholder="من أين؟" required className="bg-secondary/50 border-border/50" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">الوجهة *</label>
                <Input placeholder="إلى أين؟" required className="bg-secondary/50 border-border/50" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">التاريخ *</label>
                  <Input type="date" required className="bg-secondary/50 border-border/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">الوقت *</label>
                  <Input type="time" required className="bg-secondary/50 border-border/50" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">ملاحظات</label>
                <Textarea placeholder="أي تفاصيل إضافية..." rows={3} className="bg-secondary/50 border-border/50 resize-none" />
              </div>
              <Button type="submit" disabled={loading} className="w-full gold-gradient text-primary-foreground font-bold gap-2 py-6 text-lg">
                <Send className="w-5 h-5" />
                {loading ? "جاري الإرسال..." : "إرسال الطلب"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
