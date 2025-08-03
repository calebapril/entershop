import { UserButton } from "@clerk/nextjs";
import React from "react";

export const revalidate = false;
export default function Page() {
  return (
    <div>
      this is dashboard for sellers
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
