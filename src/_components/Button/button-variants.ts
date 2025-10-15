import {tv} from "tailwind-variants";

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
      outline:
        "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      ghost:
        "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-[42px] px-10 has-[>svg]:px-3",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
