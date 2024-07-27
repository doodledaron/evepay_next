import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./SwipeableButton.module.css";

interface ButtonProps {
  urlLink: string;
  buttonText: string;
}

const SwipeableButton: React.FC<ButtonProps> = ({ urlLink, buttonText }) => {
  return (
    <Link
      href={urlLink}
      className={`${styles.btn} bottom-5 w-4/5 self-center`}
    >
      <span>
        <Icon icon="material-symbols:keyboard-double-arrow-right-rounded" />
      </span>
      {buttonText}
    </Link>
  );
};

export default SwipeableButton;
