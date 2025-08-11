import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="bg-[#FDD9B7] text-black min-h-screen flex flex-col font-['Gentium Book Basic', serif] items-center px-4 pt-20"
    >
      {/* Main content with padding bottom so footer text has space */}
      <main className="flex flex-col items-center flex-grow w-full max-w-4xl pb-24">
        {/* Welcome text */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg leading-tight text-center mb-6">
          Welcome to
        </h1>

        {/* Hero image and button */}
        <div className="flex flex-col items-center gap-16">
          <img
            src="/images/imessage-preview.png"
            alt="Hear n' Now Hip-Hop Hero"
            className="max-w-full h-auto rounded-lg shadow-lg"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />

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
      </main>

      {/* Footer text */}
      <div
        className="w-full max-w-4xl text-center text-sm leading-relaxed text-gray-600 px-4 mb-6"
        style={{ userSelect: 'none' }}
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
