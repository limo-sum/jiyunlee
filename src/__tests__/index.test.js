import { render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import handlers from "../mocks/handler";
import Main from "../App";

const server = setupServer(handlers[0]);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("test", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  it("default test", async () => {
    render(<Main />);
    await waitFor(() => {
      expect(screen.getByText(/JiYun/)).toBeInTheDocument();
    });
  });
});
