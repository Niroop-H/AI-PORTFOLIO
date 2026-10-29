import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://niroop-h-portfolio.vercel.app";
const imageUrl = `${siteUrl}/niroop-h.jpeg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Niroop H — Founder, Engineer & DeepTech Builder",
  description:
    "Niroop H is a computer science engineer and Founder & CEO of MAH Quantum, building across AI systems, advanced computing, semiconductor technology and applied research.",
  keywords: [
    "Niroop H", "MAH Quantum", "Artificial Intelligence", "DeepTech",
    "Advanced Computing", "Semiconductors", "RTL Verification",
    "Research and Development", "AI Systems"
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Niroop H — Founder, Engineer & DeepTech Builder",
    description: "Building at the intersection of AI, advanced computing and research.",
    url: siteUrl,
    siteName: "Niroop H",
    type: "profile",
    images: [{ url: imageUrl, width: 832, height: 1088, alt: "Portrait of Niroop H" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Niroop H — Founder, Engineer & DeepTech Builder",
    description: "Founder & CEO of MAH Quantum. AI systems, advanced computing and research.",
    images: [imageUrl]
  },
  robots: { index: true, follow: true }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "Niroop H — Professional Portfolio",
  "url": siteUrl,
  "mainEntity": {
    "@type": "Person",
    "name": "Niroop H",
    "jobTitle": "Founder & Chief Executive Officer",
    "worksFor": { "@type": "Organization", "name": "MAH Quantum", "url": "https://mahquantum.tech/" },
    "url": siteUrl,
    "sameAs": [
      "https://www.linkedin.com/in/nirooph",
      "https://github.com/Niroop-H",
      "https://mahquantum.tech/",
      "https://research.mahquantum.tech/"
    ],
    "knowsAbout": [
      "Artificial Intelligence", "DeepTech", "Advanced Computing",
      "Semiconductor Design", "RTL Verification", "Research and Development"
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}