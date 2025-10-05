import { FC, ReactNode } from "react";
import styles from "./ScreenReaderOnly.module.scss";

interface ScreenReaderOnlyProps {
  children: ReactNode;
  className?: string;
}

export const ScreenReaderOnly: FC<ScreenReaderOnlyProps> = ({
  children,
  className = "",
}) => {
  return <span className={`${styles.srOnly} ${className}`}>{children}</span>;
};
