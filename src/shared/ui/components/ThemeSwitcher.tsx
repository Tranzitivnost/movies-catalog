import styles from "./ThemeSwitcher.module.css";
import { useTheme, Theme } from "@/shared/ui";
import { Switcher } from "@/shared/ui";

interface Props {
  className?: string;
}

export const ThemeSwitcher = ({ className }: Props) => {
  const { setTheme, getTheme } = useTheme();

  const isCurrentThemeLight = getTheme() === "light" ? true : false;

  const handleCheckboxChange = () => {
    setTheme(getTheme() === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  return (
    <Switcher
      className={styles.customSwitch}
      onChange={handleCheckboxChange}
      defaultValue={isCurrentThemeLight}
    />
  );
};
