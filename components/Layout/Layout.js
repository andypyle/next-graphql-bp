import Head from 'next/head';
import Header from './Header.js';

const Layout = ({ title = 'NextJS Application', children }) => {
	return (
		<main>
			<style jsx>
			{`
				main {
					display: grid;
					min-height: 100%;
					grid-template-columns: 1fr;
					grid-template-rows: auto 1fr auto;
				}
			`}
			</style>
			<Head>
				<title>{ title }</title>
			</Head>
			<Header appName="Application"/>
			{ children }
		</main>
	);
};

export default Layout;