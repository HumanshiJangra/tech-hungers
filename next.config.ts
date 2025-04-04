// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/(.*)",
        destination: "https://techhungers.com/:path*",
        permanent: true,
      },
    ];
  },
};
 
export default nextConfig;
 
 