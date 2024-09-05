import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';
import { useScreenWidth } from '../../hooks/useScreenWidth';

const buildLinkClass = ({ isActive }) => {
	return clsx(s.link, isActive && s.linkActive);
};

const Navigation = () => {
	const { isSmallScreen } = useScreenWidth();

	return (
		<nav>
			<ul className={clsx(s.list)}>
				<li className={clsx(s.listItem)}>
					<NavLink className={buildLinkClass} to='/'>
						<div className={clsx(s.iconBackground)}></div>
						<svg width='24' height='24' className={clsx(s.icon)}>
							<use href='./src/images/icons.svg#home'></use>
						</svg>
						Home
					</NavLink>
				</li>
				<li className={clsx(s.listItem)}>
					<NavLink className={buildLinkClass} to='/statistics'>
						<div className={clsx(s.iconBackground)}></div>
						<svg width='24' height='24' className={clsx(s.icon)}>
							<use href='./src/images/icons.svg#statistics'></use>
						</svg>
						Statistics
					</NavLink>
				</li>
				{isSmallScreen && (
					<li className={clsx(s.listItem)}>
						<NavLink className={buildLinkClass} to='/currency'>
							<div className={clsx(s.iconBackground)}></div>
							<svg width='24' height='24' className={clsx(s.icon)}>
								<use href='./src/images/icons.svg#dollar'></use>
							</svg>
							Currency
						</NavLink>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
