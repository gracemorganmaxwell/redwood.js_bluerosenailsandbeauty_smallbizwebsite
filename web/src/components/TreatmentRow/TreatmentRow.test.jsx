import { render } from "@redwoodjs/testing/web";

import TreatmentRow from "./TreatmentRow";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("TreatmentRow", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<TreatmentRow />);
    }).not.toThrow();
  });
});
