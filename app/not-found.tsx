import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-6xl font-semibold leading-9 tracking-tight text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
        <Link
          href="/"
          className="inline px-4 py-2 text-sm font-semibold leading-5 text-white transition-colors duration-150 border border-transparent rounded-lg shadow focus:shadow-outline-blue bg-secondary focus:outline-none hover:bg-secondary-500"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
