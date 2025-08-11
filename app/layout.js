import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: "Hear n' Now Hip-Hop",
  description: 'With Howie and Mickies!',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#ffffff',
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Hear n' Now Hip-Hop",
    description: 'With Howie and Mickies!',
    url: 'https://hear-n-now-hip-hop.vercel.app',
    images: [
      {
        url: '/images/imessage-preview.png',
        width: 1200,
        height: 630,
        alt: 'Hear n Now Hip-Hop Preview',
      },
    ],
    siteName: "Hear n' Now Hip-Hop",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hear n' Now Hip-Hop",
    description: 'With Howie and Mickies!',
    images: ['/images/imessage-preview.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FDD9B7] text-black font-['Gentium Book Basic', serif]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
