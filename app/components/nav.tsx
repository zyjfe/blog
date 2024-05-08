'use client';

import Link from 'next/link'
import RcMenu from 'rc-menu/lib';
import "rc-menu/assets/index.css";

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/home': {
    name: 'main',
  },
  '/counter': {
    name: 'counter',
  },
  '/quotes': {
    name: 'quotes',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <ul className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <li>
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  >
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export function NavMenu(props) {
  
  const { posts } = props;

  return <div>
    <RcMenu
      mode="inline"
      items={[
        {
          label: '学习Node.js',
          key: 'nodejs',
        },
        {
          label: '经营health',
          key: 'health',
        },
        {
          label: '团队产出',
          // key: 'team',
          type: "group",
          children: posts,
        }
      ]}
    />
  </div>
}