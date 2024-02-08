import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList/FollowersList";
import { MockedBrowserRouterWrapper } from "./TodoFooter.test";

describe("FollowersList", () => {
  // HOOKS IN TESTING
  //   beforeEach(() => {
  //     console.log("RUNS BEFORE EACH TEST");
  //   });

  //   beforeAll(() => {
  //     console.log("RUNS ONCE BEFORE ALL TESTS");
  //   });

  //   afterEach(() => {
  //     console.log("RUNS AFTER EACH TEST");
  //   });

  //   afterAll(() => {
  //     console.log("RUNS ONCE AFTER ALL TESTS");
  //   });

  it("should render first item", async () => {
    render(
      <MockedBrowserRouterWrapper>
        <FollowersList />
      </MockedBrowserRouterWrapper>
    );

    const item = await screen.findByTestId("follower-id-0");
    expect(item).toBeInTheDocument();
  });

  it("should render multiple items", async () => {
    render(
      <MockedBrowserRouterWrapper>
        <FollowersList />
      </MockedBrowserRouterWrapper>
    );

    const items = await screen.findAllByTestId(/follower-id/);
    expect(items.length).toBe(2);
  });
});
