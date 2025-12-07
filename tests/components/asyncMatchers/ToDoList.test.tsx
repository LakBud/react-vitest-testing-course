import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoList from "../../../src/components/asyncMatchers/ToDoList";

describe("ToDoList Component", () => {
  beforeEach(() => {
    render(<ToDoList />);
  });

  it("should render ToDoList with an input and a button", () => {
    expect(screen.getByPlaceholderText("Enter new todo"));
    expect(screen.getByText("Add Todo"));
  });

  it("should add a todo item", async () => {
    const input = screen.getByPlaceholderText("Enter new todo");
    const button = screen.getByText("Add Todo");

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  it("should mark a todo as completed", async () => {
    const input = screen.getByPlaceholderText("Enter new todo");
    const button = screen.getByText("Add Todo");

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    const todoItem = screen.getByText("New Todo");
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("should delete a todo item", async () => {
    const input = screen.getByPlaceholderText("Enter new todo");
    const button = screen.getByText("Add Todo");

    await userEvent.type(input, "New Todo");
    await userEvent.click(button);

    const deleteButton = screen.getByText("Delete");
    await userEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("New Todo")).not.toBeInTheDocument();
    });
  });
});
