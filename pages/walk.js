import walk from "../data/walk.json";
import styles from "../styles/Eat.module.css";

const Walk = () => {
	return (
		<div className={styles.listingContainer}>
			{walk.map((place) => (
				<div key={place.title} className={styles.listing}>
					<p className={styles.title}>{place.title}</p>
					<p className={styles.description}>{place.description}</p>
					<p>{place.location}</p>
					<a href={place.website}>{place.website}</a>
				</div>
			))}
		</div>
	);
};

export default Walk;
