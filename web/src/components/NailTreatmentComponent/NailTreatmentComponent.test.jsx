import { render } from "@redwoodjs/testing/web";

import NailTreatmentComponent from "./NailTreatmentComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("NailTreatmentComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<NailTreatmentComponent />);
    }).not.toThrow();
  });
});
