import {ReactNode} from "react";

type ConditionalRenderProps = {
    when: boolean;
    children: ReactNode
}
export function ConditionalRender({children, when}: Readonly<Partial<ConditionalRenderProps>>) {
    const hasValue =  Array.isArray(when) ? when.length > 0 : Boolean(when)

    if (hasValue && !children) {
        throw new Error("ConditionalRender: children is required when 'when' is truthy");
    }

    if (!hasValue) {
        return null
    }

    return <>{children}</>
}