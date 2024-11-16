import { render } from "@redwoodjs/testing/web";

import SubHeadingComponent from "./SubHeadingComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("SubHeadingComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<SubHeadingComponent />);
    }).not.toThrow();
  });
});
