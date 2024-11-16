import { render } from "@redwoodjs/testing/web";

import GalleryRow from "./GalleryRow";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("GalleryRow", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<GalleryRow />);
    }).not.toThrow();
  });
});
