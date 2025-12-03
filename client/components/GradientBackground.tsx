import { ReactNode } from "react";

export type GradientVariant = "design" | "art" | "photography";

interface GradientBackgroundProps {
  variant: GradientVariant;
  children: ReactNode;
  className?: string;
}

export const GradientBackground = ({
  variant,
  children,
  className = "",
}: GradientBackgroundProps) => {
  const getGradientStyle = (v: GradientVariant): React.CSSProperties => {
    switch (v) {
      case "design":
        return {
          background: "#01071A",
          position: "relative",
        };
      case "art":
        return {
          background: `radial-gradient(96.82% 94.3% at 51.76% 0%, #8504EA 0%, rgba(66, 0, 255, 0) 100%), radial-gradient(291.48% 109.31% at 96.64% 90.57%, #CA6821 0%, rgba(186, 5, 202, 0) 100%), radial-gradient(252.75% 87.46% at 12.6% 84.38%, #1C00A4 0%, rgba(83, 51, 237, 0) 100%), #000588`,
          position: "relative",
        };
      case "photography":
        return {
          background: `radial-gradient(96.82% 94.3% at 51.76% 0%, #4D2E65 0%, rgba(38, 34, 51, 0) 100%), radial-gradient(291.48% 109.31% at 96.64% 90.57%, #EB731C 0%, rgba(123, 28, 132, 0) 100%), radial-gradient(252.75% 87.46% at 12.6% 84.38%, #0F0C1D 0%, rgba(67, 60, 101, 0) 100%), #000`,
          position: "relative",
        };
    }
  };

  return (
    <div
      style={getGradientStyle(variant)}
      className={`overflow-hidden rounded-[2rem] ${className}`}
    >
      {children}
    </div>
  );
};
