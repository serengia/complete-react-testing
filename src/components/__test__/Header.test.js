import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";

describe("SERE with get 1", () => {
  it("render header", () => {
    render(<Header title={"Hello there"} />);

    const heading = screen.getByText(/hello there/i);
    expect(heading).toBeInTheDocument();
  });

  it("header exist", () => {
    render(<Header title="Sample text" />);
    const h2 = screen.getByRole("heading", { name: "Sample text" });
    expect(h2).toBeInTheDocument();
  });

  it("header with id", () => {
    render(<Header title="Sample3 text" />);
    const h2 = screen.getByTestId("heading-1");
    expect(h2).toBeInTheDocument();
  });
});

describe("SERE with get 2", () => {
  it("header 2 exists in the document", async () => {
    render(<Header title="Sample4 text" />);

    const h2 = await screen.findByText(/Sample4 text/i);
    expect(h2).toBeInTheDocument();
  });
});

describe("my test block using query by", () => {
  it("text is not in the document", async () => {
    render(<Header title="Sample4 text" />);

    const h2 = screen.queryByText(/i don't exist/i);
    expect(h2).not.toBeInTheDocument();
  });

  it("header 2 exists in the document", () => {
    render(<Header title="Sample4 text" />);

    const headings = screen.queryAllByRole("heading");
    expect(headings.length).toBe(2);
  });
});
