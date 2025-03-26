import styles from "./Switcher.module.css";
import { useState } from "react";

interface Props {
  defaultValue: boolean;
  onChange: (value: boolean) => void;
  className?: string;
}

export const Switcher = ({ onChange, defaultValue, className }: Props) => {
  const [isChecked, setIsChecked] = useState(defaultValue);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
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
      <label htmlFor="checkbox" className={styles["checkbox-label"]}>
        <span className={styles.ball}></span>
      </label>
    </div>
  );
};
