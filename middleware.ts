import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
export default clerkMiddleware(async (auth, req) => {
  // if (!isPublicRoute(req)) await auth.protect();
  // or
  const { userId, redirectToSignIn } = await auth();
  if (!userId && !isPublicRoute(req)) {
     return redirectToSignIn();
  }

  if (
    isAdminRoute(req) &&
    (await auth()).sessionClaims?.metadata?.role !== "admin"
  ) {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

// 1, The conditional WAY
// if (request.nextUrl.pathname === "/login") {
// return NextResponse.rewrite(new URL("/profile", request.url));
// }

//   const response = NextResponse.next();
//   const themePreference = request.cookies.get("theme");
//   if (!themePreference) {
//     response.cookies.set("theme", "dark");
//   }

//   response.headers.set("custome-header", "custom-value");

//   return response;
// }

// 2, The matcher config WAY
// export const config = {
// matcher: "/dashboard/:path*",
// };

// If you want it to apply to all subroutes (e.g., /profile/settings), change it to:
//   matcher: "/profile/:path*",
