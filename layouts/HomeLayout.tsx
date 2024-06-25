// 'use client';
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'
import RevealOnScroll from '@/components/RevealOnScroll'
import { AnimatedImage } from '@/components/AnimatedImage'

const MAX_DISPLAY = 5

const BulletPoint = ({ children }) => (
  <p className="flex items-center w-full -mx-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mx-2 h-[22px] w-[22px] flex-shrink-0 text-decoration-800 sm:h-6 sm:w-6"
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
    <span className="-mt-0.5 sm:mx-1">{children}</span>
  </p>
)

const CheckMark = ({ children }) => (
  <div className="flex flex-row items-center w-full -mx-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mx-2 h-[22px] w-[22px] flex-shrink-0 text-primary sm:h-6 sm:w-6"
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
    <h2 className="-mt-0.5 inline sm:mx-1">{children}</h2>
  </div>
)

export default function HomeLayout({ posts }) {
  return (
    <>
      <div className="container pt-6 mb-12 space-y-2 md:space-y-5 lg:pt-0 2xl:pt-6">
        <div className="pb-6 border-b border-decoration-600 lg:pb-8">
          <div className="grid gap-8 lg:grid-cols-12 2xl:grid-cols-7">
            <div className="col-span-7 max-w-[700px] 2xl:col-span-4">
              <RevealOnScroll variant="fade-up" delay={0.3}>
                <div className="mb-4 mr-3 flex items-center text-xs font-bold uppercase tracking-[0.15em] text-gray-200">
                  <div className="mr-3">Augustyn Głowacki - Web Freelancer</div>
                  <div className="hidden w-6 h-px bg-gray-200 xs:block"></div>
                </div>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={0.1}>
                <h1 className="text-3xl font-semibold !leading-tight tracking-tight text-gray-100 sm:text-4xl md:text-5xl 2xl:text-6xl">
                  <em className="not-italic text-primary">Revitalize</em> your <br />
                  online presence with
                  <br />a website you{' '}
                  <em className="inline-block not-italic border-b-2 border-b-primary">deserve.</em>
                </h1>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={0.5}>
                <div className="mt-6 space-y-2 2xl:text-lg">
                  <BulletPoint>Struggling to attract clients online?</BulletPoint>
                  <BulletPoint>Your current website feels like a mess?</BulletPoint>
                  <BulletPoint>Have an idea that needs a bespoke web solution?</BulletPoint>
                  <p className="pt-3">
                    If you relate with these problems, I'm here to help you by:
                  </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={0.7}>
                <div className="mt-5 space-y-3">
                  <CheckMark>Transforming your business goals into a website strategy</CheckMark>
                  <CheckMark>Designing a conversion-focused website layout</CheckMark>
                  <CheckMark>
                    Developing a modern & fast website with a robust content management
                  </CheckMark>
                </div>
              </RevealOnScroll>
            </div>

            <AnimatedImage
              width={544}
              height={580}
              wrapperClassName="hidden lg:col-span-5 lg:block lg:h-[485px] 2xl:col-span-3 2xl:h-[540px]"
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
