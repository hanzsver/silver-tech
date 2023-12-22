import Image from 'next/image';
import metadata from '../data/metadata';
import navlinks from '../data/navlinks';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className={`h-[60px] border-b border-b-[color:var(--greyOpacity200)] sticky top-0 left-0 z-50 w-full bg-white/[0.85] backdrop-blur-2xl`}
    >
      <div className={`max-w-6xl w-full h-full m-auto`}>
        <div>
          <Image
            src={`/logo.jpg`}
            alt="로고"
            width={40}
            height={40}
            objectFit={`cover`}
            className={`rounded-full`}
          />
          <span className={`mx-2 font-extralight text-lg`}>{metadata.title}</span>
        </div>
        <nav>
          {navlinks.map((nav) => (
            <Link href={nav.link} key={nav.title} className={`mr-5`} legacyBehavior>
              {nav.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
