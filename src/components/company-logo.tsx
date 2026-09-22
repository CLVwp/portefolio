import Image from "next/image";

interface CompanyLogoProps {
  /** Company identifier */
  company: "accenture" | "cea" | "microsoft" | "jeece" | "ece" | "ruse";
  className?: string;
}

/** Real intrinsic dimensions from the files, so next/image knows the true aspect ratio. */
const LOGOS = {
  accenture: {
    src: "/logos/accenture.svg",
    alt: "Accenture",
    width: 163,
    height: 43,
    h: "h-8",
  },
  cea: {
    src: "/logos/cea.svg",
    alt: "CEA",
    width: 200,
    height: 200,
    h: "h-10",
  },
  microsoft: {
    src: "/logos/microsoft.svg",
    alt: "Microsoft",
    width: 23,
    height: 23,
    h: "h-10",
  },
  jeece: {
    src: "/logos/jeece.png",
    alt: "JEECE",
    width: 2503,
    height: 2306,
    h: "h-10",
  },
  ece: {
    src: "/logos/ece.png",
    alt: "ECE Paris",
    width: 1580,
    height: 518,
    h: "h-10",
  },
  ruse: {
    src: "/logos/ruse.png",
    alt: "University of Ruse",
    width: 1280,
    height: 1426,
    h: "h-10",
  },
} as const;

/**
 * Official brand logos served from /public/logos. Rendered with next/image
 * at a fixed display height for consistent card layout.
 */
export function CompanyLogo({ company, className }: CompanyLogoProps) {
  const logo = LOGOS[company];

  return (
    <Image
      alt={logo.alt}
      className={`${logo.h} w-auto object-contain ${className ?? ""}`}
      height={logo.height}
      src={logo.src}
      width={logo.width}
    />
  );
}
