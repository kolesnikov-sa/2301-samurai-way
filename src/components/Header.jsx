import s from './Header.module.css';

const Header = () => {
	return(
		<header className={s.header}>
			<img className={s.header__image} src="https://www.svgrepo.com/show/340598/logo-glassdoor.svg" alt="Logo"></img>
		</header>
	);
}

export default Header;