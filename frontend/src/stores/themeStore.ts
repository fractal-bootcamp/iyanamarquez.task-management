import { create } from "zustand";
// import themeExamples from "./themeExamples.ts";

const themeExamples = [
  {
    themeName: themeNames.LIGHT,
    background: "#FFFFFF",
    text: "#000000",
    primary: "#007BFF",
    secondary: "#6C757D",
    accent: "#28A745",
  },
  {
    themeName: themeNames.SOLARIZED_DARK,
    background: "#002B36",
    text: "#839496",
    primary: "#2AA198",
    secondary: "#586E75",
    accent: "#D33682",
  },
  {
    themeName: themeNames.SOLARIZED_LIGHT,
    background: "#FDF6E3",
    text: "#657B83",
    primary: "#859900",
    secondary: "#93A1A1",
    accent: "#CB4B16",
  },
  {
    themeName: themeNames.DARK,
    background: "#333333",
    text: "#FFFFFF",
    primary: "#1E90FF",
    secondary: "#6C757D",
    accent: "#FF4500",
  },
];

export enum themeNames {
  LIGHT = "LIGHT",
  DARK = "DARK",
  SOLARIZED_LIGHT = "SOLARIZED_LIGHT",
  SOLARIZED_DARK = "SOLARIZED_DARK",
}

export type ThemeType = {
  themeName: themeNames;
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
};

export type ThemeStore = {
  themes: ThemeType[];
};

const useThemeStore = create<ThemeStore>((set) => {
  console.log("bruh"); // Moved console.log inside the function body
  return {
    themes: themeExamples.map((theme) => theme),
  };
});
export default useThemeStore;
