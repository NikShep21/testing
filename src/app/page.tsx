import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/screens/header/header";
import Testing from "@/components/screens/testing/Testing";

export default function Home() {
  return (
    <div className={styles.page}>
      
      <main>
        <Testing/>
      </main>
    </div>
  );
}
