function Login() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <h2 className="text-3xl font-bold text-green-600 mb-6">Login</h2>
      <form className="bg-white shadow-md rounded-lg p-8 w-80 space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700">
          Login
        </button>
      </form>
    </section>
  );
}
export default Login;
