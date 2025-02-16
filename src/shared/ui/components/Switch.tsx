import styles from "./Switch.module.css"
import clsx from "clsx"
import { useState } from "react"

interface Props {
  defaultChecked: boolean
  onChange: (value: boolean) => void
  className?: string
}

export const Switch = ({ onChange, defaultChecked, className }: Props) => {
  const [isChecked, setIsChecked] = useState(defaultChecked)
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    onChange(event.target.checked)
  }

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
  )
}
