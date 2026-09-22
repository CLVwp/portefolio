import Image from "next/image";

interface CompanyLogoProps {
  /** Company identifier */
  company: "accenture" | "cea" | "microsoft" | "jeece" | "ece";
  className?: string;
}

const LOGOS: Record<
  "accenture" | "cea" | "microsoft" | "jeece" | "ece",
  { src: string; alt: string; height: number }
> = {
  accenture: { src: "/logos/accenture.svg", alt: "Accenture", height: 43 },
  cea: { src: "/logos/cea.svg", alt: "CEA", height: 200 },
  microsoft: { src: "/logos/microsoft.svg", alt: "Microsoft", height: 23 },
  jeece: { src: "/logos/jeece.png", alt: "JEECE", height: 2400 },
  ece: { src: "/logos/ece.svg", alt: "ECE Paris", height: 48 },
};

/**
 * Official brand logos served from /public/logos. Rendered with next/image
 * at a fixed display height for consistent card layout.
 */
export function CompanyLogo({ company, className }: CompanyLogoProps) {
  const logo = LOGOS[company];
  const displayHeight = company === "jeece" ? 28 : 24;

  return (
    <Image
      alt={logo.alt}
      className={className ?? "h-auto w-auto object-contain"}
      height={displayHeight}
      src={logo.src}
      style={{ height: displayHeight, width: "auto" }}
      width={displayHeight * 4}
    />
  );
}
