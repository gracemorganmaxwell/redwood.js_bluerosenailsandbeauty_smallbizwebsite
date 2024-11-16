import { render } from "@redwoodjs/testing/web";

import ContactFormComponent from "./ContactFormComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("ContactFormComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<ContactFormComponent />);
    }).not.toThrow();
  });
});
