// import "dotenv/config";
/**
{
  "scripts": {
    "build": "SKIP_ENV_VALIDATION=true next build"
  }
}
 * for Docker builds.
 */
await import("./src/env.js"); // eslint-disable-line import/no-unassigned-import

/** @type {import("next").NextConfig} */

const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.hydeparkwinterwonderland.com",
      },
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https",
        hostname: "cdn.iconscout.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
      },
    ],
  },
};

export default config;
