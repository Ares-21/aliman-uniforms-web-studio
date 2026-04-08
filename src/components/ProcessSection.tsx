import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Consultation", desc: "Understanding your requirements and goals." },
  { num: "02", title: "Fabric Selection", desc: "Choosing the right materials for your needs." },
  { num: "03", title: "Design & Measurement", desc: "Precise measurements and design finalization." },
  { num: "04", title: "Production", desc: "Expert tailoring with quality-controlled processes." },
  { num: "05", title: "Quality Check", desc: "Rigorous inspection of every garment produced." },
  { num: "06", title: "Delivery", desc: "Timely delivery to your doorstep." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-6" />
          <h2 className="section-heading mb-4">
            Our <span className="text-accent">Process</span>
          </h2>
          <p className="section-subheading mx-auto">
            A streamlined workflow ensuring quality and precision at every stage.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-xl border border-border hover:border-accent/30 transition-colors group"
            >
              <span className="text-5xl font-heading font-bold text-accent/15 group-hover:text-accent/25 transition-colors absolute top-4 right-4">
                {step.num}
              </span>
              <div className="relative">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
