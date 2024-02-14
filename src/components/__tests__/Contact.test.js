import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load contact us component", () => {
    render(<Contact />);
    const button = screen.getAllByPlaceholderText("name");
    expect(button.length).toBe(1);
  });

  test("Should load contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("click me");
    expect(button).toBeInTheDocument();
  });

  it("Should load contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("click me");
    expect(button).toBeInTheDocument();
  });
});
