import { TopNav } from "components";
import styles from "./hero.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import poster from "assets/poster.png";
import { IMDBIcon, PlayIcon, TomatoIcon } from "assets/svg";

const Hero = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: styles.heroDots,
		arrows: false,
		vertical: true,
		autoplay: true,
		autoplaySpeed: 5000,
	};
	return (
		<div className={styles.hero}>
			<TopNav />

			<Slider {...settings}>
				<Slide />
				<Slide />
				<Slide />
				<Slide />
			</Slider>
		</div>
	);
};

const Slide = () => {
	return (
		<div className={styles.slide}>
			<img src={poster} alt="poster" className={styles.slidePoster} />
			<div className={styles.slideInfo}>
				<h2 className={styles.sliderHeader}>John Wick 3 : Parabellum</h2>
				<div className={styles.row} style={{ gap: "2rem" }}>
					<div className={styles.row}>
						<IMDBIcon />
						86.0 / 100
					</div>
					<div className={styles.row}>
						<TomatoIcon />
						97%
					</div>
				</div>
				<p className={styles.sliderDesc}>
					John Wick is on the run after killing a member of the international
					assassins' guild, and with a $14 million price tag on his head, he is
					the target of hit men and women everywhere.
				</p>
				<button className={styles.watchButton}>
					<PlayIcon /> Watch Trailer
				</button>
			</div>
		</div>
	);
};

export default Hero;
