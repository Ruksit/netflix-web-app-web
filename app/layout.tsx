import Navbar from "@/components/Navbar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netflix Web App Clone",
  description:
    "Watch trending movies and TV shows anytime, anywhere with this Netflix Clone built using Next.js and TypeScript.",
  keywords: [
    "nextjs",
    "typescript",
    "netflix clone",
    "movie streaming",
    "tv shows",
    "web app",
    "entertainment",
  ],
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default layout;
