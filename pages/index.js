import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ben and Claire in the Hills</title>
				<meta
					name="description"
					content="All the reasons Ben and Claire should move to the hills"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	);
}
