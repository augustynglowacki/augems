/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...rest} className={`hover:text-primary-400 active:text-primary-800 transition ${rest.className}`} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} className={`hover:text-primary-400 active:text-primary-800 transition ${rest.className}`} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} className={`hover:text-primary-400 active:text-primary-800 transition ${rest.className}`} />
}

export default CustomLink