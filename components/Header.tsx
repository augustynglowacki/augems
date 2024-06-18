import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from './Image'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import CTAButton from '@/components/CTAButton'

const Header = () => {
  return (
    <header className="container flex items-center justify-between pt-4 pb-4 lg:pb-10 lg:pt-5">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <img
              alt="Augems Logo representing a cartoon representation of me, the author of this website."
              src="/static/images/logo.png"
              className="lg:w-18 h-auto w-16 md:w-20 2xl:w-[110px]"
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-100 sm:block sm:pl-6"
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton /> */}
      </div>
        {/* <MobileNav /> */}
        <CTAButton href="mailto:augustyndev@gmail.com" className="">
          Let's connect
        </CTAButton>
    </header>
  )
}

export default Header
