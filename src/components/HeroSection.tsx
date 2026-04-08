import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Al Iman Uniforms manufacturing facility"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full border border-accent/40 text-accent bg-accent/10">
              Premium Uniform Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-primary-foreground mb-6"
          >
            Professional Uniform Solutions{" "}
            <span className="text-accent">Tailored</span> for Every Industry in UAE & GCC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed mb-10"
          >
            From custom tailoring to industrial workwear, Al Iman Uniforms delivers
            quality craftsmanship, durable materials, and reliable uniform solutions
            for businesses, schools, and specialized sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3.5 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:brightness-110 transition-all duration-200 shadow-lg shadow-accent/25"
            >
              Get a Quote
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 text-sm font-semibold rounded-lg border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground/80 hover:text-accent transition-all duration-200"
            >
              View Services →
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 flex flex-wrap gap-10 border-t border-primary-foreground/10 pt-8"
          >
            {[
              { num: "15+", label: "Years Experience" },
              { num: "10+", label: "Uniform Categories" },
              { num: "100%", label: "Quality Assured" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-heading font-bold text-accent">
                  {stat.num}
                </div>
                <div className="text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
