import { render } from "@redwoodjs/testing/web";

import HeroComponent from "./HeroComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("HeroComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<HeroComponent />);
    }).not.toThrow();
  });
});
