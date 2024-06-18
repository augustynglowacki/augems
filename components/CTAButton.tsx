import Link from 'next/link'
import React, { FC } from 'react'

interface CTAButtonProps {
  href: string
  className?: string
  children?: React.ReactNode
}

const CTAButton: FC<CTAButtonProps> = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`augems-btn rounded text-white relative flex w-max cursor-pointer items-center overflow-hidden bg-transparent -mr-5 px-5 py-3 text-lg transition-all lg:-mr-6 lg:px-6 font-medium ${className}`}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 w-6 h-6 ml-2 augems-btn-arrow text-primary sm:h-7 sm:w-7"
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
    </Link>
  )
}

export default CTAButton
