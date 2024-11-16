import { render } from "@redwoodjs/testing/web";

import PopMessage from "./PopMessage";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("PopMessage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<PopMessage />);
    }).not.toThrow();
  });
});
