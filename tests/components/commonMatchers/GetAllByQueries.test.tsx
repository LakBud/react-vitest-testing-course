import { render, screen } from "@testing-library/react";
import GetAllByQueries from "../../../src/components/commonMatchers/GetAllByQueries";

describe("GetAllByQueries", () => {
  it("should render multiple elements that can be queries by various methods", () => {
    render(<GetAllByQueries />);

    const inputsByLabelText = screen.getAllByLabelText(/Label for input/i);
    expect(inputsByLabelText.length).toBe(2);

    inputsByLabelText.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });

    const inputsByPlaceholderText = screen.getAllByPlaceholderText(/Enter Something/i);

    expect(inputsByPlaceholderText.length).toBe(2);

    inputsByPlaceholderText.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });

    const paragraphByText = screen.getAllByText(/This is a paragraph/i);
    expect(paragraphByText.length).toBe(2);

    paragraphByText.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });

    const inputsByDisplayValue = screen.getAllByDisplayValue(/some display value/);

    expect(inputsByDisplayValue.length).toBe(1);
    expect(inputsByDisplayValue[0]).toBeDisabled();

    const imagesByAnotherAltText = screen.getAllByAltText(/Another sample image/i);
    expect(imagesByAnotherAltText.length).toBe(1);
    expect(imagesByAnotherAltText[0]).toBeInTheDocument();

    const buttonsByRole = screen.getAllByRole("button", { name: /This is a button/i });
    expect(buttonsByRole.length).toBe(2);

    buttonsByRole.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });

    const divsByTestId = screen.getAllByTestId(/custom-test-id/i);
    expect(divsByTestId.length).toBe(2);
    divsByTestId.forEach((div) => {
      expect(div).toBeInTheDocument();
    });
  });
});
