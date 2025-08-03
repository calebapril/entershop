import React from "react";

export const revalidate = false;
export default function Page() {
  return <div>you have no access to this page</div>;
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
