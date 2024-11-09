import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "HealthHub - Wellness for Modern Life",
  description:
    "Comprehensive health, fitness, and wellness resources for a balanced lifestyle",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "Comprehensive Link Management",
    slug: "link-tools",
    tools: [
      {
        title: "Generate QR Codes",
        desc: "Create quick-access QR codes for your URLs, streamlining link sharing via mobile devices.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
      {
        title: "URL Shortening Service",
        desc: "Shorten lengthy URLs into manageable links that are simple to track and share.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "Track Link Performance",
        desc: "Monitor and analyze traffic metrics for your shortened URLs to gain insights on usage.",
        href: "https://free-url.short360s.com/stats",
      },
    ],
  },
  {
    title: "Essential SEO Tools",
    slug: "seo-tools-optimized",
    tools: [
      {
        title: "Check Meta Tags",
        desc: "Optimize meta tags on your site to improve search engine rankings and visibility.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Backlink Builder",
        desc: "Generate quality backlinks to improve site authority and search engine presence.",
        href: "https://tools360s.com/backlink-maker",
      },
      {
        title: "Redirect Path Checker",
        desc: "Identify any broken links or misdirected URLs affecting your site's SEO health.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Website Security Checker",
        desc: "Scan your website for security issues to protect against threats and malware.",
        href: "https://tools360s.com/safe-browsing",
      },
      {
        title: "View Cached Pages",
        desc: "See Google’s cached version of your pages to ensure accurate indexing.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "Google Index Checker",
        desc: "Verify your URLs’ presence on Google’s index to ensure optimal visibility.",
        href: "https://tools360s.com/google-index-checker/",
      },
    ],
  },
  {
    title: "Multifunctional Text Tools",
    slug: "text-utilities-suite",
    tools: [
      {
        title: "Text Difference Finder",
        desc: "Identify differences in text by comparing two versions side-by-side.",
        href: "https://tools360s.com/text-compare",
      },
      {
        title: "Word Counter",
        desc: "Calculate words, characters, and sentences in your text for word count compliance.",
        href: "https://tools360s.com/word-counter",
      },
    ],
  },
  {
    title: "Image Management & Editing",
    slug: "image-tools-suite",
    tools: [
      {
        title: "Crop Images",
        desc: "Precisely crop images to match your preferred aspect ratio and size.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Upload Images to Cloud",
        desc: "Easily upload images to cloud storage for secure and fast access.",
        href: "https://review360.info/upload-image",
      },
      {
        title: "Convert Image Formats",
        desc: "Switch between popular image formats like JPEG, PNG, and WebP effortlessly.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Apply Watermark",
        desc: "Add watermarks to protect your images with branding or copyright notices.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Resize Image Dimensions",
        desc: "Adjust the dimensions of your images to fit website or social media specifications.",
        href: "https://review360.info/image-resizer",
      },
      {
        title: "Compress Images",
        desc: "Reduce image file sizes for faster page loading without compromising quality.",
        href: "https://review360.info",
      },
    ],
  },
  {
    title: "General Utility Tools",
    slug: "misc-utilities",
    tools: [
      {
        title: "Code Formatter",
        desc: "Beautify and format HTML, CSS, JavaScript, and JSON code for readability.",
        href: "https://tools360s.com/code-formatter",
      },
      {
        title: "Browser Version Checker",
        desc: "Ensure your browser is up-to-date for the best performance and security.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Public IP Address Finder",
        desc: "Find your public IP address (IPv4 and IPv6) for network troubleshooting.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Generate Strong Passwords",
        desc: "Create secure passwords with a mix of characters for enhanced security.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Generate Invoices",
        desc: "Create polished invoices with service breakdowns and client information.",
        href: "https://tools360s.com/invoice-generator",
      },
    ],
  },
];
