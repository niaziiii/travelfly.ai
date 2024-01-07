import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./navigation";
export default createMiddleware({
  // Used when no locale matches
  defaultLocale: "en",
  locales,
  localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
};
