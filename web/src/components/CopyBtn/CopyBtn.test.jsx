import { render } from "@redwoodjs/testing/web";

import CopyBtn from "./CopyBtn";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("CopyBtn", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<CopyBtn />);
    }).not.toThrow();
  });
});
