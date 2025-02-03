import { render } from "@redwoodjs/testing/web";

import UnisexWaxingTreatmentComponent from "./UnisexWaxingTreatmentComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("UnisexWaxingTreatmentComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<UnisexWaxingTreatmentComponent />);
    }).not.toThrow();
  });
});
