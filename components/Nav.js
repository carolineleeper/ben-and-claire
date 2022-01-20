import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Tree from "./Tree";
import TreeInvert from "./TreeInvert";
import { useRouter } from "next/router";

const Nav = () => {
	const { asPath } = useRouter();

	return (
		<>
			<nav className={styles.navContainer}>
				<Tree />

				<div className={styles.pagesContainer}>
					<Link href="/eat">
						<a className={`${asPath === "/eat" ? styles.boxActive : ""} ${styles.box}`}>Eat</a>
					</Link>
					<Link href="/play">
						<a className={`${asPath === "/play" ? styles.boxActive : ""} ${styles.box}`}>Play</a>
					</Link>
					<Link href="/shop">
						<a className={`${asPath === "/shop" ? styles.boxActive : ""} ${styles.box}`}>Shop</a>
					</Link>
					<Link href="/walk">
						<a className={`${asPath === "/walk" ? styles.boxActive : ""} ${styles.box}`}>Walk</a>
					</Link>
				</div>

				<TreeInvert />
			</nav>
		</>
	);
};

export default Nav;
