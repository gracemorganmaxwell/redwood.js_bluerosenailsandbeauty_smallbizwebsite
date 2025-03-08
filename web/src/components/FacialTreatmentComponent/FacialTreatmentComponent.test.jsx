import { render } from "@redwoodjs/testing/web";

import FacialTreatmentComponent from "./FacialTreatmentComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("FacialTreatmentComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<FacialTreatmentComponent />);
    }).not.toThrow();
  });
});
