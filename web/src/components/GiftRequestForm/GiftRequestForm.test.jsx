import { render } from "@redwoodjs/testing/web";

import GiftRequestForm from "./GiftRequestForm";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("GiftRequestForm", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<GiftRequestForm />);
    }).not.toThrow();
  });
});
