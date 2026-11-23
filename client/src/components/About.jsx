export default function About() {
  return (
   <div className="min-h-screen   bg-zinc-900   text-white   py-16  px-6">
<div className="max-w-4xl mx-auto">

    <h1 className="text-4xl font-bold text-amber-500 text-center mb-10">
  About REELMovies
     </h1>
     <section className="bg-zinc-800 p-6 rounded-lg mb-12 shadow-lg">
        <h2 className="text-2xl font-semibold text-amber-400 mb-4">
  Our Application
</h2>
<p className="text-zinc-300 leading-relaxed">
  REELMovies is your ultimate cinematic destination. 
  This web application was built as part of a full-stack web development project. 
  It allows users to explore, search, and filter a curated collection of movies.
   Our goal is to provide a seamless and visually appealing experience for movie enthusiasts to discover their next favorite film.
</p>
     </section>



{/* the team section */}
     <section className="bg-zinc-800 p-6 rounded-lg shadow-lg">
<h2 className="text-2xl font-semibold text-amber-400 mb-6 text-center">
  Meet The Team
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <div className="bg-zinc-700 p-4 rounded-md text-center">
    <h3 className="text-xl font-bold text-white">Ahmad Emad Abdallah</h3>
    <p className="text-sm text-zinc-500 mt-2">Student ID: 2433053</p>
  </div>

  <div className="bg-zinc-700 p-4 rounded-md text-center">
    <h3 className="text-xl font-bold text-white">Mohammad Samhan</h3>
    <p className="text-sm text-zinc-500 mt-2">Student ID: 87654321</p>
  </div>

</div> 

     </section>
</div>

   </div>
  );
}