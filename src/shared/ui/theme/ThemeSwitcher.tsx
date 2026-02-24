import styles from "./ThemeSwitcher.module.scss";
import { useTheme, Theme } from "@/shared/ui";
import { Switcher } from "@/shared/ui";
import clsx from "clsx";

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
      className={clsx(styles.customSwitch, className)}
      onChange={handleCheckboxChange}
      defaultValue={isCurrentThemeLight}
    />
  );
};
