const isProduction = process.env.NODE_ENV === 'production'

export const serverUrl = isProduction ? 'https://furnitees.vercel.app' : 'http://localhost:3000'