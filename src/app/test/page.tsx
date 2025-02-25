import React from "react";
import Image from "next/image";

const page = () => {
	return (
		<div className="flex flex-col h-[100lvh]" id="home">
			<div className="bg-secondary sticky top-10 p-3 px-6 rounded-md text-2xl font-bold mt-8 drop-shadow-xl z-10 self-start">
				Home
			</div>
			<Image
				src={"/test.jpg"}
				width={4999}
				height={3453}
				alt="test"
			/>
		</div>
	);
};

export default page;
