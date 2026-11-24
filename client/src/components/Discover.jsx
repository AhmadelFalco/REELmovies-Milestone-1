import { useState } from 'react';
import { movies } from '../data/movies';
import MovieCard from './MovieCard';

export default function Discover() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');

    let displayedMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (sortBy === "year") {
    displayedMovies = displayedMovies.sort((a, b) => b.year - a.year);
  } else if (sortBy === "rating") {
    displayedMovies = displayedMovies.sort((a, b) => b.rating - a.rating);
  }

  
  return (
    <div id="discover">

      <div className="flex flex-col sm:flex-row gap-8 p-6 max-w-4xl mx-auto items-center justify-center mb-16">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="w-full sm:w-80 p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-amber-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="w-full sm:w-80 p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-amber-500"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By...</option>
          <option value="year">Year (Newest)</option>
          <option value="rating">Rating (Highest)</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-8 px-6 sm:px-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full max-w-[1400px] mx-auto">
        {displayedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    
    </div>
  );
}