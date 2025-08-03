import { SignOutButton, UserButton } from "@clerk/nextjs";
import React from "react";

export const revalidate = false;
export default function page() {
  return (
    <div>
      this is admin dashboard
      <SignOutButton />
      <UserButton />
    </div>
  );
}

// Nextjs dynamic metadata
export function generateMetadata() {
  return {
    title: "Page - Title",
    description: "Page - description",
    // icons: {
    //   icon: ``,
    // },
  };
}
