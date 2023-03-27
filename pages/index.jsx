import Head from "next/head";
import styles from "@/styles/Home.module.css";
import AboutUs from "./about";
import { STRING } from "./const";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Hello world </p>{STRING.NAME}
        </div>
        <AboutUs/>
      </main>
    </>
  );
}
