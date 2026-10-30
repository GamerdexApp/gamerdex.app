import type { Metadata } from "next";
import { OpenApp } from "./OpenApp";

export const metadata: Metadata = {
  title: "Opening GamerDex",
  robots: { index: false },
};

export default function DesktopCallback() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <OpenApp />
    </main>
  );
}
