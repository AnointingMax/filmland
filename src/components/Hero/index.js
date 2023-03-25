import { TopNav } from "components";
import styles from "./hero.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IMDBIcon, PlayIcon, TomatoIcon } from "assets/svg";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "api";
import { useAppContext } from "context/AppContext";

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

	const { data } = useQuery({
		queryKey: ["hero"],
		queryFn: getUpcomingMovies,
	});

	return (
		<div className={styles.hero}>
			<TopNav />

			<Slider {...settings}>
				{data?.results?.slice(0, 4).map((props) => (
					<Slide key={props?.id} {...props} />
				))}
			</Slider>
		</div>
	);
};

const Slide = (props) => {
	const { imageConfig } = useAppContext();

	return (
		<div className={styles.slide}>
			<img
				src={`${imageConfig?.base_url}/w1280${props.backdrop_path}`}
				alt="poster"
				className={styles.slidePoster}
			/>
			<div className={styles.slideInfo}>
				<h2 className={styles.sliderHeader}>{props?.title}</h2>
				<div className={styles.row} style={{ gap: "2rem" }}>
					<div className={styles.row}>
						<IMDBIcon />
						{props?.vote_average} / 10
					</div>
					<div className={styles.row}>
						<TomatoIcon />
						{props?.vote_count}
					</div>
				</div>
				<p className={styles.sliderDesc}>{props?.overview}</p>
				<button className={styles.watchButton}>
					<PlayIcon /> Watch Trailer
				</button>
			</div>
		</div>
	);
};

export default Hero;
