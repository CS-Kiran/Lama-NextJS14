/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [

            // here you can set protocols and host websites
            {
                protocol: "https",
                hostname: "images.pexels.com"
            }

            // here you can add image domain urls
            
        ] 
    }
};

export default nextConfig;
