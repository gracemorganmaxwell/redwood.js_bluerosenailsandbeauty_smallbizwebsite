import { render } from "@redwoodjs/testing/web";

import FormSubmitBtnComponent from "./FormSubmitBtnComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("FormSubmitBtnComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<FormSubmitBtnComponent />);
    }).not.toThrow();
  });
});
