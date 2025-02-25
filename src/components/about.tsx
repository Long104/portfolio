import React from "react";
import { User } from "lucide-react";

const about = () => {
	return (
		<div
			className="relative flex flex-col items-start w-[90vw] justify-self-center"
			id="about"
		>
			<div className="bg-secondary sticky top-12 p-3 px-6 rounded-md text-2xl font-bold mt-8 drop-shadow-xl">
				About me
			</div>
			<div className="grid h-32 grid-cols-3 gap-x-2 place-items-center bg-secondary mt-6 w-full rounded-md text-4xl font-bold">
				<div className="flex items-center justify-center gap-2 w-full">
					<User />
					Pantorn Chuavallee
				</div>
				<div className="border border-solid border-red-500">|</div>
				<div className="flex items-center justify-center gap-2 w-full">
					<User />
					Pantorn Chuavallee
				</div>
			</div>
		</div>
	);
};

export default about;
