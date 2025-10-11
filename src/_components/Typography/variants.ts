import { tv } from "tailwind-variants";

export const headingVariants = tv({
  base: ["text-foreground font-semibold"],
  variants: {
    level: {
      h1: "text-4xl font-bold",
      h2: "text-[32px] font-semibold",
      h3: "text-2xl font-medium",
      h4: "text-xl font-normal",
      h5: "text-base font-normal",
      h6: "text-sm font-light",
    },
    font: {
      dmSans: "font-dm-sans",
      rubik: "font-rubik",
    },
  },
  defaultVariants: {
    level: "h1",
    font: "rubik",
  },
});
