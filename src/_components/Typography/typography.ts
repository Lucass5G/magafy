import type { headingVariants } from "@components/Typography/variants";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingElements = `h${HeadingLevels}`;
export type HeadingEloquentProps = {
  as?: HeadingElements;
};

export type HeadingProps = HeadingEloquentProps &
  ComponentProps<"h1"> &
  VariantProps<typeof headingVariants>;
