import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import navlinks from '../../data/navlinks';
import ThemeToggle from './ThemeToggle';

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Header() {
  return (
    <header
      className={`h-[var(--navbar-height)] border-b border-solid border-b-[color:var(--greyOpacity200)] sticky top-0 left-0 z-50 w-full bg-white/[0.85] backdrop-blur-2xl dark:bg-[color:var(--theme)]`}
    >
      <div className={`max-w-6xl w-full h-full m-auto`}>
        <div className={`flex justify-between w-11/12 m-auto max-w-[calc(100%_-_48px)] h-full`}>
          <div className={`flex items-center min-h-[var(--navbar-height)] mr-6`}>
            <Link href="/" className={`${montserrat.className} font-normal text-xl tracking-tight`}>
              <em className={`font-semibold`}>silver</em> tech
            </Link>
          </div>
          <nav className={`flex items-center min-h-[var(--navbar-height)]`}>
            {/* {navlinks.map((nav) => (
              <Link href={nav.link} key={nav.title} className={`mr-5`} legacyBehavior>
                {nav.title}
              </Link>
            ))} */}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
