// components/MainSection.tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Heart, Lock, Copy, Play, Image as ImageIcon } from "lucide-react";

// Types
interface GridItem {
  id: number;
  type: "video" | "image";
  src: string;
  title: string;
  tag: string;
  isPremium: boolean;
  copyCount: number;
  likes: number;
}

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
];

// Mock data generator
const generateMockData = (start: number, count: number): GridItem[] => {
  const tags = [
    "Nature",
    "Urban",
    "Minimal",
    "Dark",
    "Gradient",
    "Ocean",
    "Forest",
    "Abstract",
  ];
  const titles = [
    "Mountain Escape",
    "City Lights",
    "Ocean Breeze",
    "Forest Path",
    "Sunset Vibes",
    "Urban Jungle",
    "Coastal Dreams",
    "Night Sky",
    "Desert Rose",
    "Arctic Wind",
    "Golden Hour",
    "Midnight Blue",
  ];

  return Array.from({ length: count }, (_, i) => {
    const id = start + i;
    const isVideo = Math.random() < 0.3;

    return {
      id,
      type: isVideo ? "video" : "image",
      src: isVideo
        ? videos[id % videos.length]
        : `https://picsum.photos/seed/${id}/800/600`,
      title: titles[id % titles.length],
      tag: tags[id % tags.length],
      isPremium: id % 3 === 0,
      copyCount: Math.floor(Math.random() * 50) + 1,
      likes: Math.floor(Math.random() * 200) + 10,
    };
  });
};

export default function MainSection() {
  const [items, setItems] = useState<GridItem[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const ITEMS_PER_PAGE = 8;
  const MAX_PAGES = 4; // After 4 pages, stop fetching

  // Load initial data
  useEffect(() => {
    const initialData = generateMockData(0, ITEMS_PER_PAGE);
    setItems(initialData);
    setPage(1);
  }, []);

  // Load more data
  const loadMore = useCallback(() => {
    if (loading || !hasMore || page >= MAX_PAGES) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newItems = generateMockData(page * ITEMS_PER_PAGE, ITEMS_PER_PAGE);
      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);

      if (page + 1 >= MAX_PAGES) {
        setHasMore(false);
      }

      setLoading(false);
    }, 500);
  }, [loading, hasMore, page]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore, hasMore, loading]);

  // Toggle like
  const toggleLike = (id: number) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight mb-4">
            Popular Templates
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the most loved hero sections by our community
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#f8f8f8] rounded-2xl overflow-hidden border border-gray-200/50 hover:border-gray-300/80 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
            >
              {/* Media Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                {/* Image or Video */}
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onError={(e) => {
                        const video = e.currentTarget;
                        video.style.display = "none";
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Like Button - Appears on Hover */}
                <button
                  onClick={() => toggleLike(item.id)}
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg"
                >
                  <Heart
                    size={14}
                    className={`transition-colors ${
                      likedItems.has(item.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-700"
                    }`}
                  />
                  <span className="text-xs font-medium text-gray-700">
                    {likedItems.has(item.id) ? item.likes + 1 : item.likes}
                  </span>
                </button>

                {/* Media Type Indicator */}
                <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium flex items-center gap-1.5">
                  {item.type === "video" ? (
                    <>
                      <Play size={10} />
                      <span>Video</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon size={10} />
                      <span>Image</span>
                    </>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    {/* Title - Bigger and Bold */}
                    <h3 className="text-lg font-bold text-black truncate">
                      {item.title}
                    </h3>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    {/* Copy Button */}
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0f0f0] hover:bg-[#e8e8e8] border border-gray-200/50 hover:border-gray-300 transition-all duration-200">
                      <Copy size={13} className="text-gray-600" />
                      <span className="text-xs font-medium text-gray-700">
                        Copy
                      </span>
                    </button>

                    {/* Premium Button */}
                    {item.isPremium && (
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50/80 hover:bg-amber-50 border border-amber-200/50 hover:border-amber-300 transition-all duration-200">
                        <Lock size={13} className="text-amber-600" />
                        <span className="text-xs font-medium text-amber-700">
                          Premium
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Tag - Simple Text, No Badge */}
                <p className="text-sm text-gray-500 font-medium">{item.tag}</p>
              </div>

              {/* Hover Overlay Border Animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black/5 pointer-events-none transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#f8f8f8] border border-gray-200">
              <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
              <span className="text-sm text-gray-600 font-medium">
                Loading more...
              </span>
            </div>
          </div>
        )}

        {/* End of Content */}
        {!hasMore && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f8f8f8] border border-gray-200">
              <span className="text-sm text-gray-500 font-medium">
                You've reached the end
              </span>
            </div>
          </div>
        )}

        {/* Intersection Observer Target */}
        <div ref={loadMoreRef} className="h-10" />
      </div>
    </section>
  );
}
