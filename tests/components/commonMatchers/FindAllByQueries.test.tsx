import { render, screen } from "@testing-library/react";
import FindAllByQueries from "../../../src/components/commonMatchers/FindAllByQueries";

describe("FindAllByQueries methods", () => {
  beforeEach(() => {
    render(<FindAllByQueries />);
  });

  test("should find element by text", async () => {
    const paragraphs = await screen.findAllByText(/Item/i);
    expect(paragraphs).toHaveLength(3);

    paragraphs.forEach((p) => {
      expect(p).toBeInTheDocument();
    });
  });

  it("should find all elements by role", async () => {
    const buttons = await screen.findAllByRole("button");
    expect(buttons).toHaveLength(3);

    buttons.forEach((b) => {
      expect(b).toBeInTheDocument();
    });
  });

  test("should find all elements by placeholder value", async () => {
    const inputs = await screen.findAllByPlaceholderText("Enter text here");
    expect(inputs).toHaveLength(3);

    inputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });

  test("should find all elements by alternative text", async () => {
    const images = await screen.findAllByAltText("test-image");
    expect(images).toHaveLength(3);

    images.forEach((image) => {
      expect(image).toBeInTheDocument();
    });
  });

  test("should find all elements by display (default) value", async () => {
    const inputs = await screen.findAllByDisplayValue(/Test Input/i);
    expect(inputs).toHaveLength(3);

    inputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });

  test("should find all elements by test-id", async () => {
    const divs = await screen.findAllByTestId("test-element");
    expect(divs).toHaveLength(3);

    divs.forEach((div) => {
      expect(div).toBeInTheDocument();
    });
  });
});
