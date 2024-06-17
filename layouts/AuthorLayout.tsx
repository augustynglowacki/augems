import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="container">
        <div className="pt-6 pb-4 space-y-2 border-b lg:pt-0 2xl:pt-6 border-decoration-600 md:space-y-5 lg:pb-8">
          <div className="mb-4 flex items-center text-xs font-semibold uppercase tracking-[0.15em] text-gray-200">
            <div className="mr-3">Get to know me</div>
            <div className="w-6 h-px bg-gray-200"></div>
          </div>
          <h1 className="text-3xl font-semibold !leading-tight tracking-tight text-gray-100 sm:text-4xl md:text-5xl 2xl:text-6xl">
            About me
          </h1>
        </div>
        <div className="items-start space-y-2 lg:grid lg:grid-cols-8 lg:gap-x-12 lg:space-y-0">
          <div className="flex flex-col items-center pt-8 lg:col-span-3">
            {avatar && (
              <Image
                src={avatar}
                alt="Photo of me, Augustyn, taken in Katowice, Poland."
                width={620}
                height={600}
                className="h-56 w-2/3 rounded object-cover object-[50%,10%] sm:h-64 lg:h-full lg:w-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-200 ">{occupation}</div>
            <div className="text-gray-200 ">{company}</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              {/* <SocialIcon kind="twitter" href={twitter} /> */}
            </div>
          </div>
          <div className="pt-8 pb-8 prose max-w-none lg:col-span-5">{children}</div>
        </div>
      </div>
    </>
  )
}
