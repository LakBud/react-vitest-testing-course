import { render, screen } from "@testing-library/react";
import FindingElementByRoles from "../../../src/components/commonMatchers/FindingElementByRoles";

describe("FindingElementsByRole", () => {
  it("should query the link element", () => {
    render(<FindingElementByRoles />);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should query the button element", () => {
    render(<FindingElementByRoles />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should query the footer element", () => {
    render(<FindingElementByRoles />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should query the h1 element", () => {
    render(<FindingElementByRoles />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("should query the header element", () => {
    render(<FindingElementByRoles />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("should query the image element", () => {
    render(<FindingElementByRoles />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should query the numberInput element", () => {
    render(<FindingElementByRoles />);
    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  it("should query the ul element", () => {
    render(<FindingElementByRoles />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("should query the li element", () => {
    render(<FindingElementByRoles />);
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });
});
