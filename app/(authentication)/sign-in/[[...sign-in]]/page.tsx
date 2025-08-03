import { SignIn } from "@clerk/nextjs";
import React from "react";

// Nextjs ISR caching strategy
// export const revalidate = false;

export default function page() {
  return (
    <div className="grid h-full grid-cols-1">
      <div className="flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
}

// Nextjs dynamic metadata
export function generateMetadata() {
  return {
    title: "EnterShop - Sign In to Your Account",
    description: "Access your EnterShop account to continue shopping for electronics, fashion, cakes, and more.",
    // icons: {
    //   icon: ``,
    // },
  };
}
