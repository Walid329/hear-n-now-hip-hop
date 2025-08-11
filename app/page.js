import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="bg-[#FDD9B7] text-black min-h-screen flex flex-col font-['Gentium Book Basic', serif] items-center px-4"
      style={{ paddingTop: '5rem', paddingBottom: '1rem' }} 
    >
      {/* Top content */}
      <div className="flex flex-col items-center gap-12">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg leading-tight text-center">
          Welcome to Hear n' Now Hip-Hop
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-center">
          With Howie and Mickies!
        </p>

        <Link href="/posts" passHref>
          <button
            className="w-36 h-36 bg-black text-white border-2 border-black
                       flex flex-col items-center justify-center px-4
                       font-semibold shadow-md transition duration-300 ease-in-out
                       hover:bg-sky-400 hover:text-black hover:scale-105 hover:shadow-lg"
            aria-label="View Posts"
            style={{ borderRadius: '50%', lineHeight: '1.1' }}
          >
            View<br />Posts
          </button>
        </Link>
      </div>


      <div
        className="mt-auto max-w-md text-center text-sm leading-relaxed text-gray-600"
        style={{ marginBottom: '-1.5rem' }} 
      >
        This is an archive from 2021 and 2022.<br />
        To see more from Howie and Mickies, click{' '}
        <a
          href="https://solo.to/hnnhiphop"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-sky-400"
        >
          here
        </a>.
      </div>
    </div>
  );
}
