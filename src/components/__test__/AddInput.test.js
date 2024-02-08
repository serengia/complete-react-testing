import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput/AddInput";
const mockFn = jest.fn;

describe("AddInput comp", () => {
  it("input should be present", () => {
    render(<AddInput setTodos={mockFn} todos={[]} />);

    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputEl).toBeInTheDocument();
  });

  it("input should have content", () => {
    render(<AddInput setTodos={mockFn} todos={[]} />);

    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputEl, { target: { value: "Go Shopping" } });
    expect(inputEl.value).toBe("Go Shopping");
  });
});
