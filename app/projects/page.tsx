import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="container divide-y divide-decoration-600">
        <div className="pt-6 pb-4 space-y-2 lg:pt-0 2xl:pt-6 md:space-y-5 lg:pb-8">
          <div className="mb-4 flex items-center text-xs font-semibold uppercase tracking-[0.15em] text-gray-200">
            <div className="mr-3">Some of my work</div>
            <div className="w-6 h-px bg-gray-200"></div>
          </div>
          <h1 className="text-3xl font-semibold !leading-tight tracking-tight text-gray-100 sm:text-4xl md:text-5xl 2xl:text-6xl">
            Projects
          </h1>
          {/* <p className="text-lg leading-7 text-gray-200 ">
            Some of my non-NDA work.
          </p> */}
        </div>
        <div className="py-12">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                imgClassName={
                  d.href === 'https://github.com/augustynglowacki/MoviePicker'
                    ? '!object-contain bg-black'
                    : d.href === 'https://github.com/augustynglowacki/SocialBooks'
                      ? '!object-contain bg-white'
                      : ''
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
