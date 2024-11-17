import { render } from "@redwoodjs/testing/web";

import GiftcardRequestComponent from "./GiftcardRequestComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("GiftcardRequestComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<GiftcardRequestComponent />);
    }).not.toThrow();
  });
});
