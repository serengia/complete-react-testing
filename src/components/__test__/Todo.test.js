import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo/Todo";
import { MockedBrowserRouterWrapper } from "./TodoFooter.test";

describe("Todo Integration test", () => {
  function addTodo(inputEl, todoTextArr = []) {
    todoTextArr.forEach((td) => {
      fireEvent.change(inputEl, { target: { value: td } });
      const addBtn = screen.getByRole("button", { name: /Add/i });
      fireEvent.click(addBtn);
    });
  }

  it("should add todo correctly", () => {
    render(
      <MockedBrowserRouterWrapper>
        <Todo />
      </MockedBrowserRouterWrapper>
    );

    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputEl, { target: { value: "Watch Tv" } });
    const addBtn = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(addBtn);
    const addedContent = screen.getByText("Watch Tv");

    expect(addedContent).toBeInTheDocument();
  });

  it("should add correct number of items", () => {
    render(
      <MockedBrowserRouterWrapper>
        <Todo />
      </MockedBrowserRouterWrapper>
    );

    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);

    addTodo(inputEl, ["Read", "Code", "Go Shopping", "Do assignment"]);

    const todoItems = screen.getAllByTestId("todo-wrapper");
    expect(todoItems.length).toBe(4);
  });

  it("task should not be completed when initially added", () => {
    render(
      <MockedBrowserRouterWrapper>
        <Todo />
      </MockedBrowserRouterWrapper>
    );

    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);

    addTodo(inputEl, ["Go jogging"]);
    const newItem = screen.getByText("Go jogging");
    expect(newItem).not.toHaveClass("todo-item-active");
  });

  it("task should be marked complete when clicked", () => {
    render(
      <MockedBrowserRouterWrapper>
        <Todo />
      </MockedBrowserRouterWrapper>
    );

    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);

    addTodo(inputEl, ["Go jogging"]);
    const newItem = screen.getByText("Go jogging");
    fireEvent.click(newItem);
    expect(newItem).toHaveClass("todo-item-active");
  });
});
