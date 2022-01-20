import eat from "../data/eat.json";
import styles from "../styles/Eat.module.css";

const Eat = () => {
	return (
		<div className={styles.listingContainer}>
			{eat.map((eatery) => (
				<div key={eatery.title} className={styles.listing}>
					<p className={styles.title}>{eatery.title}</p>
					<p className={styles.description}>{eatery.description}</p>
					<p>{eatery.location}</p>
					<a href={eatery.website}>{eatery.website}</a>
				</div>
			))}
		</div>
	);
};

export default Eat;
