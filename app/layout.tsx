import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Next.js Portfolio Starter',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html
        lang="en"
        className={cx(
          'text-black bg-white dark:text-white dark:bg-black',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
          <header>
            <h1>My wonderful blog</h1>
            <p>My tagline</p>
          </header>
          <aside>
            <nav>
              <h2>My blogro11</h2>
              <ul>
                <li><a href='https://blog.example.com/'>Example Blog</a></li>
              </ul>
            </nav>
            <nav>
              <h2>Archives</h2>
              <ol>
                <li><a href='/last-post'>My last post</a></li>
                <li><a href='/first-post'>My first post</a></li>
              </ol>
            </nav>
          </aside>
          <aside>
            <h1>Twitter Feed</h1>
            <blockquote cite="https://twitter.example.net/t31351234">
              I am on vacation, writing my blog.
            </blockquote>
            <blockquote cite="https://twitter.example.net/t21219752">
              I am going to go on vacation soon.
            </blockquote>
          </aside>
          <article>
            <h2>My last post</h2>
            <p>This is my last post.</p>
            <footer>
              <p>
                <a href="/last-post" rel="bookmark">Permalink</a>
              </p>
            </footer>
          </article>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
          <footer>This is footer</footer>
        </body>
      </html>
    </StoreProvider>
  )
}
