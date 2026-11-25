import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About'; 
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Login from "./components/Login";
import Register from "./components/Register";
export default function App() {

  return (
   <div className="min-h-screen bg-zinc-950 text-zinc-100">
    <Navbar />


<BrowserRouter>
<Routes>  
  <Route path="/" element={<>
    <Hero />
    <Discover />
  </>} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Routes>
</BrowserRouter>


   </div>
  );
}
