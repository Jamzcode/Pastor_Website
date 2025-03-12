import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return <h2 className={styles.header}>{title}</h2>;
}
