import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all rounded-full",
    "font-bold text-base",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  ],
  variants: {
    variant: {
      default:
        "bg-button-primary text-button-foreground hover:bg-button-primary/90",
    },
    size: {
      default: "h-[42px] px-10 has-[>svg]:px-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
