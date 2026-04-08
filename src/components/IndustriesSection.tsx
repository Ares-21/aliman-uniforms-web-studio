import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, GraduationCap, FlaskConical, HardHat, Trophy, ShieldCheck } from "lucide-react";

const industries = [
  { icon: Building2, label: "Corporate Offices" },
  { icon: GraduationCap, label: "Schools & Education" },
  { icon: FlaskConical, label: "Laboratories" },
  { icon: HardHat, label: "Industrial Worksites" },
  { icon: Trophy, label: "Sports Teams" },
  { icon: ShieldCheck, label: "Safety & Technical" },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding gradient-navy" ref={ref}>
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-primary-foreground mb-4">
            Industries <span className="text-accent">We Serve</span>
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-14">
            Trusted by organizations across diverse sectors for reliable uniform solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-primary-foreground/10 hover:border-accent/30 hover:bg-primary-foreground/5 transition-all duration-300"
            >
              <ind.icon className="w-8 h-8 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/80">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
