import { render } from "@redwoodjs/testing/web";

import InitialAvatar from "./InitialAvatar";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("InitialAvatar", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<InitialAvatar />);
    }).not.toThrow();
  });
});
