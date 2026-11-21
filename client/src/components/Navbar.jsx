export default function Navbar() {
  return (
    <nav /*div*/ className="flex flex-col items-center justify-between gap-3 border-b border-zinc-800 bg-zinc-900 px-4 py-4 sm:flex-row sm:px-8">
      <span className="text-xl font-bold text-amber-400">REELMovies</span>

      <div className="flex gap-4 text-sm text-zinc-300 sm:gap-6">
         <a href="/about" className="hover:text-amber-400">About</a>
        <a href="/discover" className="hover:text-amber-400">Discover</a>
        <a href="/login" className="hover:text-amber-400">Login</a>
        <a href="/register" className="hover:text-amber-400">Register</a>
      </div>
    </nav>
  );
}