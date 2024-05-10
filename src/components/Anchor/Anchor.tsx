import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { AnchorProps } from '@/components'

export const Anchor = ({
  primary = true,
  text,
  className,
  url = '',
  ...props
}: AnchorProps) => {
  return (
    <Link
      className={twMerge(
        'w-fit cursor-pointer border-b border-blu-dark text-blu-dark transition-colors duration-300 hover:text-grey-dark',
        primary
          ? 'hover:border-primary-white hover:text-grey-dark'
          : 'border-b-primary-white hover:border-blu-medium',
        className,
      )}
      href={url}
      {...props}
    >
      {text}
    </Link>
  )
}
