import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleMessage from "../../../src/components/asyncMatchers/ToggleMessage";

describe("ToggleMessage Component", () => {
  beforeEach(() => {
    render(<ToggleMessage />);
  });

  test("should toggle the message visiblity when button is clicked", async () => {
    const button = screen.getByRole("button", { name: /Toggle Message/i });

    expect(screen.queryByText(/the message is visible/i)).toBeNull();

    await userEvent.click(button);
    expect(screen.getByText("This message is visible!")).toBeInTheDocument();

    await userEvent.click(button);
    expect(screen.queryByText("This message is visible!")).toBeNull();
  });
});
