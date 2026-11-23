export default function Hero() {
  return (//i want to add background image here
<header
      className="relative flex flex-col min-h-[420px] items-center justify-center px-6 text-center"
      style={{ backgroundImage: "url('/Screenshot 2026-11-21 160740.png')" }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/75"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-amber-500 sm:text-5xl">
          REELMovies
        </h1>

        <p className=" text-lg mt-4 text-zinc-300 sm:text-xl">
          Your Ultimate Cinematic Destination
        </p>
        <a
          href="#discover"
          className="mt-6 inline-block rounded-sm bg-amber-500 px-6 py-3 font-semibold text-zinc-950 hover:bg-amber-300"
        >
          Discover Now
        </a>
      </div>
    </header>
  );
}