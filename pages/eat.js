import eat from "../data/eat.json";
import styles from "../styles/Eat.module.css";

const Eat = () => {
	console.log(eat);

	return (
		<div>
			{eat.map((eatery) => (
				<div className={styles.container}>
					<p>{eatery.title}</p>
					<p>{eatery.description}</p>
					<p>{eatery.location}</p>
					<a href={eatery.website}>{eatery.website}</a>
				</div>
			))}
		</div>
	);
};

export default Eat;
