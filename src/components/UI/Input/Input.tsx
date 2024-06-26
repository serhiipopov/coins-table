'use client'

import { useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { IconButton, InputProps } from '@/components'
import { Eye } from '../Icons'

export const Input = ({
  id,
  type,
  disabled,
  label,
  error,
  isError,
  hint,
  rightIcon,
  leftIcon,
  inputClassName,
  labelClassName,
  wrapperClassName,
  containerWrapperClassName,
  hintClassName,
  errorClassName,
  ...rest
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const [isShowPassword, setIsShowPassword] = useState(true)
  const isPasswordType = type === 'password'
  const toggleType = isShowPassword ? 'password' : 'text'

  const toggleShowPassword = () => {
    if (!disabled) {
      setIsShowPassword(prev => !prev)
    }
  }

  const focusInput = () => {
    ref.current?.focus()
  }

  return (
    <div className={twMerge('flex w-full flex-col', containerWrapperClassName)}>
      {label && (
        <label
          htmlFor={id}
          className={twMerge(`text-blu-dark' pb-1`, labelClassName)}
        >
          {label}
        </label>
      )}

      <div
        className={twMerge(
          ` focus:ring-border-dark flex h-12 w-full gap-1 rounded-lg border border-grey-medium bg-primary-white
        focus-within:border-blu-dark hover:border-blu-dark focus:border-blu-dark`,
          disabled &&
            'cursor-not-allowed border-grey-pale bg-grey-pale hover:border-transparent',
          isError && 'border-states-error hover:border-states-error',
          wrapperClassName,
        )}
      >
        {leftIcon && (
          <IconButton className='pl-3' disabled={disabled} onClick={focusInput}>
            {leftIcon}
          </IconButton>
        )}

        <input
          {...rest}
          ref={ref}
          id={id}
          type={isPasswordType ? toggleType : type}
          disabled={disabled}
          className={twMerge(
            `no-arrows-input-number w-full flex-1 rounded-lg border-0 bg-primary-white p-0 px-3 
            leading-6 shadow-none placeholder:translate-x-1 placeholder:text-grey-medium
            focus:shadow-none focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:bg-grey-pale`,
            leftIcon && 'pl-0',
            (rightIcon || isPasswordType) && 'pr-0',
            inputClassName,
          )}
        />

        {rightIcon && (
          <IconButton className='pr-3' disabled={disabled} onClick={focusInput}>
            {rightIcon}
          </IconButton>
        )}

        {isPasswordType && (
          <IconButton className='pr-3' onClick={toggleShowPassword}>
            <Eye className='stroke-grey-medium' off={isShowPassword} />
          </IconButton>
        )}
      </div>

      {isError && error && (
        <span className={twMerge('pt-1 text-states-error', errorClassName)}>
          {error}
        </span>
      )}

      {hint && (
        <div className={twMerge('pt-1 text-grey-dark', hintClassName)}>
          {hint}
        </div>
      )}
    </div>
  )
}
