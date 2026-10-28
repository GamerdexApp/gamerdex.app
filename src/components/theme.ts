export const THEME_STORAGE_KEY = "gamerdex-theme";

export const applyThemeBeforePaint = `try{var q=matchMedia("(prefers-color-scheme: dark)");var a=function(){var t=localStorage.getItem("${THEME_STORAGE_KEY}");document.documentElement.classList.toggle("dark",t?t==="dark":q.matches)};a();q.addEventListener("change",a)}catch(e){}`;
