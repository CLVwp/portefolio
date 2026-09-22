import Image from "next/image";

interface CompanyLogoProps {
  /** Company identifier */
  company: "accenture" | "cea" | "microsoft" | "jeece" | "ece";
  className?: string;
}

/** Real intrinsic dimensions from the files, so next/image knows the true aspect ratio. */
const LOGOS = {
  accenture: { src: "/logos/accenture.svg", alt: "Accenture", width: 163, height: 43 },
  cea: { src: "/logos/cea.svg", alt: "CEA", width: 200, height: 200 },
  microsoft: { src: "/logos/microsoft.svg", alt: "Microsoft", width: 23, height: 23 },
  jeece: { src: "/logos/jeece.png", alt: "JEECE", width: 2503, height: 2306 },
  ece: { src: "/logos/ece.svg", alt: "ECE Paris", width: 240, height: 48 },
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
      className={className ?? "h-6 w-auto object-contain"}
      height={logo.height}
      src={logo.src}
      width={logo.width}
    />
  );
}
