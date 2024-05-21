'use client'

import { Fragment } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { BreadcrumbProps } from './Breadcrumb.types'
import { Chevron } from '@/components'

export const Breadcrumb = ({
  separator = '/',
  backText,
  backRoute,
  isBackPath = true,
}: BreadcrumbProps) => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)

  return (
    <div className='flex px-3 pt-3'>
      <ul className='s flex flex-row gap-2 pb-3'>
        {isBackPath && (
          <div className='flex w-fit pb-1 hover:cursor-pointer'>
            <Chevron className='stroke-blu-dark' direction='left' />
            <Link
              href={backRoute ?? ''}
              className='text-blu-dark hover:text-blu-medium'
            >
              {backText ?? ''}
            </Link>
          </div>
        )}
        {pathNames.length > 0 && (
          <span className='text-blu-dark'>{separator}</span>
        )}

        {pathNames.slice(0).map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const itemLink = link[0].toUpperCase() + link.slice(1, link.length)

          return (
            <Fragment key={index}>
              <li className='text-blu-dark hover:text-blu-medium'>
                <Link href={href} className=''>
                  {itemLink}
                </Link>
              </li>
              {pathNames.length !== index + 1 && (
                <span className='text-blu-dark'>{separator}</span>
              )}
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}
