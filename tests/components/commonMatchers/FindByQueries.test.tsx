import FindByQueries from "../../../src/components/commonMatchers/FindByQueries";
import { render, screen } from "@testing-library/react";

describe("FindByQueries Method", () => {
  it("should find an element by its text content", async () => {
    render(<FindByQueries />);

    const headingElement = await screen.findByText("FindBy Queries Test");
    expect(headingElement).toBeInTheDocument();
  });

  test("should find an element by its aria-label", async () => {
    render(<FindByQueries />);

    const clickMeLabel = await screen.findByLabelText("click-me");

    expect(clickMeLabel).toBeInTheDocument();
  });

  it("should find an element by its placeholder text", async () => {
    render(<FindByQueries />);

    const placeholderText = await screen.findByPlaceholderText("Enter text here");

    expect(placeholderText).toBeInTheDocument();
  });

  it("should find an element by its alternative text", async () => {
    render(<FindByQueries />);
    const image = await screen.findByAltText("test-image");
    expect(image).toBeInTheDocument();
  });

  it("should find an element by its default value", async () => {
    render(<FindByQueries />);
    const defaultValue = await screen.findByDisplayValue("This is a test input");
    expect(defaultValue).toBeInTheDocument();
  });

  test("should find an element by its default value", async () => {
    render(<FindByQueries />);
    const div = await screen.findByTestId("test-element");
    expect(div).toBeInTheDocument();
  });

  test("should find an element by its htmlFor", async () => {
    render(<FindByQueries />);
    const input = await screen.findByLabelText("Test Input Label");
    expect(input).toBeInTheDocument();
  });
});
