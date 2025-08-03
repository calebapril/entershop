"use client";

import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="h-screen">
      {/* button */}
      <div className="absolute flex items-center gap-4 top-10 left-10 group">
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="flex items-center gap-8 text-h4 group-hover:text-primary-900 "
        >
          <MoveLeft className="duration-100 ease-linear group-hover:text-primary-900 group-hover:translate-x-2" />
        </Button>
      </div>
      {children}
    </div>
  );
}
