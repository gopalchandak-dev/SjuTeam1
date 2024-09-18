import { useRecoilState } from 'recoil';
import { countAtom } from './recoil/atoms';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import tailwindLogo from './assets/tailwind.svg'; 
import recoilLogo from './assets/recoil.svg'; 
import acernityLogo from './assets/aceternity.webp';
import { BackgroundBeams } from './components/ui/background-beams';

function App() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <div className="relative min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4 text-neutral-200 overflow-hidden">
      {/* Background */}
      <BackgroundBeams className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 py-8 md:py-12 text-center flex flex-col items-center justify-center">
        {/* Header Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a href="https://vitejs.dev" target="_blank" className="transition-transform transform hover:scale-110">
            <img src={viteLogo} className="h-16 md:h-20" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="transition-transform transform hover:scale-110">
            <img src={reactLogo} className="h-16 md:h-20" alt="React logo" />
          </a>
          <a href="https://tailwindcss.com" target="_blank" className="transition-transform transform hover:scale-110">
            <img src={tailwindLogo} className="h-16 md:h-20" alt="Tailwind logo" />
          </a>
          <a href="https://recoiljs.org" target="_blank" className="transition-transform transform hover:scale-110">
            <img src={recoilLogo} className="h-16 md:h-20" alt="Recoil logo" />
          </a>
          <a href="https://ui.aceternity.com/" target="_blank" className="transition-transform transform hover:scale-110">
            <img src={acernityLogo} className="h-16 md:h-20" alt="Acernity logo" />
          </a>
        </div>

        {/* Main Content */}
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Vite + React + Recoil + Tailwind + Aceternity
        </h1>
        <div className="card bg-neutral-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto w-full">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
          >
            Count is {count}
          </button>
          <p className="mt-4 text-neutral-400">
            Edit <code className="bg-neutral-700 p-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>

        {/* Footer */}
        <p className="text-neutral-500 mt-8">
          Click on the logos above to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
