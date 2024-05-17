import { AuthErrorCode } from '@/constants'

export const getAuthErrorMessage = (
  code: string,
  email?: string,
  errorMessage?: string,
) => {
  switch (code) {
    case AuthErrorCode.EMAIL_ALREADY:
      return `Email address ${email} already in use.`
    case AuthErrorCode.INVALID_EMAIL:
      return `Email address ${email} is invalid.`
    case AuthErrorCode.NOT_ALLOWED:
      return `Error during sign up.`
    case AuthErrorCode.WEAK_PASSWORD:
      return 'Password is not strong enough. Add additional characters including special characters and numbers.'
    case AuthErrorCode.INVALID_CREDENTIAL:
      return 'Inactive account'
    default:
      return errorMessage
  }
}
