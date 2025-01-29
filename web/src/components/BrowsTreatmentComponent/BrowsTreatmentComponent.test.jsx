import { render } from "@redwoodjs/testing/web";

import BrowsTreatmentComponent from "./BrowsTreatmentComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("BrowsTreatmentComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<BrowsTreatmentComponent />);
    }).not.toThrow();
  });
});
