import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin:"anonymous",
  images:{
    domains:[
      'uploadthing.com', 
      'utfs.io', 
      'subdomain', 
      'files.stripe.com'
    ]
  },
  reactStrictMode: false,
};

export default nextConfig;
