import { render } from "@redwoodjs/testing/web";

import AboutRow from "./AboutRow";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("AboutRow", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<AboutRow />);
    }).not.toThrow();
  });
});
