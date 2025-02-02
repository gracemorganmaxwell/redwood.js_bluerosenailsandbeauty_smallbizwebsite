import { render } from "@redwoodjs/testing/web";

import LashNBrowPackageTreatmentsComponent from "./LashNBrowPackageTreatmentsComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("LashNBrowPackageTreatmentsComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<LashNBrowPackageTreatmentsComponent />);
    }).not.toThrow();
  });
});
