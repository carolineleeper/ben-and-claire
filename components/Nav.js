import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Tree from "./Tree";
import TreeInvert from "./TreeInvert";

const Nav = () => {
	return (
		<>
			<nav className={styles.navContainer}>
				<Tree />

				<div className={styles.pagesContainer}>
					<Link href="/eat">
						<a className={styles.box}>Eat</a>
					</Link>
					<Link href="/play">
						<a className={styles.box}>Play</a>
					</Link>
					<Link href="/shop">
						<a className={styles.box}>Shop</a>
					</Link>
					<Link href="/walk">
						<a className={styles.box}>Walk</a>
					</Link>
				</div>

				<TreeInvert />
			</nav>
		</>
	);
};

export default Nav;
