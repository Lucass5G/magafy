import {fireEvent, render, screen} from "@testing-library/react";
import {beforeEach, describe, expect, test, vi} from "vitest";
import {Playlists} from "./index";

const mockNextPlaylists = vi.fn();
const mockPreviousPlaylists = vi.fn();

const mockPlaylistsData = {
  items: [
    {
      id: "playlist1",
      name: "Awesome Mix Vol. 1",
      owner: { display_name: "Peter Quill" },
      images: [{ url: "playlist1.jpg", width: 64, height: 64 }],
    },
    {
      id: "playlist2",
      name: "Lofi Hip Hop Radio",
      owner: { display_name: "ChilledCow" },
      images: [{ url: "playlist2.jpg", width: 64, height: 64 }],
    },
    {
      id: "playlist3",
      name: "Playlist Sem Imagem",
      owner: { display_name: "Test User" },
      images: [],
    },
  ],
};

vi.mock("@/_layouts/(Playlists)/Playlists/use-playlists", () => ({
  usePlaylists: () => ({
    playlists: {
      data: {
        _data: mockPlaylistsData,
      },
    },
    nextPlaylists: mockNextPlaylists,
    previousPlaylists: mockPreviousPlaylists,
  }),
}));

describe("Playlists Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should render the list of playlists correctly", () => {
    render(<Playlists />);

    expect(
      screen.getByRole("heading", { name: "Awesome Mix Vol. 1" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Peter Quill" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Lofi Hip Hop Radio" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "ChilledCow" }),
    ).toBeInTheDocument();
  });

  test("should call nextPlaylists when the next button is clicked", () => {
    render(<Playlists />);

    const nextButton = screen.getByRole("link", { name: /go to next page/i });
    fireEvent.click(nextButton);

    expect(mockNextPlaylists).toHaveBeenCalledTimes(1);
    expect(mockPreviousPlaylists).not.toHaveBeenCalled();
  });

  test("should call previousPlaylists when the previous button is clicked", () => {
    render(<Playlists />);

    const previousButton = screen.getByRole("link", {
      name: /go to previous page/i,
    });
    fireEvent.click(previousButton);

    expect(mockPreviousPlaylists).toHaveBeenCalledTimes(1);
    expect(mockNextPlaylists).not.toHaveBeenCalled();
  });

  test("should render a fallback image when a playlist has no image", () => {
    render(<Playlists />);

    const fallbackImage = screen.getByAltText(
      "Imagem da playlist Playlist Sem Imagem",
    );
    expect(fallbackImage).toBeInTheDocument();
  });

  test("should render correct alt text for images", () => {
    render(<Playlists />);

    expect(
      screen.getByAltText("Imagem da playlist Awesome Mix Vol. 1"),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Imagem da playlist Lofi Hip Hop Radio"),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Imagem da playlist Playlist Sem Imagem"),
    ).toBeInTheDocument();
  });
});
