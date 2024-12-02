import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assumes you have a reusable Button component
import { auth } from "@/auth"; // Assumes you are using Auth.js
import { handleSignOut } from "@/app/actions/authActions"; // Action for signing out

export default async function Navbar() {
  const session = await auth(); // Check the user's authentication session
  console.log({ session });

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-80 backdrop-blur-md z-50 shadow-sm flex items-center justify-between px-6 py-4">
      <Link href="/" className="text-xl font-bold text-gray-800">
        Bloodgroup Detector
      </Link>
      <ul className="flex space-x-6 items-center text-gray-700">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/accuracy">Accuracy</Link></li>
        {!session ? (
          <li>
            <Link href="/auth/signin">
              <Button variant="default">Sign In</Button>
            </Link>
          </li>
        ) : (
          <li>
            <form action={handleSignOut}>
              <Button variant="default" type="submit">
                Sign Out
              </Button>
            </form>
          </li>
        )}
      </ul>
    </nav>
  );
}
