// components/MainSection.tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Heart, Copy, Play, Image as ImageIcon, Check } from "lucide-react";
import { contentData, GridItem } from "@/public/data/content";

export default function MainSection() {
  const [items, setItems] = useState<GridItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const ITEMS_PER_PAGE = 8;

  // Load initial data
  useEffect(() => {
    const initialItems = contentData.slice(0, ITEMS_PER_PAGE);
    setItems(initialItems);
    setHasMore(initialItems.length < contentData.length);
  }, []);

  // Load more data
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const nextPage = page + 1;
      const start = 0;
      const end = nextPage * ITEMS_PER_PAGE;
      const newItems = contentData.slice(start, end);

      setItems(newItems);
      setPage(nextPage);
      setHasMore(end < contentData.length);
      setLoading(false);
    }, 300);
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

  // Copy prompt to clipboard
  const handleCopy = async (item: GridItem) => {
    try {
      await navigator.clipboard.writeText(item.prompt);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
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
              <img
                src={item.src}
                alt={item.title}
                // className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                className="w-full h-full object-cover rounded-[25px] object-top hover:object-bottom transition-[object-position] duration-3000 ease-in-out cursor-pointer"
                loading="lazy"
              />

              {/* Like Button - Appears on Hover */}
              <button
                onClick={() => toggleLike(item.id)}
                className="absolute cursor-pointer top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg"
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

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(item)}
                  className="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0f0f0] hover:bg-[#e8e8e8] border border-gray-200/50 hover:border-gray-300 transition-all duration-200 shrink-0"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check size={13} className="text-green-600" />
                      <span className="text-xs font-medium text-green-600">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} className="text-gray-600" />
                      <span className="text-xs font-medium text-gray-700">
                        Copy
                      </span>
                    </>
                  )}
                </button>
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
      {!hasMore && items.length > 0 && (
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f8f8f8] border border-gray-200">
            <span className="text-sm text-gray-500 font-medium">
              You've reached the end 🎉
            </span>
          </div>
        </div>
      )}

      {/* Intersection Observer Target */}
      {hasMore && <div ref={loadMoreRef} className="h-10" />}
    </div>
  );
}
