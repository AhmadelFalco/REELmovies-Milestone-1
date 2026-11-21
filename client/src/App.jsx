import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
export default function App() {

  return (
   <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
    </div>
  );
}