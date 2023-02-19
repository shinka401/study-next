import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.myLink}>
        Index
      </Link>
      <Link href="/about" className={styles.mylLink}>
        About
      </Link>
    </header>
  );
}
