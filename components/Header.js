import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
	return (
		<Link href="/">
			<a>
				<h1 className={styles.headerText}>Ben and Claire Should Move to the Hills</h1>
			</a>
		</Link>
	);
};

export default Header;
