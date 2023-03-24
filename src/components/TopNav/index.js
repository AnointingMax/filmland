import React from "react";
import styles from "./topnav.module.css";
import Logo from "assets/logo.png";
import { BurgerIcon, SearchIcon } from "assets/svg";

const TopNav = () => {
	return (
		<header>
			<img src={Logo} alt="FilmLand" className={styles.logo} />
			<Search />
			<div className={styles.left}>
				<p>Hi, $Fullname</p>
				<a href="/#" className={styles.burger}>
					<BurgerIcon />
				</a>
			</div>
		</header>
	);
};

const Search = () => {
	return (
		<div className={styles.searchWrapper}>
			<input
				type="text"
				placeholder="What do you want to watch?"
				className={styles.search}
			/>
			<SearchIcon />
		</div>
	);
};

export default TopNav;
