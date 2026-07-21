import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all paths except static assets, images, and API/internal routes
  matcher: ["/((?!api|_next|_vercel|images|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)"],
};
