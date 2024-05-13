import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  Mastodon,
  Threads,
  Instagram,
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
  theme?: 'dark' | 'light'
}

const SocialIcon = ({ kind, href, size = 8, theme = 'dark' }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]
  const textColor = theme === 'dark' ? 'text-primary-400' : 'text-decoration-900'

  return (
    <a
      className={`text-sm ${textColor} transition hover:text-primary-600`}
      aria-label={kind}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current ${textColor} hover:text-primary-600 transition h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
