import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/971508421029?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-6" />
          <h2 className="section-heading mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="section-subheading mx-auto">
            Ready to discuss your uniform needs? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                maxLength={20}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
              />
              <textarea
                placeholder="Tell us about your uniform requirements..."
                required
                maxLength={1000}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
              />
              <button
                type="submit"
                className="px-8 py-3.5 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:brightness-110 transition-all shadow-lg shadow-accent/25"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Phone, label: "Phone", value: "+971 50 842 1029", href: "tel:+971508421029" },
              { icon: Mail, label: "Email", value: "allmanuniform@gmail.com", href: "mailto:allmanuniform@gmail.com" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/971508421029" },
              { icon: MapPin, label: "Location", value: "Dubai, UAE", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/60 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-foreground">{item.value}</div>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border h-48 bg-secondary flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-accent/40" />
                Map Location
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
