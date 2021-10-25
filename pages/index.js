import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.title}>gabrielle johnson yoga</div>
        <Link href="/info">
          <div className={styles.enter}>Enter site</div>
        </Link>
      </main>
    </Layout>
  );
}
