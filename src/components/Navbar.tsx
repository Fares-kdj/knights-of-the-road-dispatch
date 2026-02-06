import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/services" },
  { label: "الأسعار", href: "/pricing" },
  { label: "من نحن", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold gold-text">فرسان الطريق</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
            aria-label="تبديل الوضع"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <a href="tel:+213000000000">
            <Button size="sm" className="gold-gradient text-primary-foreground font-bold gap-2">
              <Phone className="w-4 h-4" />
              اتصل الآن
            </Button>
          </a>
          <Link to="/booking">
            <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              احجز رحلتك
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
            aria-label="تبديل الوضع"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-card border-t border-border/50 px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <a href="tel:+213000000000" className="flex-1">
              <Button size="sm" className="w-full gold-gradient text-primary-foreground font-bold gap-2">
                <Phone className="w-4 h-4" />
                اتصل
              </Button>
            </a>
            <Link to="/booking" className="flex-1" onClick={() => setOpen(false)}>
              <Button size="sm" variant="outline" className="w-full border-primary/50 text-primary">
                احجز
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
