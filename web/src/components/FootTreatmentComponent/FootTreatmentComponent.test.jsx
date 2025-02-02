import { render } from "@redwoodjs/testing/web";

import FootTreatmentComponent from "./FootTreatmentComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("FootTreatmentComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<FootTreatmentComponent />);
    }).not.toThrow();
  });
});
