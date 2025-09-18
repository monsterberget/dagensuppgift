import { movieSort } from "./functions";
import { IMovie } from "./models/Movie";

describe("movieSort", () => {
  const movies: IMovie[] = [
    { Title: "Batman", Year: "2020", imdbID: "1", Type: "movie", Poster: "" },
    { Title: "Avengers", Year: "2019", imdbID: "2", Type: "movie", Poster: "" },
    { Title: "Zootopia", Year: "2016", imdbID: "3", Type: "movie", Poster: "" },
  ];

  test("sorterar i fallande ordning (desc = true)", () => {
    const sorted = movieSort([...movies]);
    expect(sorted.map(m => m.Title)).toEqual(["Avengers", "Batman", "Zootopia"].sort());
  });

  test("sorterar i stigande ordning (desc = false)", () => {
    const sorted = movieSort([...movies], false);
    expect(sorted.map(m => m.Title)).toEqual(["Avengers", "Batman", "Zootopia"].sort().reverse());
  });

  test("bevarar antal element", () => {
    const sorted = movieSort([...movies]);
    expect(sorted.length).toBe(movies.length);
  });

  test("hanterar tom array", () => {
    const sorted = movieSort([]);
    expect(sorted).toEqual([]);
  });
});
