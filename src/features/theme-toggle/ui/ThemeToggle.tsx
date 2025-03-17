import { useTheme, Theme } from "@/shared/ui";

export function ThemeToggle() {
  const { setTheme, getTheme } = useTheme();
  function handleCheckboxChange() {
    setTheme(getTheme() === Theme.Dark ? Theme.Light : Theme.Dark);
  }
  const isCurrentThemeLight = getTheme() === "light" ? true : false;
  return { handleCheckboxChange, isCurrentThemeLight };
}
