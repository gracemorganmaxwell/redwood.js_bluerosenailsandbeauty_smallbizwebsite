import { render } from "@redwoodjs/testing/web";

import FacialFreshaLinkPage from "./FacialFreshaLinkPage";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("FacialFreshaLinkPage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<FacialFreshaLinkPage />);
    }).not.toThrow();
  });
});
