import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-tailoring.jpg";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Quality materials & premium fabrics",
  "Precision stitching & professional finishing",
  "Custom production for any industry",
  "Durable, practical clothing solutions",
  "Bulk order capabilities",
  "Serving institutions, companies & schools",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Expert tailoring craftsmanship"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-accent/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl border-2 border-accent/20 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="accent-line mb-6" />
            <h2 className="section-heading mb-6">
              About <span className="text-accent">Al Iman Uniforms</span>
            </h2>
            <p className="section-subheading mb-8">
              Al Iman Uniforms is a trusted tailoring and uniform provider,
              specializing in delivering quality craftsmanship, durable materials,
              and tailored uniform solutions. We serve institutions, companies,
              industrial teams, schools, and specialized safety sectors with
              precision and care.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-navy-light transition-colors duration-200"
            >
              Our Services →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
