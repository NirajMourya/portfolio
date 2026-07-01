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
    <section id="certifications" ref={ref} className="py-16 sm:py-20 lg:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Certifications & Trainings
        </h2>
        <p className="mx-auto max-w-2xl text-slate-300">
          Professional certifications and trainings that showcase my commitment to continuous learning.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {certificationsData.map((cert) => (
          <motion.div key={cert.id} variants={itemVariants} className="h-full">
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
