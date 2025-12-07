import { render, screen } from "@testing-library/react";
import QueryAllByQueries from "../../../src/components/commonMatchers/QueryAllByQueries";

describe("Test queyAllBy methods", () => {
  it("should query all by role", () => {
    render(<QueryAllByQueries />);

    const button = screen.getAllByRole("button");
    const alert = screen.queryAllByRole("alert");
    const region = screen.queryAllByRole("region");

    expect(button).toHaveLength(2);
    expect(alert).toHaveLength(2);
    expect(region).toHaveLength(2);
  });

  it("should query all by placeholder text", () => {
    render(<QueryAllByQueries />);

    const searchInput = screen.queryAllByPlaceholderText("Search");
    const emailInput = screen.queryAllByPlaceholderText("Email");

    expect(searchInput).toHaveLength(3);
    expect(emailInput).toHaveLength(1);
  });

  it("should only query all text", () => {
    render(<QueryAllByQueries />);

    const headers = screen.queryAllByText(/Header Text/i);
    const paragraphs = screen.queryAllByText(/paragraph text/i);

    expect(headers).toHaveLength(2);
    expect(paragraphs).toHaveLength(2);
  });

  it("should query all by text ID", () => {
    render(<QueryAllByQueries />);

    const customElements = screen.queryAllByTestId("custom-element");

    expect(customElements).toHaveLength(2);
  });

  it("should query all by display value", () => {
    render(<QueryAllByQueries />);

    const prefilledTexts = screen.queryAllByDisplayValue(/Pre-filled Text/i);

    expect(prefilledTexts).toHaveLength(3);
  });
});
