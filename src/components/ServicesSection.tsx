import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Scissors,
  HardHat,
  Stethoscope,
  GraduationCap,
  Trophy,
  Briefcase,
  Anchor,
  Flame,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Tailoring for All Materials",
    desc: "Custom stitching and garment production across a wide range of fabrics and material types.",
  },
  {
    icon: HardHat,
    title: "Coveralls",
    desc: "Durable workwear designed for industrial, mechanical, and field environments.",
  },
  {
    icon: Stethoscope,
    title: "Lab Coats",
    desc: "Professional lab coats tailored for medical, laboratory, and technical use.",
  },
  {
    icon: GraduationCap,
    title: "School Uniforms",
    desc: "Comfortable, neat, and durable uniforms for schools and educational institutions.",
  },
  {
    icon: Trophy,
    title: "Sportswear",
    desc: "Functional and stylish sports uniforms designed for comfort, movement, and performance.",
  },
  {
    icon: Briefcase,
    title: "Office Uniforms",
    desc: "Smart and professional uniforms that enhance brand image and workplace identity.",
  },
  {
    icon: Anchor,
    title: "Rope Protectors",
    desc: "Specialized textile protection solutions designed for heavy-duty and industrial applications.",
  },
  {
    icon: Flame,
    title: "Fire / Flame-Retardant Suits",
    desc: "Protective workwear designed for hazardous environments requiring flame-resistant safety clothing.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-6" />
          <h2 className="section-heading mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="section-subheading mx-auto">
            Comprehensive uniform and tailoring solutions for every industry and
            requirement.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 hover-lift group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
