import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import "../styles/Card.css";

export interface CardProps {
    imageURL: string;
    text: string;
    className: string;
    onClick: Function;
}


const fadeIn = (direction:string, type:string, duration:number) => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				// delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

function Card ({imageURL, text, className, onClick}:CardProps) {
	return (
		<Tilt className={`tilt ${className}`}>
			<motion.div variants={fadeIn("right", "spring", 0.75)} className="motion" onClick={() => {onClick()}}>
				<div
					data-options={{
						max: 45,
						speed: 450,
						scale: 1,
					}}
					className="options">
					<img src={imageURL} alt="logo" className=" image" />
					<h3 className="text-white font-bold text-center">{text}</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

export default Card;



