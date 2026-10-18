import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, {
  ExternalLink,
  LegalList as List,
  LegalSection as Section,
  textClass,
} from "../../components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using the GamerDex trackers, including the optional cloud sync with GitHub, Google Drive, Dropbox and OneDrive.",
  alternates: {
    canonical: "/terms",
  },
};

const LAST_UPDATED = "October 18, 2026";
const ISSUES_URL = "https://github.com/chiefpansancolt/gamerdex.app/issues";
const DISCORD_URL = "https://discord.gg/NBTjUCvqev";

const INTRO =
  "These terms apply when you use the GamerDex websites and trackers. By using them, you agree to these terms. If you do not agree, please do not use them.";

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" updated={LAST_UPDATED} intro={INTRO}>
      <Section id="what-it-is" title="What GamerDex is">
        <p className={textClass}>
          GamerDex is a set of free game tracker websites made by an independent
          developer. You use the trackers to follow your own progress in a game.
          Some trackers offer optional cloud sync, which keeps your progress in
          your own GitHub, Google Drive, Dropbox or OneDrive account.
        </p>
      </Section>

      <Section id="not-affiliated" title="Not affiliated with game publishers">
        <p className={textClass}>
          GamerDex is not affiliated with, endorsed by, or connected to the
          publishers or developers of the games it covers. Game names,
          characters, images and other game content belong to their owners. They
          are used here only to help players track their own progress. For
          example, Whiteout Survival is a trademark of Century Games.
        </p>
      </Section>

      <Section id="game-information" title="Game information">
        <p className={textClass}>
          We try to keep the game data accurate and current. Games change, and
          the data may be wrong, incomplete or out of date. Check important
          decisions in the game itself.
        </p>
      </Section>

      <Section id="your-data" title="Your data and backups">
        <p className={textClass}>
          The trackers save your progress in your browser. If you clear your
          browser data, that progress is lost. Export a backup file from time to
          time to keep a copy.
        </p>
        <p className={textClass}>
          Cloud sync is a convenience and not a backup service. It merges the
          changes from your devices, so check the result after a sync. We do not
          promise that a sync will never lose or overwrite data.
        </p>
      </Section>

      <Section id="cloud-sync" title="Cloud sync and your accounts">
        <List>
          <li>
            To use cloud sync you sign in to your own account with GitHub,
            Google, Dropbox or Microsoft. You are responsible for that account
            and for what is stored in it.
          </li>
          <li>
            The terms and privacy policy of your provider apply to your use of
            that account. See the{" "}
            <ExternalLink href="https://policies.google.com/terms">
              Google Terms of Service
            </ExternalLink>
            , the{" "}
            <ExternalLink href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">
              GitHub Terms of Service
            </ExternalLink>
            , the{" "}
            <ExternalLink href="https://www.dropbox.com/terms">
              Dropbox Terms of Service
            </ExternalLink>{" "}
            and the{" "}
            <ExternalLink href="https://www.microsoft.com/servicesagreement">
              Microsoft Services Agreement
            </ExternalLink>
            .
          </li>
          <li>
            Keep the GitHub repository that you use for sync private. Anyone who
            can open it can read your data.
          </li>
          <li>
            You can disconnect sync at any time. Our{" "}
            <Link
              href="/privacy"
              className="text-brand underline underline-offset-2 hover:opacity-80"
            >
              Privacy Policy
            </Link>{" "}
            explains how to disconnect, delete the cloud copy and remove our
            access.
          </li>
        </List>
      </Section>

      <Section id="using-the-services" title="Using the services">
        <p className={textClass}>
          Please use GamerDex as it is meant to be used. Do not:
        </p>
        <List>
          <li>
            try to break, overload or probe the websites or the sign in service;
          </li>
          <li>
            use automated calls to get tokens or data that belong to other
            people;
          </li>
          <li>
            use GamerDex to break the law, or the rules of a game or of a cloud
            provider.
          </li>
        </List>
      </Section>

      <Section id="no-warranty" title="No warranty">
        <p className={textClass}>
          GamerDex is provided as it is and as it is available, without
          warranties of any kind, whether express or implied. We do not promise
          that it will be free of errors, that it will always be available, or
          that it will suit your needs.
        </p>
      </Section>

      <Section id="changes" title="Changes and ending">
        <p className={textClass}>
          We may change, pause or end any feature or tracker. We may also update
          these terms. The date at the top shows the latest change. If you keep
          using GamerDex after a change, you accept the updated terms. You can
          stop using GamerDex at any time. If a change affects how your data is
          handled, we will update the Privacy Policy first.
        </p>
      </Section>

      <Section id="privacy" title="Privacy">
        <p className={textClass}>
          Our{" "}
          <Link
            href="/privacy"
            className="text-brand underline underline-offset-2 hover:opacity-80"
          >
            Privacy Policy
          </Link>{" "}
          explains what information the trackers use and how it is handled.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p className={textClass}>
          If you have a question about these terms, open an issue on{" "}
          <ExternalLink href={ISSUES_URL}>GitHub</ExternalLink> or message us on{" "}
          <ExternalLink href={DISCORD_URL}>Discord</ExternalLink>.
        </p>
      </Section>
    </LegalPage>
  );
}
