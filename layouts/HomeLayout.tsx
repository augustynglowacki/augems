// 'use client';
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'
const MAX_DISPLAY = 5

export default function HomeLayout({ posts }) {
  return (
    <>
      <div className="container pt-6 mb-12 space-y-2 md:space-y-5">
        <div className="grid gap-8 pb-6 border-b border-decoration-600 xl:grid-cols-7 xl:pb-8">
          <div className="col-span-4 max-w-[700px]">
            <div className="mb-4 mr-3 flex items-center text-xs font-bold uppercase tracking-[0.15em] text-gray-200">
              <div className="mr-3">Augustyn Głowacki - Web Freelancer</div>
              <div className="hidden w-6 h-px bg-gray-200 xs:block"></div>
            </div>
            <h1 className="text-3xl font-semibold !leading-tight tracking-tight text-gray-100 sm:text-4xl md:text-6xl">
              <span className="text-primary">Revitalize</span> your online presence with a powerful
              website.
            </h1>
            <p className="mt-5 text-lg">
              Struggling to attract clients online?
              <br />
              Your current website feels like a mess?
              <br />
              Services you offer are falling behind on Google Maps? <br />
              Have an idea that needs a tailored web solution, but web agencies are
              too costly?
              <br /><br />
              If you relate to any of these problems, here's what I can do to help.
            </p>
            <div className="mt-6 space-y-5">
              <p className="flex items-center -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-primary"
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

                <span className="mx-2 -mt-0.5 leading-none">Web Design & Development</span>
              </p>

              <p className="flex items-center -mx-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-primary"
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
                <span className="mx-2 -mt-0.5 leading-none">Digital Image Rebranding</span>
              </p>

              <p className="flex items-center -mx-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-primary"
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

                <span className="mx-2 -mt-0.5 leading-none">Google Maps Business Profile Management</span>
              </p>
            </div>
          </div>
          <div className="col-span-3 hidden h-[580px] xl:block">
            <Image
              width={544}
              height={580}
              className="h-full w-full max-w-2xl rounded object-cover object-[50%,80%]"
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
