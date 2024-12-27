
import styles from "./page.module.css";

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
