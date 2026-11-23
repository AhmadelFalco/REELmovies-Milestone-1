import { movies } from './data/movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About'; 
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
export default function App() {

  return (
   <div className="min-h-screen bg-zinc-950 text-zinc-100">
    <Navbar />

<BrowserRouter>
<Routes>  
  <Route path="/" element={<Hero />} />
  <Route path="/about" element={<About />} />
</Routes>
</BrowserRouter>
    </div>
  );
}

