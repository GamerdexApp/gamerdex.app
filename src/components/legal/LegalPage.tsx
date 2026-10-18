import type { ReactNode } from "react";
import SiteNavbar from "../SiteNavbar";
import SiteFooter from "../sections/SiteFooter";

export const textClass = "leading-relaxed text-gray-600 dark:text-gray-400";
const linkClass = "text-brand underline underline-offset-2 hover:opacity-80";

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {children}
    </a>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-12 scroll-mt-24">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="mt-2 text-lg font-semibold">{children}</h3>;
}

export function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className={`list-disc space-y-2 ps-6 ${textClass}`}>{children}</ul>
  );
}

interface LegalPageProps {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}

/** The shared frame of the legal pages: navbar, heading, last updated date, text and footer. */
export default function LegalPage({
  title,
  updated,
  intro,
  children,
}: LegalPageProps) {
  return (
    <div className="dark:bg-surface-dark min-h-screen bg-gray-50 text-gray-900 dark:text-gray-100">
      <SiteNavbar />
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-24">
        <span className="text-brand text-xs font-semibold tracking-[0.3em] uppercase">
          Legal
        </span>
        <h1 className="mt-4 mb-2 text-4xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated {updated}
        </p>
        <p className={`mt-8 text-lg ${textClass}`}>{intro}</p>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
