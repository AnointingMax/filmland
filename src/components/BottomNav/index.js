import React from "react";
import {
	FacebookIcon,
	InstagramIcon,
	TwitterIcon,
	YoutubeIcon,
} from "assets/svg";
import styles from "./bottomnav.module.css";
import { Link } from "react-router-dom";

const BottomNav = () => {
	return (
		<footer>
			<div className={styles.socialIcons}>
				<Link to="#">
					<FacebookIcon />
				</Link>
				<Link to="#">
					<InstagramIcon />
				</Link>
				<Link to="#">
					<TwitterIcon />
				</Link>
				<Link to="#">
					<YoutubeIcon />
				</Link>
			</div>
			<div className={styles.footerLinks}>
				<Link to={"#"} className={styles.footerLink}>
					Conditions of Use
				</Link>
				<Link to={"#"} className={styles.footerLink}>
					Privacy & Policy
				</Link>
				<Link to={"#"} className={styles.footerLink}>
					Press Room
				</Link>
			</div>
			<p className={styles.copyright}>© 2021 Movix</p>
		</footer>
	);
};

export default BottomNav;
