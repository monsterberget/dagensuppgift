import { movieSort } from "./functions";
import { IMovie } from "./models/Movie";

describe("movieSort", () => {
  const movies: IMovie[] = [
    { Title: "Batman", Year: "2020", imdbID: "1", Type: "movie", Poster: "" },
    { Title: "Avengers", Year: "2019", imdbID: "2", Type: "movie", Poster: "" },
    { Title: "Zootopia", Year: "2016", imdbID: "3", Type: "movie", Poster: "" },
  ];

  test("sorterar i fallande ordning (desc = true) som default", () => {
    const sorted = movieSort([...movies]); // spread så vi inte ändrar original
    expect(sorted.map(m => m.Title)).toEqual(["Avengers", "Batman", "Zootopia"].sort((a, b) => a.localeCompare(b)));
  });

  test("sorterar i stigande ordning (desc = false)", () => {
    const sorted = movieSort([...movies], false);
    expect(sorted.map(m => m.Title)).toEqual(["Zootopia", "Batman", "Avengers"].sort((a, b) => b.localeCompare(a)));
  });

  test("bevarar antal element", () => {
    const sorted = movieSort([...movies]);
    expect(sorted.length).toBe(movies.length);
  });
});