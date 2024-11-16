import { render } from "@redwoodjs/testing/web";

import GalleryGridComponent from "./GalleryGridComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("GalleryGridComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<GalleryGridComponent />);
    }).not.toThrow();
  });
});
