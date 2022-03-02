import Link from "next/link";
import styles from "../styles/Home.module.css";

// Footer component for the page
export default function Footer() {
  return (
    <footer className={styles.attribution}>
      Challenge by{" "}
      <Link
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        <a target="_blank">Frontend Mentor</a>
      </Link>
      . Coded by{" "}
      <Link
        href="https://www.frontendmentor.io/profile/marckesin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <a target="_blank">Ronaldo</a>
      </Link>
      .
    </footer>
  );
}
