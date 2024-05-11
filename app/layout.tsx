import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import StoreProvider from './StoreProvider';
import Layout from '@zx/backstage-components/dist/Layout.min';
import '@zx/backstage-components/dist/Layout.min.css';
import { Navbar, NavMenu } from './components/nav'
import Header from './components/Header'
import styles from './index.module.scss';
import { getBlogPosts } from 'app/blog/utils';

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
  
  const allBlogs = getBlogPosts();

  const posts = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    } 
    return 1;
  }).map((post, index) => (
    {
      label: post.metadata.title,
      key: `group-menu-${index}`,
      ...post,
    }
  ));

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
        <body className="antialiased mx-4 mt-8 lg:mx-auto">
          <div className={styles.layout}>
          <Layout>
            <Layout.Header>
              <Header/>
            </Layout.Header>
            <Layout sider>
              <Layout.Sider>
                <NavMenu posts={posts}/>
              </Layout.Sider>
              <Layout.Content>
              {children}
            </Layout.Content>
            </Layout>
            <Layout.Footer>
              Footer
            </Layout.Footer>
          </Layout>
          </div>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Analytics />
            <SpeedInsights />
          </main>
        </body>
      </html>
    </StoreProvider>
  )
}
