import {fireEvent, render, screen} from "@testing-library/react";
import {describe, expect, test, vi} from "vitest";
import {TopArtist} from "./index";

const mockArtists = {
  items: [
    {
      id: "artist1",
      name: "Artist One",
      images: [{ url: "artist1.jpg", width: 64, height: 64 }],
    },
    {
      id: "artist2",
      name: "Artist Two",
      images: [{ url: "artist2.jpg", width: 64, height: 64 }],
    },
  ],
};

const mockSetCurrentArtist = vi.fn();

vi.mock("@/_layouts/(Artists)/Artist/use-artist", () => ({
  useArtist: () => ({
    artists: {
      data: {
        _data: mockArtists,
      },
    },
    nextArtists: vi.fn(),
    previousArtists: vi.fn(),
  }),
}));

vi.mock("@/_layouts/(Artists)/Albums", () => ({
  ArtistsAlbums: () => <div data-testid="artists-albums-mock" />,
}));

const mockUseArtistsStore = vi.fn();
vi.mock("@/_layouts/(Artists)/Artist/artists.store", () => ({
  useArtistsStore: (selector: unknown) => mockUseArtistsStore(selector),
}));

describe("TopArtist Component", () => {
  test("should render the list of artists when no artist is selected", () => {
    mockUseArtistsStore.mockReturnValue({
      currentArtist: null,
      setCurrentArtist: mockSetCurrentArtist,
    });

    render(<TopArtist />);

    expect(
      screen.getByRole("heading", { name: "Top Artistas" }),
    ).toBeInTheDocument();
    expect(screen.getByText(mockArtists.items[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockArtists.items[1].name)).toBeInTheDocument();

    fireEvent.click(screen.getByText(mockArtists.items[0].name));
    expect(mockSetCurrentArtist).toHaveBeenCalledWith(mockArtists.items[0]);
  });

  test("should render the albums component when an artist is selected", () => {
    mockUseArtistsStore.mockReturnValue({
      currentArtist: mockArtists.items[0],
      setCurrentArtist: mockSetCurrentArtist,
    });

    render(<TopArtist />);

    expect(
      screen.queryByRole("heading", { name: "Top Artistas" }),
    ).not.toBeInTheDocument();

    expect(screen.getByTestId("artists-albums-mock")).toBeInTheDocument();
  });
});
