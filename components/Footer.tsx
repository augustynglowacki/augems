import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="py-0 pt-16 pb-16 mt-16 text-gray-900 bg-gray-100 xl:mt-24 xl:pt-24">
      <div className="container flex flex-col xl:flex-row">
        <div className="order-first w-full max-xl:mb-10 sm:w-2/3 xl:w-3/12">
          <h2 className="mb-5 max-w-[300px] text-[21px] font-semibold !leading-[1.2] tracking-tighter max-xxs:text-lg md:mb-4 md:max-w-[400px] md:text-2xl">
            Crafting Digital Identities: Branding & Web Development
          </h2>
          <a
            aria-label={`Send me an e-mail`}
            href={`mailto:${siteMetadata.email}`}
            className="flex items-center transition group hover:text-primary-600 active:text-primary-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
              width="28"
              height="28"
              className="flex-shrink-0 inline-block h-full mr-2 transition fill-decoration-900 group-hover:fill-primary-600 group-active:fill-primary-800"
            >
              <path d="M2 5.5V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5ZM0 10H5V12H0V10ZM0 15H8V17H0V15Z"></path>
            </svg>
            <span>{siteMetadata.email}</span>
          </a>
        </div>
        <div className="flex flex-col flex-wrap justify-end w-full gap-x-20 xl:flex-row">
          <div className="w-full max-xl:mb-2 sm:w-1/2 xl:w-2/12">
            <h4 className="text-dark mb-2 mt-5 text-lg font-semibold tracking-[-0.035em] xl:mb-8 xl:mt-0">
              Quick Links
            </h4>
            <ul>
              <li>
                <Link href="/" className="inline-block mb-2 xl:mb-3">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="inline-block mb-2 xl:mb-3">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/projects" className="inline-block mb-2 xl:mb-3">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="inline-block">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full max-xl:mb-2 sm:w-1/2 xl:w-2/12">
            <div className="w-full ">
              <h4 className="text-dark mb-2 mt-5 text-lg font-semibold tracking-[-0.035em] xl:mb-8 xl:mt-0">
                Services
              </h4>
              <ul>
                <li>Services will be added soon :)</li>
              </ul>
            </div>
          </div>
          <div className="order-first w-full max-xl:mb-2 sm:w-1/2 xl:order-last xl:w-4/12">
            <h4 className="text-dark mb-2 text-lg font-semibold tracking-[-0.035em] xl:mb-8 xl:mt-0">
              Social Media
            </h4>
            <ul className="flex items-center mt-3 mb-3 space-x-4 xl:mb-6">
              <li>
                <SocialIcon kind="facebook" href={siteMetadata.facebook} size={7} theme="light" />
              </li>
              <li>
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={7} theme="light" />
              </li>
              <li>
                <SocialIcon kind="github" href={siteMetadata.github} size={7} theme="light" />
              </li>
              <li>
                <SocialIcon kind="instagram" href={siteMetadata.instagram} size={7} theme="light" />
              </li>
            </ul>
            <p className="hidden mt-16 text-base xl:block">
              &copy; {new Date().getFullYear()} {siteMetadata.author}
            </p>
          </div>
        </div>
        <p className="mt-8 text-base xl:hidden ">
          &copy; {new Date().getFullYear()} {siteMetadata.author}
        </p>
      </div>
    </footer>
  )
}
