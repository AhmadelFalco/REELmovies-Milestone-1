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
    <div>
  
<div className="p-6 max-w-md mx-auto">
  <input
    type="text"
    placeholder="Search for a movie..."
    className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-amber-500"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>
<select
  className="w-full mt-4 p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-amber-500"
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="">Sort By...</option>
  <option value="year">Year (Newest)</option>
  <option value="rating">Rating (Highest)</option>
</select>

    <div className="grid grid-cols-2  gap-6 p-6 sm:grid-cols-6">
{displayedMovies.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
))}
    </div>
    
    </div>
  );
}