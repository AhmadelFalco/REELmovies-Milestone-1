export default function MovieCard({ movie }) {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img 
        src={movie.poster} 
        alt={movie.title} 
        className="w-full h-64 object-cover" 
      />
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2 truncate">
          {movie.title}
        </h3>
        
        <div className="flex justify-between items-center text-zinc-400 text-sm mb-2">
          <span>{movie.year}</span>
          <span className="text-amber-500 font-semibold">⭐ {movie.rating}</span>
        </div>
        
        <p className="text-zinc-500 text-sm">{movie.genre}</p>
      </div>
    </div>
  );
}