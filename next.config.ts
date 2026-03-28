import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents clickjacking — stops your site being embedded in iframes on other sites
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Stops browsers from guessing file types (prevents MIME-type attacks)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controls how much referrer info is sent when clicking links
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Forces HTTPS for 2 years — prevents downgrade attacks
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Restricts which browser features can be used
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Content Security Policy — controls what resources the page can load
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Allow Next.js inline scripts and Google Fonts
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Allow styles from self and Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Allow fonts from Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Allow images from self and data URIs
      "img-src 'self' data: blob:",
      // Allow form submissions to Formspree only
      "form-action 'self' https://formspree.io",
      // Allow connections to self and Formspree API
      "connect-src 'self' https://formspree.io",
      // Block all plugins (Flash, etc.)
      "object-src 'none'",
      // Prevent your page from being framed
      "frame-ancestors 'none'",
      // Force HTTPS for all resources
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Disable the X-Powered-By header so attackers can't fingerprint the stack
  poweredByHeader: false,

  images: {
    // Only allow images served from this domain
    remotePatterns: [],
  },
};

export default nextConfig;
