export default function Navbar() {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-8 py-4">
      <span className="text-xl font-bold text-amber-400">REELMovies</span>

      <div className="flex gap-6 text-sm text-zinc-300">
        <a href="#" className="hover:text-amber-400">Discover</a>
        <a href="#" className="hover:text-amber-400">About</a>
        <a href="#" className="hover:text-amber-400">Login</a>
        <a href="https://example.com/register" className="hover:text-amber-400">Register</a>
      </div>
    </div>
  );
}