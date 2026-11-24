export default function MovieCard({ movie }) {
  return (
    <div className="bg-zinc-900 rounded-lg">
      <img 
        src={movie.poster} 
        alt={movie.title} 
        className="w-full h-64 object-cover" 
      />
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">
          {movie.title}
        </h3>
      </div>
<div className="flex justify-between items-center text-zinc-400 text-sm mb-2">
  <span>{movie.year}</span>
  </div>

    </div>
  );
}