import Link from 'next/link';
import { colors } from '../../util';
import R from 'ramda';

const NavigationItem = ({ url = '#', text = 'Nav Item', prefetch = false, onClick = null }) => {
	return (
		<li className="Navigation__Item">
			<style jsx>
			{`
				.Navigation__Item {
					display: flex;
					position: relative;
					z-index: 2000;
					background-color: ${colors.midnight};
				}

				a,
				button {
					display: flex;
					font-family: 'Nunito', sans-serif;
					font-size: 1.33rem;
					font-weight: 300;
					padding: .75rem 1rem;
					position: relative;
					z-index: 2000;
				}

				a:hover,
				button:hover {
					background-color: rgba(255,255,255,0.2);
				}
			`}
			</style>
			{
				onClick ? <button onClick={ onClick }>{ text }</button> :
					<Link href={ url } prefetch={prefetch}>
						<a>{ text }</a>
					</Link>
			}
		</li>
	);
};

const Navigation = () => {
	return (
		<nav>
			<style jsx>
			{`
				nav {
					display: flex;
					width: 100%;
					justify-content: flex-end;

					background-color: ${colors.midnight} !important;
				}
				.Navigation {
					display: flex;
					align-items: center;
					position: relative;
					z-index: 2000;
					
					background-color: ${colors.midnight};
				}
			`}
			</style>
			<ul className="Navigation">
				<NavigationItem text="Home" prefetch url="/" />
			</ul>
		</nav>
	);
};

export default Navigation;