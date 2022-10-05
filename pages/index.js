import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo voluptates commodi nobis consequatur dolore suscipit? Corrupti iste voluptas magni, nobis nisi eius molestias numquam!
      </p>
      <p className={styles.text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo voluptates commodi nobis consequatur dolore suscipit? Corrupti iste voluptas magni, nobis nisi eius molestias numquam!
      </p>
      <Link href="/ninjas"><a className={styles.btn}>See ninja listing</a></Link>
    </div>
    </>

  );
}
