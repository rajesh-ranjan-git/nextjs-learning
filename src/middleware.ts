import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  //   return NextResponse.redirect(new URL("/", request.url));
  //   if (request.nextUrl.pathname === "/profile") {
  // return NextResponse.redirect(new URL("/api/hello", request.nextUrl));
  //     return NextResponse.rewrite(new URL("/api/hello", request.nextUrl));
  //   }

  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;
};

// export const config = {
//   matcher: "/profile",
// };
