import Link from 'next/link'

type Props = {
  href: string
}

export const CustomLink = (props: Props): JSX.Element => {
  const href = props.href
  const isInternalLink = href.startsWith('/') || href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
