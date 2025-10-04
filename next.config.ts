import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/**",
      ),
    ],
  },
};

export default nextConfig;
