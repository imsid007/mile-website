import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<img style={{ width: "100vw", height: "100vh" }} src="./img.jpg" />
		</div>
	);
}
