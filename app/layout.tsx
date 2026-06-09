import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "@/styles/main.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Greg Thomas | Frontend Engineer & UX Designer",
  description: "Portfolio of Greg Thomas, a Chicago based Frontend Engineer and UX Designer with expertise in product strategy, modern web applications, and user-centered design.",
  openGraph: {
        title: "Greg Thomas | Frontend Engineer & UX Designer",
        description:
            "Frontend Engineer, UX Designer, and Product Owner specializing in transforming complex workflows and data into intuitive digital experiences.",
        url: "https://www.gregthomas.me",
        siteName: "Greg Thomas Portfolio",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Greg Thomas portfolio preview image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
