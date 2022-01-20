import Head from "next/head";
import styles from "../styles/Home.module.css";

const convincingText = `Oh, hello! We didn't see you there! Would you like a compiled collection of reasons you
				should move to the hills? Sure, here you go! As a quick summary, You'll be closer to
				Healsville sanctuary, Cape Paterson, the Yarra Valley, Warburton, the snow, and your
				precious precious family. We can baby sit! Nanny and Poppy can babysit! You basically won't
				have to parent ever again!`;

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
			<p className={styles.description}>{convincingText}</p>
		</div>
	);
}
