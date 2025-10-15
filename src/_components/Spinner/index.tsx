import {cn} from "@lib/cn";
import {Loader2Icon} from "lucide-react";
import type {ComponentProps} from "react";

function Spinner({ className, ...props }: Readonly<ComponentProps<"svg">>) {
  return (
    <output>
      <Loader2Icon
        aria-label="Loading"
        className={cn("size-4 animate-spin", className)}
        {...props}
      />
    </output>
  );
}

export { Spinner };
