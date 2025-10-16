import "@testing-library/jest-dom";
import {vi} from "vitest";

vi.mock("next/image", () => ({
  default: (props: any) => {
    // biome-ignore lint/a11y/useAltText: <explanation>
    return <img {...props} />;
  },
}));
