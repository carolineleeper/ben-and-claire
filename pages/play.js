import play from "../data/play.json";
import styles from "../styles/Eat.module.css";

const Play = () => {
	return (
		<div className={styles.listingContainer}>
			{play.map((place) => (
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

export default Play;
