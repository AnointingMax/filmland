import React from "react";
import styles from "./video.module.css";
import { Link } from "react-router-dom";
import { LeftArrowIcon, PlayOutlineIcon, RightArrowIcon } from "assets/svg";
import { useAppContext } from "context/AppContext";

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

const Video = (props) => {
	const { imageConfig } = useAppContext();

	return (
		<Link className={styles.videoWrapper}>
			<div className={styles.videoImageWrapper}>
				<img
					src={`${imageConfig?.base_url}/w1280${props.backdrop_path}`}
					alt=""
					className={styles.videoImage}
				/>
				<PlayOutlineIcon className={styles.center} />
			</div>
			<p className={styles.videoName}>{props?.title}</p>
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
