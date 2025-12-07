import { screen, render } from "@testing-library/react";
import UserStatus from "../../src/components/UserStatus";

describe("UserStatus Component", () => {
  it("should display a welcome message when email is provided", () => {
    render(<UserStatus email="BuddyBoy@gmail.com" />);

    const welcomeMessage = screen.getByText(/Welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("should display the sign up button when no email is provided", () => {
    render(<UserStatus email="" />);

    const signUpButton = screen.getByText(/Sign Up/i);
    expect(signUpButton).toBeInTheDocument();
  });
});
