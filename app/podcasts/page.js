'use client';

import { posts } from '@/data/posts';

export default function PodcastsPage() {
  const podcasts = posts.filter(post => post.type === 'podcast');

  return (
    <div className="min-h-screen bg-[#FDD9B7] text-black font-['Gentium Book Basic', serif]">
      <header className="bg-black text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold hover:text-sky-400 transition duration-300"
          >
            ← Back to Home
          </a>
          <h1 className="text-3xl md:text-4xl font-bold">Podcasts</h1>
        </div>
      </header>

      <div className="container mx-auto p-4 max-w-4xl">
        <h2 className="text-2xl font-semibold text-center my-8">Podcasts</h2>

        {podcasts.length === 0 && (
          <p className="text-center text-gray-600 py-8">No podcasts available.</p>
        )}

        {podcasts.map((podcast) => (
          <div
            key={podcast.id}
            className="mb-8 bg-white rounded-lg p-6 shadow-lg border-2 border-black"
          >
            <h3 className="text-xl font-bold mb-4">{podcast.title}</h3>

            <iframe
              style={{ borderRadius: '12px' }}
              src={podcast.embed} 
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title={podcast.title}
              loading="lazy"
            ></iframe>

            <p className="mt-4">{podcast.description}</p>

            {/* Listen Now button */}
            <a
              href={podcast.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-sky-400 hover:text-black transition duration-300"
            >
              Listen Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
