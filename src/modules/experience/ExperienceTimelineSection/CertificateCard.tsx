"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { TCertificate } from "../data/experiences";

type Props = { certificate: TCertificate; index: number };

export const CertificateCard = (props: Props) => {
  const { certificate, index } = props;
  return (
    <motion.a
      href={certificate.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ scale: 1.02 }}
      className="group glass-card rounded-xl p-4 flex items-start gap-4"
    >
      <div
        className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border transition-transform group-hover:scale-110"
        style={{
          borderColor: "hsl(var(--accent-primary)/0.25)",
          background: "hsl(var(--background)/0.6)",
        }}
      >
        <Image
          src={certificate.logo}
          alt={certificate.title}
          fill
          sizes="44px"
          className="object-contain p-1"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-semibold leading-tight">{certificate.title}</h4>
          <ArrowUpRight
            size={14}
            className="shrink-0 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{certificate.detail}</p>
      </div>
    </motion.a>
  );
};
