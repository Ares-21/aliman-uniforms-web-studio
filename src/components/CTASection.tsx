import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding gradient-navy relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-primary-foreground mb-6 max-w-3xl mx-auto">
            Need Custom Uniforms for Your Team or Organization?
          </h2>
          <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto mb-10">
            Talk to Al Iman Uniforms for tailored solutions, bulk orders, and
            high-quality workwear.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:brightness-110 transition-all shadow-lg shadow-accent/25"
            >
              Request a Quote
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 text-sm font-semibold rounded-lg border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all"
            >
              Contact Us Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
