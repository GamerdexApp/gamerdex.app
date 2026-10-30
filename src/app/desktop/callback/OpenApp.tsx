"use client";

import { useEffect } from "react";

const appLink = () => `gamerdex://auth${window.location.search}`;

export function OpenApp() {
  useEffect(() => {
    window.location.replace(appLink());
  }, []);

  return (
    <div className="max-w-md space-y-3 text-center">
      <h1 className="text-xl font-semibold">Opening GamerDex</h1>
      <p>
        Your browser asks to open the GamerDex app. Choose Open to finish
        signing in, then close this tab.
      </p>
      <p>
        Nothing happened?{" "}
        <button
          type="button"
          className="underline"
          onClick={() => window.location.assign(appLink())}
        >
          Open GamerDex
        </button>
      </p>
    </div>
  );
}
