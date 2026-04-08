import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-heading font-bold mb-3">
              Al Iman <span className="text-accent">Uniforms</span>
            </h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Professional tailoring and uniform solutions for every industry. Quality,
              precision, and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold mb-4 text-accent">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {["About", "Services", "Why Us", "Process", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-heading font-semibold mb-4 text-accent">Services</h4>
            <div className="flex flex-col gap-2.5">
              {["Coveralls", "Lab Coats", "School Uniforms", "Sportswear", "Office Uniforms", "Fire-Retardant Suits"].map((s) => (
                <span key={s} className="text-sm text-primary-foreground/60">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-semibold mb-4 text-accent">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 text-accent/60" /> +971 50 842 1029
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4 text-accent/60" /> allmanuniform@gmail.com
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-accent/60" /> Dubai, UAE
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Al Iman Uniforms. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-primary-foreground/40 hover:text-accent transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
