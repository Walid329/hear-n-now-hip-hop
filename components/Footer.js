import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6 mt-8">
      <div className="container mx-auto text-center">
        
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <Link
              href="/podcasts"
              className="no-underline text-white hover:text-sky-400 transition-colors duration-300"
            >
              Podcasts
            </Link>
          </li>
          <li>
            <Link
              href="/videos"
              className="no-underline text-white hover:text-sky-400 transition-colors duration-300"
            >
              Videos
            </Link>
          </li>
          <li>
            <Link
              href="/playlists"
              className="no-underline text-white hover:text-sky-400 transition-colors duration-300"
            >
              Playlists
            </Link>
          </li>
        </ul>

     
        <p className="text-gray-400 mb-4">
          © {new Date().getFullYear()} Hear n' Now Hip-Hop
        </p>

     
        <p className="text-sm text-gray-400">
          Written in{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-white hover:text-sky-400 transition-colors duration-300"
          >
            Next.js
          </a>{' '}
          and{' '}
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-white hover:text-sky-400 transition-colors duration-300"
          >
            React
          </a>{' '}
          by Walid Esse
        </p>
      </div>
    </footer>
  );
};

export default Footer;