"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CertificationCard from "./CertificationCard";
import { certificationsData } from "../../lib/siteData";

const CertificationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  if (certificationsData.length === 0) {
    return null;
  }

  return (
    <section id="certifications" ref={ref} className="py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Certifications & Trainings
        </h2>
        <p className="text-[#ADB7BE] max-w-2xl mx-auto">
          Professional certifications and trainings that showcase my commitment to continuous learning.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certificationsData.map((cert) => (
          <motion.div key={cert.id} variants={itemVariants}>
            <CertificationCard
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              src={cert.src}
              alt={cert.alt}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CertificationSection;
