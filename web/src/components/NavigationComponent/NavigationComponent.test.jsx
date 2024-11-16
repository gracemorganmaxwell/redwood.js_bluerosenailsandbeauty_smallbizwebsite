import { render } from "@redwoodjs/testing/web";

import NavigationComponent from "./NavigationComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("NavigationComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<NavigationComponent />);
    }).not.toThrow();
  });
});
