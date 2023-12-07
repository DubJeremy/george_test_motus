import React from 'react';
import Link from 'next/link';

import styles from './home.module.scss';

const Home = () => {
	return (
		<section className={styles.home}>
			<h1>MOTUS</h1>
			<Link className={styles.btn} href='/gamepage'>
				JOUER
			</Link>
		</section>
	);
};

export default Home;
