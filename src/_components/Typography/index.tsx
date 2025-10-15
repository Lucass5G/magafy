"use client";
import type {HeadingProps} from "@components/Typography/typography";
import {headingVariants} from "@components/Typography/variants";

export function Heading({
  className,
  as: TagName = "h1",
  font,
  ...rest
}: Readonly<HeadingProps>) {
  return (
    <TagName
      className={headingVariants({
        font,
        level: TagName,
        className,
      })}
      {...rest}
    />
  );
}
