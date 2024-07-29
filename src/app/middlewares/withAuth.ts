import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const onlyAdminPage = ["/dashboard"];
const authPage = ["/login", "/register"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      // jika tidak login dan berada di register/login ketika sudah login
      if (!token && !authPage.includes(pathname)) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      if (token) {
        if (authPage.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }

        if (token.role !== "admin" && onlyAdminPage.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
      }
    }
    return middleware(req, next);
  };
}
