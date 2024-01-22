import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { TRPCReactProvider } from "~/trpc/react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-slate-900">
      <SignedIn>
        <div className=" fixed right-2 top-2 rounded-full bg-white/20 p-0.5 text-slate-200 hover:ring-1 hover:ring-white/70 sm:visible">
          <UserButton afterSignOutUrl="/tailblocks" />
        </div>
      </SignedIn>
      <SignedOut>
        <div className=" invisible fixed right-2 top-2 z-10 rounded-full bg-white/10 px-2.5 py-1.5  font-semibold text-slate-100 no-underline transition  hover:bg-white/15 hover:ring-1 hover:ring-slate-300 md:visible">
          <SignInButton afterSignInUrl="/tailblocks" mode="modal">
            Sign in with Clerk
          </SignInButton>
        </div>
      </SignedOut>
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </div>
  );
}
