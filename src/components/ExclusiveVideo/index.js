import React from "react";
import styles from "./video.module.css";
import video from "assets/video.png";
import { Link } from "react-router-dom";
import { LeftArrowIcon, RightArrowIcon } from "assets/svg";

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

const Video = () => {
	return (
		<Link className={styles.videoWrapper}>
			<img src={video} alt="" className={styles.videoImage} />
		</Link>
	);
};

export default Video;

export const videoSliderSettings = {
	className: "videowrap",
	slidesToShow: 4,
	slidesToScroll: 1,
	centerMode: true,
	centerPadding: "80px 0 0px",
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 425,
			settings: {
				centerPadding: "80px 0 20px",
				slidesToShow: 1,
			},
		},
	],
};
