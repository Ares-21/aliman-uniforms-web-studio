import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import galleryCoverall from "@/assets/gallery-coverall.jpg";
import galleryLabcoat from "@/assets/gallery-labcoat.jpg";
import gallerySchool from "@/assets/gallery-school.jpg";
import galleryOffice from "@/assets/gallery-office.jpg";
import galleryFiresuit from "@/assets/gallery-firesuit.jpg";
import gallerySportswear from "@/assets/gallery-sportswear.jpg";

const gallery = [
  { src: galleryCoverall, label: "Industrial Coveralls", span: "md:col-span-2 md:row-span-2" },
  { src: galleryLabcoat, label: "Lab Coats", span: "" },
  { src: gallerySchool, label: "School Uniforms", span: "" },
  { src: galleryOffice, label: "Office Uniforms", span: "md:col-span-2" },
  { src: galleryFiresuit, label: "Fire-Retardant Suits", span: "" },
  { src: gallerySportswear, label: "Sportswear", span: "" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-6" />
          <h2 className="section-heading mb-4">
            Our <span className="text-accent">Gallery</span>
          </h2>
          <p className="section-subheading mx-auto">
            A showcase of our craftsmanship across different uniform categories.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {gallery.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-heading font-semibold text-primary-foreground">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
