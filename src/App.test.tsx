import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Delivero Clone test", () => {
  test("Renders Delevero clone", () => {
    render(<App />);
    //const outputemail = screen.getByTestId("outputemail");
    // expect(outputemail).toBeVisible();
  });
});
