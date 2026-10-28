"use client";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { THEME_STORAGE_KEY } from "./theme";

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  } catch {}
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="cursor-pointer rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
    >
      <HiOutlineMoon className="h-5 w-5 dark:hidden" />
      <HiOutlineSun className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
