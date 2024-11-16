import { render } from "@redwoodjs/testing/web";

import Lightbox from "./Lightbox";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("Lightbox", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<Lightbox />);
    }).not.toThrow();
  });
});
