import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Navigation() {
  const { sessionClaims } = await auth();

  // if you want to set a dynamic A logo bg color
  // const pathname = (await headers()).get("referer") || "localhost:3000";
  // const url = new URL(pathname);
  // const isAdminPage = url.pathname === "/admin";

  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text text-[var(--foreground)]">
              Next.js App
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {/* If signed out*/}
            <SignedOut>
              <SignInButton>
                <button className="border p-1 px-2 rounded-full">
                  Sign in
                </button>
              </SignInButton>

              <SignUpButton>
                <button className="border p-1 px-2 rounded-full">
                  Sign up
                </button>
              </SignUpButton>
            </SignedOut>

            {/* IF singed in */}
            <SignedIn>
              <SignOutButton />
              {/* <UserButton /> */}
              {/* we can use both to get to the manage profile the link one is to direct us into a new page and the UserButton is just as a pop up */}
              <Link href="/user-profile">Profile</Link>
            </SignedIn>

            {sessionClaims?.metadata?.role === "admin" && (
              <Link
                href="/admin"
                className={`border p-1 px-2 rounded-full cursor-pointer
                `}
              >
                A
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
