import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 开关：true=关闭全站维护，false=恢复正常
const MAINTENANCE = true;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // 放行维护页、静态资源、接口
  if (MAINTENANCE) {
    if (!pathname.startsWith("/maintenance")) {
      return NextResponse.redirect(new URL("/maintenance", req.url), 307);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};