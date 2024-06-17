import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from './Image'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'


const Header = () => {
  return (
      <header className="container flex items-center justify-between pt-4 pb-4 lg:pb-10 lg:pt-5">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <img
                alt="Augems Logo representing a cartoon representation of me, the author of this website."
                src="/static/images/logo.png"
                className="h-auto w-16 md:w-20 lg:w-24 2xl:w-[110px]"
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center leading-5 sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden font-medium text-gray-100 sm:block"
              >
                {link.title}
              </Link>
            ))}
          {/* <SearchButton /> */}
          <MobileNav />
        </div>
      </header>
  )
}

export default Header
