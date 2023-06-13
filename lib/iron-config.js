export const ironOptions = {
    cookieName: 'session',
    password: 'complex_password_at_least_32_characters_long',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  }
  