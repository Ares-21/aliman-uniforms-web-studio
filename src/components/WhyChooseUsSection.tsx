import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Ruler, Shield, Sparkles, Truck, Factory } from "lucide-react";

const reasons = [
  { icon: Award, title: "Quality Workmanship", desc: "Meticulous attention to detail in every stitch and seam." },
  { icon: Ruler, title: "Custom Tailoring", desc: "Bespoke solutions tailored to your exact specifications." },
  { icon: Shield, title: "Durable Materials", desc: "Premium fabrics that withstand demanding work conditions." },
  { icon: Sparkles, title: "Professional Finishing", desc: "Polished results that elevate your team's appearance." },
  { icon: Factory, title: "Reliable Bulk Production", desc: "Efficient large-scale manufacturing with consistent quality." },
  { icon: Truck, title: "Industry Expertise", desc: "Deep knowledge across diverse sectors and uniform requirements." },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="accent-line mb-6" />
            <h2 className="section-heading mb-4">
              Why Choose <span className="text-accent">Al Iman?</span>
            </h2>
            <p className="section-subheading mb-0">
              We combine industry expertise with precision craftsmanship to deliver
              uniforms that meet the highest standards of quality, durability, and
              professional appearance.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-secondary/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <r.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-foreground mb-1">{r.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
