import Image from './Image'
import Link from './Link'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  imgClassName?: string
}

const Card = ({ title, description, imgSrc, href, imgClassName }: CardProps) => (
  <div className="p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-decoration-700 border-opacity-60`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className={`w-full object-cover object-center md:h-64 lg:h-80 xl:h-96 ${imgClassName}`}
              width={641}
              height={384}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className={`object-cover object-center md:h-36 lg:h-48 xl:h-80 ${imgClassName}`}
            width={641}
            height={384}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-3 prose text-gray-200 max-w-none ">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
