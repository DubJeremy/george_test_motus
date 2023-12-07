import Head from 'next/head';

import HomePage from './homepage';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta charSet='UTF-8' />
				<meta name='description' content='' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta property='og:title' content='' />
				<meta property='og:description' content='' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://www.petshine.com' />
				<meta
					property='og:image'
					content='https://www.petshine.com/images/og-image.jpg'
				/>
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content='' />
				<meta name='twitter:description' content='' />
				<meta
					name='twitter:image'
					content='https://www.petshine.com/images/twitter-image.jpg'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<HomePage />
			</main>
		</>
	);
}
