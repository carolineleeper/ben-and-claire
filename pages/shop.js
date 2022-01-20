import shop from "../data/shop.json";
import styles from "../styles/Eat.module.css";

const Shop = () => {
	return (
		<div className={styles.listingContainer}>
			{shop.map((store) => (
				<div key={store.title} className={styles.listing}>
					<p className={styles.title}>{store.title}</p>
					<p className={styles.description}>{store.description}</p>
					<p>{store.location}</p>
					<a href={store.website}>{store.website}</a>
				</div>
			))}
		</div>
	);
};

export default Shop;
