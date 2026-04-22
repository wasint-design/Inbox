export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full max-w-sm space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="text-gray-500 text-sm">Your mobile app is ready</p>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-2xl text-base font-semibold active:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </main>
  );
}
