import "~/styles/globals.css";
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import { shadesOfPurple } from "@clerk/themes";
import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "MCP T3 App",
  description: "Portfolio T3 App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
      }}
    >
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <SignedIn>
            <div className="fixed right-2 top-2 rounded-full bg-white/20 p-0.5 text-slate-200 hover:ring-1 hover:ring-white/70">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="invisible fixed right-2 top-2 rounded-full bg-white/10 px-2.5  py-1.5 font-semibold text-slate-100 no-underline  transition hover:bg-white/15 hover:ring-1 hover:ring-slate-300 md:visible">
              <SignInButton mode="modal">Sign in with Clerk</SignInButton>
            </div>
          </SignedOut>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
