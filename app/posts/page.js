'use client';

import { useState } from 'react';
import { posts } from '@/data/posts';

export default function PostsPage() {
  const [filter, setFilter] = useState('all');

  const filteredPosts = filter === 'all'
    ? posts
    : posts.filter(post => post.type === filter);

  return (
    <div className="min-h-screen bg-[#FDD9B7] text-black font-['Gentium Book Basic', serif] flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold hover:text-sky-400 transition duration-300">
            ← Back to Home
          </a>
          <h1 className="text-3xl md:text-4xl font-bold">Posts</h1>
        </div>
      </header>

      {/* Main content wrapper to add padding & spacing */}
      <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">
        {/* Filter Buttons */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto mb-8">
  {['all', 'podcast', 'video', 'playlist'].map(type => (
    <button
      key={type}
      onClick={() => setFilter(type)}
      className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
        filter === type
          ? 'bg-black text-white'
          : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
      }`}
    >
      {type === 'all'
        ? 'All Posts'
        : type === 'podcast'
        ? '🎧 Podcasts'
        : type === 'video'
        ? '📹 Videos'
        : '🎵 Playlists'}
    </button>
  ))}
</div>


        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-black hover:shadow-xl transition duration-300 hover:scale-105"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {/* Type Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-sm font-semibold ${
                  post.type === 'podcast'
                    ? 'bg-purple-600'
                    : post.type === 'video'
                    ? 'bg-red-600'
                    : 'bg-green-600'
                }`}>
                  {post.type === 'podcast'
                    ? '🎧 Podcast'
                    : post.type === 'video'
                    ? '📹 Video'
                    : '🎵 Playlist'}
                </div>
                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm">
                  {post.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">{post.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-sky-400 hover:text-black transition duration-300">
                      {post.type === 'podcast'
                        ? 'Listen Now'
                        : post.type === 'video'
                        ? 'Watch Now'
                        : 'View Playlist'}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No posts message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No {filter} posts found.</p>
          </div>
        )}
      </main>
    </div>
  );
}
