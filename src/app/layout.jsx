import './globals.css';
import './home.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const themeBootstrap = `(function(){try{var t=localStorage.getItem('grh-theme');if(t==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}})();`;

export const metadata = {
  metadataBase: new URL('https://graphrag-hackathon.vercel.app'),
  title: { default: 'GraphRAG Inference Hackathon — by TigerGraph', template: '%s — GraphRAG Inference Hackathon' },
  description: 'GraphRAG Inference Hackathon by TigerGraph — an open benchmark for Graph + LLM systems. $700 pool · May 4–26, 2026 · online · global · beginner friendly.',
  openGraph: {
    type: 'website',
    url: 'https://graphrag-hackathon.vercel.app',
    siteName: 'GraphRAG Inference Hackathon',
    title: 'GraphRAG Inference Hackathon — by TigerGraph',
    description: 'Prove Graph beats Tokens. Build three pipelines side-by-side — LLM-Only, Basic RAG, GraphRAG — benchmark them, publish the numbers. $700 pool · May 4–26, 2026.',
    locale: 'en_US',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GraphRAG Inference Hackathon by TigerGraph',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TigerGraphDB',
    creator: '@TigerGraphDB',
    title: 'GraphRAG Inference Hackathon — by TigerGraph',
    description: 'Prove Graph beats Tokens. Build three pipelines side-by-side — LLM-Only, Basic RAG, GraphRAG — benchmark them, publish the numbers. $700 pool · May 4–26, 2026.',
    images: ['/assets/og-image.jpg'],
  },
  icons: { icon: '/assets/favicon.svg' },
};

export const viewport = {
  themeColor: '#0B0F1E',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
