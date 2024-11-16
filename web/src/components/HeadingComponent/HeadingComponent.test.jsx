import { render } from "@redwoodjs/testing/web";

import HeadingComponent from "./HeadingComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("HeadingComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<HeadingComponent />);
    }).not.toThrow();
  });
});
