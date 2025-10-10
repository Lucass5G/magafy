import { buttonVariants } from "@components/Button/button-variants";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";

export function Button({
  className,
  size,
  variant,
  asChild = false,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={buttonVariants({ variant: variant, size, className })}
      {...props}
    />
  );
}
