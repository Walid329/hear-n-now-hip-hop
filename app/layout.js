import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph for social previews (Facebook, iMessage, etc) */}
        <meta property="og:title" content="Hear n' Now Hip-Hop" />
        <meta property="og:description" content="With Howie and Mickies!" />
        <meta property="og:image" content="/images/imessage-preview.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hear n' Now Hip-Hop" />
        <meta name="twitter:description" content="With Howie and Mickies!" />
        <meta name="twitter:image" content="/images/imessage-preview.png" />
      </Head>

      <body className="min-h-screen flex flex-col bg-[#FDD9B7] text-black font-['Gentium Book Basic', serif]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
