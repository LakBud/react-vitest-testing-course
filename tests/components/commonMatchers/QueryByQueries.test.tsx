import { render, screen } from "@testing-library/react";
import QueryByQueries from "../../../src/components/commonMatchers/QueryByQueries";

describe("Test queryBy methods", () => {
  it("should query by Role", () => {
    render(<QueryByQueries />);

    const alert = screen.queryByRole("alert");
    const button = screen.queryByRole("button");

    expect(alert).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should query by label text", () => {
    render(<QueryByQueries />);

    const label1 = screen.queryByLabelText("Label 1");
    const label2 = screen.queryByLabelText("Label 2");

    expect(label1).toBeInTheDocument();
    expect(label2).toBeInTheDocument();
  });

  it("should query by text", () => {
    render(<QueryByQueries />);

    const header = screen.queryByText("Header Text");
    const paragraph = screen.queryByText("This is some paragraph text.");

    expect(header).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it("should query by text", () => {
    render(<QueryByQueries />);

    const header = screen.queryByText("Header Text");
    const paragraph = screen.queryByText("This is some paragraph text.");

    expect(header).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it("should query by data-testid", () => {
    render(<QueryByQueries />);
    const dataTestId = screen.queryByTestId("custom-element");
    expect(dataTestId).toBeInTheDocument();
  });

  it("should query by data-testid", () => {
    render(<QueryByQueries />);
    const inputValue = screen.queryByDisplayValue("Pre-filled Text");
    expect(inputValue).toBeInTheDocument();
  });
});
