import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Nav />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
