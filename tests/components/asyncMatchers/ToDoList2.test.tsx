import { render, screen } from "@testing-library/react";
import ToDoList2 from "../../../src/components/asyncMatchers/ToDoList2";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";

describe("TodoList2 Component", () => {
  beforeEach(() => {
    render(<ToDoList2 />);
  });

  test("should render a list of todos", async () => {
    const todos = await screen.findAllByRole("listitem");
    expect(todos.length).toBeGreaterThan(0);
  });

  test("should render no todos available if no todo is found", async () => {
    server.use(http.get("https://jsonplaceholder.typicode.com/todos", () => HttpResponse.json([])));

    render(<ToDoList2 />);
    const noTodos = await screen.findByText(/no todos/i);
    expect(noTodos).toBeInTheDocument();
  });

  it("should render a loading if products are loading", () => {
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });
});
