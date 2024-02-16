interface IMovie {
  // your code...
  //should contain 'title', 'release', 'rating' properties
  title: string;
  release: Date;
  rating: number;
}

function filterAndSortMovies(movies: IMovie[], beforeYear: number): IMovie[] {
  // your code ...
  const filtered = movies.filter(
    (movie) => movie.release.getFullYear() < beforeYear
  );
  return filtered.sort((movie1, movie2) =>
    movie1.rating === movie2.rating
      ? movie1.release.getFullYear() - movie2.release.getFullYear()
      : movie1.rating - movie2.rating
  );
}

export default filterAndSortMovies;
