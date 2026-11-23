{/* the navbar section */}
export default function Navbar() {
  return (
    <nav /*div*/ className="flex flex-col items-center justify-between gap-3 border-b-2 border-zinc-700 bg-zinc-900 p-4 sm:flex-row sm:px-8">
       <a href="/" className="text-xl font-bold text-amber-400">REELMovies</a>

      <div className="flex flex-row gap-4 text-sm text-zinc-300 sm:gap-6">
        <a href="/about" className="hover:text-amber-400">About</a>
        <a href="/#discover" className="hover:text-amber-400">Discover</a>
        <a href="/login" className="hover:text-amber-400">Login</a>
        <a href="/register" className="hover:text-amber-400">Register</a>
      </div>
    </nav>
  );
}