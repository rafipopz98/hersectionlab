"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [bottomMounted, setBottomMounted] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  // ----- entrance triggers -----
  useEffect(() => {
    const t1 = setTimeout(() => setMounted(true), 100);
    const t2 = setTimeout(() => setBottomMounted(true), 400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // ----- video playback rate -----
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onMeta = () => {
      video.playbackRate = 1.25;
    };
    video.addEventListener("loadedmetadata", onMeta);
    return () => video.removeEventListener("loadedmetadata", onMeta);
  }, []);

  // ----- mouse parallax -----
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetPos.current.x = ((e.clientX - cx) / cx) * 20;
    targetPos.current.y = ((e.clientY - cy) / cy) * 20;
  }, []);

  const animateParallax = useCallback(() => {
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.06;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.06;
    if (videoRef.current) {
      gsap.set(videoRef.current, {
        x: currentPos.current.x,
        y: currentPos.current.y,
      });
    }
    rafId.current = requestAnimationFrame(animateParallax);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animateParallax);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove, animateParallax]);

  // Scroll indicator handler
  const scrollToContent = () => {
    const nextSection = document.querySelector("#how-it-works");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative h-[80vh] min-h-180 overflow-hidden bg-black"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute h-full w-full object-cover"
          style={{
            transform: "scale(1.08)",
            transformOrigin: "center",
          }}
          src="/video.mp4"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Hero */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6">
        {/* Label */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/85">
            Production-ready UI prompts
          </p>
        </div>

        {/* Heading */}
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="mx-auto max-w-5xl text-center text-[clamp(52px,6vw,92px)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
            Turn ideas into
            <br />
            beautiful interfaces.
          </h1>
        </div>

        {/* Description + CTA */}
        <div
          className={`mt-10 flex max-w-xl flex-col items-center gap-8 text-center transition-all duration-1000 ease-out ${
            bottomMounted
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-[23px] leading-7 tracking-[-0.01em] font-semibold text-white/85">
            Discover production-ready UI prompts for Lovable, Cursor, Claude
            Code, v0 and more. Build beautiful websites in minutes instead of
            starting from scratch.
          </p>

          <button
            type="button"
            onClick={scrollToContent}
            className="group relative rounded-full bg-white px-7 py-3.5 text-[15px] font-medium tracking-[-0.02em] text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.28)]"
          >
            Browse Sections
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToContent}
            className="text-white/40 transition-colors duration-300 hover:text-white/70"
            aria-label="Scroll"
          >
            <ArrowDown size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
