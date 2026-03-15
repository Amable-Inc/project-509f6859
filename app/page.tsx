'use client';

import { useState } from 'react';

interface Profile {
  id: number;
  name: string;
  age: number;
  photo: string;
  bio: string;
  location: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: 'Diego',
    age: 28,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop',
    bio: 'Surfista y amante del ceviche 🏄‍♂️',
    location: 'Miraflores',
  },
  {
    id: 2,
    name: 'Santiago',
    age: 26,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
    bio: 'Arquitecto y fotógrafo en mis tiempos libres 📸',
    location: 'Barranco',
  },
  {
    id: 3,
    name: 'Mateo',
    age: 29,
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop',
    bio: 'Chef de cocina fusión peruana 🍽️',
    location: 'San Isidro',
  },
  {
    id: 4,
    name: 'Sebastián',
    age: 27,
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop',
    bio: 'Músico y compositor. Vivo para la música 🎸',
    location: 'Surco',
  },
  {
    id: 5,
    name: 'Andrés',
    age: 30,
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=1000&fit=crop',
    bio: 'Emprendedor tech. Coffee addict ☕',
    location: 'San Borja',
  },
  {
    id: 6,
    name: 'Lucas',
    age: 25,
    photo: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&h=1000&fit=crop',
    bio: 'Personal trainer y nutricionista 💪',
    location: 'La Molina',
  },
  {
    id: 7,
    name: 'Gabriel',
    age: 31,
    photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&h=1000&fit=crop',
    bio: 'Abogado corporativo y runner apasionado 🏃',
    location: 'Miraflores',
  },
  {
    id: 8,
    name: 'Nicolás',
    age: 24,
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&h=1000&fit=crop',
    bio: 'Diseñador gráfico. Arte y cultura 🎨',
    location: 'Barranco',
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const currentProfile = profiles[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeDirection(direction);
    
    if (direction === 'right') {
      setMatches(matches + 1);
    }

    setTimeout(() => {
      if (currentIndex < profiles.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
      setSwipeDirection(null);
    }, 300);
  };

  if (!currentProfile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-white text-3xl font-bold flex items-center gap-2">
            <span className="text-4xl">🔥</span>
            Lima Hotties
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold">
            💕 {matches} Matches
          </div>
        </div>

        {/* Card */}
        <div className="relative">
          <div
            className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
              swipeDirection === 'left' ? '-rotate-12 -translate-x-96 opacity-0' : ''
            } ${
              swipeDirection === 'right' ? 'rotate-12 translate-x-96 opacity-0' : ''
            }`}
          >
            <div className="relative h-[500px]">
              <img
                src={currentProfile.photo}
                alt={currentProfile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h2 className="text-3xl font-bold mb-1">
                  {currentProfile.name}, {currentProfile.age}
                </h2>
                <p className="text-sm mb-2 flex items-center gap-1">
                  📍 {currentProfile.location}
                </p>
                <p className="text-sm opacity-90">{currentProfile.bio}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={() => handleSwipe('left')}
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
            >
              <span className="text-3xl">❌</span>
            </button>
            <button
              onClick={() => handleSwipe('right')}
              className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
            >
              <span className="text-4xl">❤️</span>
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 text-center text-white/80 text-sm">
          {currentIndex + 1} / {profiles.length}
        </div>
      </div>
    </div>
  );
}
