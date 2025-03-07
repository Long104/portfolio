import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const home = () => {
	return (
		<motion.div
			className="relative h-screen w-screen"
			id="home"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
		>
			<div className="w-[90vw] flex justify-self-center h-full items-start">
				<div className="bg-secondary sticky top-12 p-3 px-6 rounded-md text-2xl font-bold mt-8 drop-shadow-xl z-10 ">
					Home
				</div>
			</div>
			<div className="pb-4 text-3xl z-50 flex absolute inset-0 justify-center h-full items-center font-bold">
				Pantorn Chuavallee
			</div>
		</motion.div>
	);
};

export default home;
