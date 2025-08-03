import { SignUp } from "@clerk/nextjs";
import React from "react";

// Nextjs ISR caching strategy
// export const revalidate = false;

export default function page() {
  return (
    <div className="grid h-full grid-cols-1">
      <div className="flex items-center justify-center">
        <SignUp />
      </div>
    </div>
  );
}

// Nextjs dynamic metadata
export function generateMetadata() {
  return {
    title: "EnterShop - Create Your Account",
    description: "Sign up to explore and shop electronics, fashion, cakes, and more—all in one place.",
    // icons: {
    //   icon: ``,
    // },
  };
}
