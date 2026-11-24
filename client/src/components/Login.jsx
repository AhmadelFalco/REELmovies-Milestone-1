export default function Login() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-amber-500 text-center mb-6">Welcome Back</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-zinc-400 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:border-amber-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-zinc-400 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full p-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:border-amber-500"
              placeholder="Enter your password"
            />
          </div>
          
          <button className="w-full bg-amber-500 text-zinc-950 font-bold p-3 rounded-lg hover:bg-amber-400 transition-colors mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}