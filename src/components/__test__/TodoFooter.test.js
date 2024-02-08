import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter/TodoFooter";
import { BrowserRouter } from "react-router-dom";

export const MockedBrowserRouterWrapper = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

it("should render correct tasks count", () => {
  render(
    <MockedBrowserRouterWrapper>
      <TodoFooter numberOfIncompleteTasks={5} />
    </MockedBrowserRouterWrapper>
  );

  const text = screen.getByText(/5 tasks left/i);
  expect(text).toBeInTheDocument();
});

it("should render 'task' singular when num of tasks is 1", () => {
  render(
    <MockedBrowserRouterWrapper>
      <TodoFooter numberOfIncompleteTasks={1} />
    </MockedBrowserRouterWrapper>
  );

  const text = screen.getByText(/1 task left/i);
  expect(text).toBeInTheDocument();
});
