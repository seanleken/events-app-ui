import Image from "next/image";
import styles from "./page.module.scss";
import { Button, Flex, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
    </main>
  );
}
