import "@testing-library/jest-dom";
import {vi} from "vitest";

vi.mock("next/image", () => ({
  default: (props: unknown) => {
    // next/image props are spread onto the img tag
    // eslint-disable-next-line @next/next/no-img-element
    // @ts-expect-error
    return <img {...props} alt={"mock"} />;
  },
}));
