import { LeftArrowIcon, RightArrowIcon } from "assets/svg";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./slider.module.css";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<RightArrowIcon
			onClick={onClick}
			style={style}
			className={`${className} ${styles.customRightArrow}`}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<LeftArrowIcon
			onClick={onClick}
			style={style}
			className={`${className} ${styles.customLeftArrow}`}
		/>
	);
}

const Slider = ({ title, link, InnerComponent, settings: customSettings }) => {
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1500,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		autoplay: true,
		autoplaySpeed: 5000,
		...customSettings,
	};
	return (
		<div className={styles.sliderWrapper}>
			<div className={styles.sliderHeader}>
				<h2 className={styles.sliderTitle}>{title}</h2>
				<Link to={link ?? "#"} className={styles.link}>
					See more
					<RightArrowIcon />
				</Link>
			</div>

			<SlickSlider {...settings}>
				{Array(10)
					.fill(" ")
					.map((_, index) => (
						<InnerComponent key={index} />
					))}
			</SlickSlider>
		</div>
	);
};

export default Slider;
