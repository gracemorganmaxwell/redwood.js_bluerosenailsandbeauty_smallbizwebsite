import { render } from "@redwoodjs/testing/web";

import MassageTreatmentsComponent from "./MassageTreatmentsComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("MassageTreatmentsComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<MassageTreatmentsComponent />);
    }).not.toThrow();
  });
});
