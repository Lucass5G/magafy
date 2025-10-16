import {render, screen} from "@testing-library/react";
import {describe, expect, test, vi} from "vitest";
import {ArtistsAlbums} from "./index";

vi.mock("@/_layouts/(Artists)/Albums/use-artists-albums", () => ({
  useArtistsAlbums: () => ({
    albums: {
      data: {
        _data: {
          items: [
            {
              id: "album1",
              name: "Album One",
              images: [{ url: "album1.jpg", width: 64, height: 64 }],
              release_date: "2023-10-27",
            },
            {
              id: "album2",
              name: "Album Two",
              images: [{ url: "album2.jpg", width: 64, height: 64 }],
              release_date: "2022-05-15",
            },
          ],
        },
      },
    },
  }),
}));

vi.mock("@/_layouts/(Artists)/Artist/artists.store", () => ({
  useArtistsStore: () => ({
    currentArtist: {
      name: "Teste Artist",
      images: [{ url: "artist.jpg", width: 72, height: 72 }],
    },
    setCurrentArtist: vi.fn(),
  }),
}));

describe("Artists Albums", () => {
  test("It should render the artist name and their albums", () => {
    render(<ArtistsAlbums />);
    expect(screen.getByRole("heading", { name: "Teste Artist" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Album One" })).toBeInTheDocument();
    expect(screen.getByText("27/10/2023")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Album Two" })).toBeInTheDocument();
    expect(screen.getByText("15/05/2022")).toBeInTheDocument();
  });
});
