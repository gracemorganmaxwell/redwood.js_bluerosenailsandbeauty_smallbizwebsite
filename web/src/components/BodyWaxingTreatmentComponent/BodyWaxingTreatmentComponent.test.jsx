import { render } from "@redwoodjs/testing/web";

import BodyWaxingTreatmentComponent from "./BodyWaxingTreatmentComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("BodyWaxingTreatmentComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<BodyWaxingTreatmentComponent />);
    }).not.toThrow();
  });
});
