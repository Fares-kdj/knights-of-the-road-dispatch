import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "تم الإرسال", description: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-2">نحن هنا لمساعدتك</p>
            <h1 className="text-3xl md:text-5xl font-black">اتصل بنا</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 space-y-5">
                <h3 className="font-bold text-lg">معلومات التواصل</h3>
                <a href="tel:+213000000000" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">هاتف</p>
                    <p className="font-medium text-foreground" dir="ltr">+213 000 000 000</p>
                  </div>
                </a>
                <a href="https://wa.me/213000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-whatsapp transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-whatsapp/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-whatsapp" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">واتساب</p>
                    <p className="font-medium text-foreground" dir="ltr">+213 000 000 000</p>
                  </div>
                </a>
                <a href="mailto:contact@chevaliers-route.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">بريد إلكتروني</p>
                    <p className="font-medium text-foreground">contact@chevaliers-route.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">العنوان</p>
                    <p className="font-medium text-foreground">الجزائر العاصمة، الجزائر</p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="glass-card rounded-xl overflow-hidden h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102239.60733092592!2d2.9912892!3d36.7525454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26977200347%3A0x4248de94e tried!5e0!3m2!1sar!2sdz!4v1700000000000!5m2!1sar!2sdz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقعنا"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="الاسم الكامل" required className="bg-secondary/50 border-border/50" />
                </div>
                <div>
                  <Input type="tel" placeholder="رقم الهاتف" required className="bg-secondary/50 border-border/50" dir="ltr" />
                </div>
                <div>
                  <Input type="email" placeholder="البريد الإلكتروني (اختياري)" className="bg-secondary/50 border-border/50" dir="ltr" />
                </div>
                <div>
                  <Textarea placeholder="رسالتك..." required rows={5} className="bg-secondary/50 border-border/50 resize-none" />
                </div>
                <Button type="submit" disabled={loading} className="w-full gold-gradient text-primary-foreground font-bold gap-2">
                  <Send className="w-4 h-4" />
                  {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
