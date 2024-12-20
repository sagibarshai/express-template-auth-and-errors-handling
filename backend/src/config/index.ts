import "dotenv/config";

if (!process.env.JWT_KEY) {
  throw new Error("PASSWORD_SALT must be define inside .env file");
}
if (!process.env.COOKIE_SECRET) {
  throw new Error("COOKIE_SECRET must be define inside .env file");
}

if (!process.env.POSTGRES_USER) {
  throw new Error("POSTGRES_USER must be define inside .env file");
}
if (!process.env.POSTGRES_PASSWORD) {
  throw new Error("POSTGRES_PASSWORD must be define inside .env file");
}
if (!process.env.POSTGRES_DATABASE) {
  throw new Error("POSTGRES_DATABASE must be define inside .env file");
}
if (!process.env.POSTGRES_PORT) {
  throw new Error("POSTGRES_PORT must be define inside .env file");
}
if (!process.env.POSTGRES_DB) {
  throw new Error("POSTGRES_DB must be define inside .env file");
}
if (!process.env.POSTGRES_HOST) {
  throw new Error("POSTGRES_HOST must be define inside .env file");
}
if (!process.env.JWT_EXPIRED_IN) {
  console.warn("JWT_EXPIRED_IN can be define inside .env file");
}
if (!process.env.COOKIES_EXPIRED_IN) {
  console.warn("COOKIES_EXPIRED_IN can be define inside .env file");
}

export const config = {
  PORT: Number(process.env.PORT),
  PROD: Boolean(process.env.NODE_ENV),
  BASE_URL: Boolean(process.env.NODE_ENV) ? "https://ProductionDomainUrl.com" : "http://localhost",
  JWT: {
    EXPIRED_IN: Number(process.env.JWT_EXPIRED_IN) || 3600, // In seconds (Is redemanded to set this value as COOKIES.EXPIRED_IN / 1000 )
  },
  COOKIES: {
    EXPIRED_IN: Number(process.env.COOKIES_EXPIRED_IN) || 3600 * 1000, // In milliseconds (Is redemanded to set this value as JWT.EXPIRED_IN * 1000 )
  },
  POSTGRES: {
    USER: process.env.POSTGRES_USER,
    PASSWORD: process.env.POSTGRES_PASSWORD,
    DATABASE: process.env.POSTGRES_DATABASE,
    PORT: Number(process.env.POSTGRES_PORT),
    HOST: process.env.POSTGRES_HOST,
    SSL: false,
  },
};
