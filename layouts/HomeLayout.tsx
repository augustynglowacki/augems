// 'use client';
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

const BulletPoint = ({ children }) => (
  <p className="flex items-center -mx-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-[22px] h-[22px] sm:w-6 sm:h-6 mx-2 text-decoration-800"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
    <span className="sm:mx-1 -mt-0.5">{children}</span>
  </p>
)

const CheckMark = ({ children }) => (
  <div className="flex flex-row items-center -mx-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-[22px] h-[22px] sm:w-6 sm:h-6 mx-2 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <h2 className="sm:mx-1 -mt-0.5 inline">{children}</h2>
  </div>
)

export default function HomeLayout({ posts }) {
  return (
    <>
      <div className="container pt-6 mb-12 space-y-2 lg:pt-0 2xl:pt-6 md:space-y-5">
        <div className="grid gap-8 pb-6 border-b border-decoration-600 lg:grid-cols-12 2xl:grid-cols-7 lg:pb-8">
          <div className="col-span-7 2xl:col-span-4 max-w-[700px]">
            <div className="mb-4 mr-3 flex items-center text-xs font-bold uppercase tracking-[0.15em] text-gray-200">
              <div className="mr-3">Augustyn Głowacki - Web Freelancer</div>
              <div className="hidden w-6 h-px bg-gray-200 xs:block"></div>
            </div>
            <h1 className="text-3xl font-semibold !leading-tight tracking-tight text-gray-100 sm:text-4xl md:text-5xl 2xl:text-6xl">
              <span className="text-primary">Revitalize</span> your <br/>online presence with<br/> a powerful
              website.
            </h1>
            <div className="mt-6 space-y-2 2xl:text-lg">
              <BulletPoint>Struggling to attract clients online?</BulletPoint>
              <BulletPoint>Your current website feels like a mess?</BulletPoint>
              <BulletPoint>Lagging behind competition on Google Maps?</BulletPoint>
              <BulletPoint>Have an idea that needs a tailored web solution?</BulletPoint>
              <p className="pt-3">
                If you relate with any of these problems, here's what I can do to solve them:
              </p>
            </div>
            <div className="mt-5 space-y-3">
              <CheckMark>Conversion Focused Web Design & Development</CheckMark>
              <CheckMark>Brand Identity Refresh: Logo, Color Palette & Fonts</CheckMark>
              <CheckMark>Google Maps: Business Profile Management</CheckMark>
            </div>
          </div>
          <div className="lg:col-span-5 2xl:col-span-3 hidden lg:h-[515px] 2xl:h-[573px] lg:block">
            <Image
              width={544}
              height={573}
              className="h-full w-full max-w-2xl rounded object-cover lg:object-[50%,67%] 2xl:object-[50%,80%]"
              src="/static/images/hero.jpg"
              loading="eager"
              alt="Me - Augustyn Głowacki - Web Freelancer"
            />
          </div>
        </div>
      </div>
      {/* <ul className="container divide-y divide-decoration-600">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { slug, date, title, summary, tags } = post
          return (
            <li key={slug} className="my-12">
              <h2 className="text-2xl font-semibold !leading-tight tracking-tight text-gray-100 sm:text-3xl md:text-5xl pb-8"> Latest Posts </h2>
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-200">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap mt-2">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose text-gray-200 max-w-none ">{summary}</div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-primary-500 hover:text-primary-400"
                        aria-label={`Read more: "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul> */}
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
