"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-2 text-sm sm:px-6">
        <p>
          Shiplog is presenting at F/AI Demo Day at Station F.{" "}
          <Link href="/demo/" className="font-medium underline decoration-white/40 underline-offset-4 hover:decoration-white">
            Say hello
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/70 hover:text-white"
          aria-label="Dismiss announcement"
        >
          <X aria-hidden size={16} strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
