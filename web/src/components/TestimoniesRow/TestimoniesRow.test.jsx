import { render } from "@redwoodjs/testing/web";

import TestimoniesRow from "./TestimoniesRow";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("TestimoniesRow", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<TestimoniesRow />);
    }).not.toThrow();
  });
});
