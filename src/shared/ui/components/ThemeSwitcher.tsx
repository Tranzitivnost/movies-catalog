import styles from "./ThemeSwitcher.module.css";
import clsx from "clsx";
import { useState } from "react";
import { useTheme, Theme } from "@/shared/ui";

interface Props {
  className?: string;
}

export const ThemeSwitcher = ({ className }: Props) => {
  const { setTheme, getTheme } = useTheme();

  const [isChecked, setIsChecked] = useState(
    getTheme() === "light" ? true : false,
  );
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    setTheme(getTheme() === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  return (
    <div className={className}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={styles.checkbox}
        id="checkbox"
      />
      <label
        htmlFor="checkbox"
        className={clsx(styles["checkbox-label"], styles.switch)}
      >
        <span className={styles.ball}></span>
      </label>
    </div>
  );
};
