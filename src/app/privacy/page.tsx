import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteNavbar from "../../components/SiteNavbar";
import SiteFooter from "../../components/sections/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the GamerDex trackers handle your data, including the optional cloud sync with GitHub and Google Drive.",
  alternates: {
    canonical: "/privacy",
  },
};

const LAST_UPDATED = "October 18, 2026";
const ISSUES_URL = "https://github.com/chiefpansancolt/gamerdex.app/issues";
const DISCORD_URL = "https://discord.gg/NBTjUCvqev";
const GOOGLE_POLICY_URL =
  "https://developers.google.com/terms/api-services-user-data-policy";

const linkClass = "text-brand underline underline-offset-2 hover:opacity-80";
const textClass = "leading-relaxed text-gray-600 dark:text-gray-400";

function ExternalLink({
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

function Section({
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

function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="mt-2 text-lg font-semibold">{children}</h3>;
}

function List({ children }: { children: ReactNode }) {
  return (
    <ul className={`list-disc space-y-2 ps-6 ${textClass}`}>{children}</ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="dark:bg-surface-dark min-h-screen bg-gray-50 text-gray-900 dark:text-gray-100">
      <SiteNavbar />
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-24">
        <span className="text-brand text-xs font-semibold tracking-[0.3em] uppercase">
          Legal
        </span>
        <h1 className="mt-4 mb-2 text-4xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated {LAST_UPDATED}
        </p>

        <p className={`mt-8 text-lg ${textClass}`}>
          GamerDex is a set of free game tracker websites made by an independent
          developer. This policy explains in plain words what the trackers do
          with your information. In short, your progress stays in your own
          browser and in your own cloud account, and GamerDex does not run a
          database of player data.
        </p>

        <Section id="short-version" title="The short version">
          <List>
            <li>
              Your progress is saved in your browser. It is not sent to a
              GamerDex server.
            </li>
            <li>
              Cloud sync is optional and off until you turn it on. When it is
              on, your data goes to your own GitHub or Google Drive account and
              nowhere else.
            </li>
            <li>
              We cannot read your data, because it is not on any server that we
              run.
            </li>
            <li>We do not show ads, sell data or share data with anyone.</li>
            <li>
              We count visits with privacy friendly page statistics from
              Cloudflare. Our own code sets no cookies.
            </li>
          </List>
        </Section>

        <Section id="who-we-are" title="Who we are">
          <p className={textClass}>
            GamerDex is run by an independent developer. The trackers are fan
            made and are not affiliated with, or endorsed by, any game
            publisher. In this policy, &quot;we&quot; means GamerDex. You can
            reach us as described in the Contact section.
          </p>
        </Section>

        <Section id="your-browser" title="What stays in your browser">
          <p className={textClass}>
            Every tracker saves what you enter, such as levels, goals, notes and
            settings, in your browser&apos;s local storage on your device. This
            is how the trackers work without an account. The data does not leave
            your browser unless you export a backup file yourself or turn on
            cloud sync. Local storage also holds your preferences, such as
            language and theme.
          </p>
          <p className={textClass}>
            If you clear your browser data, this information is deleted. Export
            a backup file from time to time to keep a copy.
          </p>
        </Section>

        <Section id="cloud-sync" title="Optional cloud sync">
          <p className={textClass}>
            Some trackers can keep your progress in your own cloud account so
            that your devices stay in step. Today this is available in the
            Whiteout Survival Tracker with GitHub or Google Drive. You choose
            the provider, and you can disconnect at any time.
          </p>

          <SubHeading>What is stored and where</SubHeading>
          <p className={textClass}>
            Two small files are saved in your account. The data file holds your
            progress, in the same format as the backup file that you can export.
            The meta file holds the names of your devices and the time of the
            last sync. They are saved in a folder named Gamerdex, inside a
            subfolder for the tracker. With GitHub this is a private repository
            named gamerdex-data that you create. With Google Drive it is a
            visible folder named Gamerdex in your Drive. The files do not
            contain your sign in details.
          </p>

          <SubHeading>How the sync works</SubHeading>
          <p className={textClass}>
            Your browser talks to your cloud provider directly. Changes from
            several devices are merged in your browser. GamerDex does not
            receive a copy of your data.
          </p>

          <SubHeading>Signing in</SubHeading>
          <p className={textClass}>
            To sign in we use a small sign in service at auth.gamerdex.app. Your
            browser sends it the one time code that the provider gives you, or a
            refresh token to renew your access. The service exchanges it with
            the provider, using app credentials that only the service holds, and
            returns your tokens to your browser. The service stores nothing. It
            does not log your tokens or your data, and its logs record only
            technical error codes. Your tokens are kept in your browser&apos;s
            local storage on that device and are never uploaded.
          </p>
        </Section>

        <Section id="access" title="The access we ask for">
          <SubHeading>Google Drive</SubHeading>
          <List>
            <li>
              We ask for one permission only, the Drive file scope
              (https://www.googleapis.com/auth/drive.file). It lets GamerDex
              create and open only the files and folders that it created itself.
              It cannot see, list or change any other file in your Drive.
            </li>
            <li>
              We do not ask for your email address, your name or your profile.
            </li>
            <li>
              We use the access only to save and load your tracker data for you.
              We do not use it for anything else.
            </li>
            <li>
              We do not read your Google data and we do not transfer it to
              anyone.
            </li>
          </List>
          <p className={textClass}>
            GamerDex&apos;s use and transfer to any other app of information
            received from Google APIs will adhere to the{" "}
            <ExternalLink href={GOOGLE_POLICY_URL}>
              Google API Services User Data Policy
            </ExternalLink>
            , including the Limited Use requirements.
          </p>

          <SubHeading>GitHub</SubHeading>
          <p className={textClass}>
            Gamerdex Sync is a GitHub App. You install it on one repository that
            you choose. It can read and write the contents of that repository
            and read its basic metadata. It cannot reach your other repositories
            or your account settings. The tracker syncs only to a private
            repository and does not use a public one.
          </p>

          <SubHeading>Other providers</SubHeading>
          <p className={textClass}>
            We may add other providers later, such as Microsoft OneDrive or
            Dropbox. They are not available today. If we add one, it will use
            the narrowest access that the provider offers, the rules in this
            policy will apply to it, and we will update this page before it is
            released.
          </p>
        </Section>

        <Section id="statistics" title="Page statistics">
          <p className={textClass}>
            Our websites use Cloudflare Web Analytics to count visits and to see
            how fast pages load. It reports aggregated statistics, such as which
            pages are viewed, where visitors come from, and the browser and
            device type. Cloudflare states that it does not track individual
            visitors across websites. We do not use these statistics for
            advertising, and we do not link them to your tracker data. See{" "}
            <ExternalLink href="https://www.cloudflare.com/privacypolicy/">
              Cloudflare&apos;s privacy policy
            </ExternalLink>{" "}
            for details.
          </p>
        </Section>

        <Section id="cookies" title="Cookies and local storage">
          <p className={textClass}>
            GamerDex does not set cookies. We use your browser&apos;s local
            storage, as described above, to save your progress, your preferences
            and, if you turn on sync, your sign in tokens. The trackers need
            this to work. The companies that deliver our websites may use
            technical cookies for security.
          </p>
        </Section>

        <Section id="providers" title="Hosting and other providers">
          <p className={textClass}>
            Our websites are delivered through Cloudflare. The sign in service
            runs on Vercel. Like any web host, they process technical request
            data, such as IP addresses, to deliver pages and to keep the service
            secure.
          </p>
          <p className={textClass}>
            Your cloud provider handles your synced data under its own privacy
            policy. See the privacy policies of{" "}
            <ExternalLink href="https://policies.google.com/privacy">
              Google
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
              GitHub
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://vercel.com/legal/privacy-policy">
              Vercel
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink href="https://www.cloudflare.com/privacypolicy/">
              Cloudflare
            </ExternalLink>
            .
          </p>
        </Section>

        <Section id="your-choices" title="Your choices and deleting your data">
          <List>
            <li>
              <strong>Stop syncing.</strong> In the tracker, open Settings, then
              Cloud sync, then Disconnect. This removes your tokens from that
              browser. Your data stays where it is.
            </li>
            <li>
              <strong>Delete the cloud copy.</strong> Delete the Gamerdex folder
              in your Google Drive, or the Gamerdex folder in your gamerdex-data
              repository on GitHub.
            </li>
            <li>
              <strong>Remove our access.</strong> For Google, open your Google
              Account permissions page and remove Gamerdex. For GitHub, open
              Settings, then Applications, and uninstall or revoke Gamerdex
              Sync.
            </li>
            <li>
              <strong>Delete the local copy.</strong> Clear the site data in
              your browser, or reset the data in the tracker settings. Export a
              backup first if you want to keep it.
            </li>
          </List>
          <p className={textClass}>
            Because we hold no copy of your data, there is nothing for us to
            delete on request.
          </p>
        </Section>

        <Section id="security" title="Security">
          <p className={textClass}>
            Your cloud files are protected by your provider&apos;s security and
            by your own account. Sign in tokens are kept in your browser on your
            device, so anyone who can use your browser profile can use them. If
            you use a shared computer, disconnect sync when you are done. Our
            websites use HTTPS.
          </p>
        </Section>

        <Section id="children" title="Children">
          <p className={textClass}>
            GamerDex is not directed at children under 13. We do not knowingly
            collect personal information from anyone.
          </p>
        </Section>

        <Section id="changes" title="Changes to this policy">
          <p className={textClass}>
            We may update this policy. The date at the top shows the latest
            change. If we add a cloud provider or change how we handle data, we
            will update this page before the change takes effect.
          </p>
        </Section>

        <Section id="contact" title="Contact">
          <p className={textClass}>
            If you have a question about this policy, open an issue on{" "}
            <ExternalLink href={ISSUES_URL}>GitHub</ExternalLink> or message us
            on <ExternalLink href={DISCORD_URL}>Discord</ExternalLink>.
          </p>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
