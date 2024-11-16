import { render } from "@redwoodjs/testing/web";

import CtaRow from "./CtaRow";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("CtaRow", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<CtaRow />);
    }).not.toThrow();
  });
});
