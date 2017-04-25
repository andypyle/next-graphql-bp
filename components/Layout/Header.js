import Navigation from './Navigation.js';
import { colors } from '../../util';

const Header = ({ appName = 'NextJS' }) => {
	return (
		<header>
			<style jsx>
			{`
				header {
					display: flex;
					justify-content: space-between;
					position: relative;
					z-index: 2000;
					align-items: center;
					background-color: ${colors.midnight};
					color: ${colors.white};
					padding: 0 15%;
				}

				h1 {
					font-size: 2rem;
					padding: 0 1rem;
					font-weight: 900;
				}
			`}
			</style>
			<h1>{ appName }</h1>
			<Navigation />
		</header>
	);
};

export default Header;