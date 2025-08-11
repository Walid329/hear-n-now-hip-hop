'use client';

import { posts } from '@/data/posts';

export default function VideosPage() {
  // Filter only posts of type 'video'
  const videos = posts.filter(post => post.type === 'video');

  return (
    <div className="min-h-screen bg-[#FDD9B7] text-black font-['Gentium Book Basic', serif]">
      {/* Header */}
      <header className="bg-black text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold hover:text-sky-400 transition duration-300"
          >
            ← Back to Home
          </a>
          <h1 className="text-3xl md:text-4xl font-bold">Videos</h1>
        </div>
      </header>

      <div className="container mx-auto p-4 max-w-4xl">
        <h2 className="text-2xl font-semibold text-center my-8">Videos</h2>

        {videos.length === 0 && (
          <p className="text-center text-gray-600 py-8">No videos available.</p>
        )}

        {/* Render each video */}
        {videos.map((video) => (
          <div
            key={video.id}
            className="mb-8 bg-white rounded-lg p-6 shadow-lg border-2 border-black"
          >
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={video.embed} // embed URL for iframe
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <h3 className="mt-4 font-bold text-xl">{video.title}</h3>
            <p className="mt-2">{video.description}</p>

            {/* Watch Now button */}
            <a
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-sky-400 hover:text-black transition duration-300"
            >
              Watch Now
            </a>
          </div>
        ))}

        {/* Optional: More videos coming soon */}
        <div className="text-center py-8">
          <p className="text-lg text-gray-600"></p>
        </div>
      </div>
    </div>
  );
}
