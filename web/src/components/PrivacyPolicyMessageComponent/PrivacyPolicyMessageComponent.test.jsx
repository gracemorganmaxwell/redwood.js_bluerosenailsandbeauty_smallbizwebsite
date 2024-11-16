import { render } from "@redwoodjs/testing/web";

import PrivacyPolicyMessageComponent from "./PrivacyPolicyMessageComponent";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("PrivacyPolicyMessageComponent", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<PrivacyPolicyMessageComponent />);
    }).not.toThrow();
  });
});
