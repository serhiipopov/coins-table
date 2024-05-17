export enum AuthErrorCode {
  EMAIL_ALREADY = 'auth/email-already-in-use',
  INVALID_EMAIL = 'auth/invalid-email',
  NOT_ALLOWED = 'auth/operation-not-allowed',
  WEAK_PASSWORD = 'auth/weak-password',
  INVALID_CREDENTIAL = 'auth/invalid-credential',
}
