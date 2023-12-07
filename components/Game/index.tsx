import React, { useState } from 'react';
import axios from 'axios';

import styles from './game.module.scss';

const Game = () => {
	const [word, setWord] = useState('');
	const [gameState, setGameState] = useState('start');

	const getWord = () => {
		axios
			.get('https://trouve-mot.fr/api/random')
			.then((res) => {
				console.error('res1', res);

				setWord(res.data[0].name);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<section className={styles.game}>
			<h1>Motus</h1>
			<button
				className={styles.newWord}
				onClick={() => setGameState('playing')}
			>
				start
			</button>
			{gameState === 'playing' ? (
				<div className={styles.line}>
					{' '}
					{word.split('').map((letter, index) => (
						<div className={styles.case} key={index}></div>
					))}
				</div>
			) : null}
			<button className={styles.newWord} onClick={() => getWord()}>
				New word
			</button>
			<h4>{word}</h4>
		</section>
	);
};

export default Game;
