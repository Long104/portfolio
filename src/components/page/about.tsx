import React from "react";
import { Calendar, CircleUserRound } from "lucide-react";
import { SkillIcon } from "@components/ui/skillIcon";
import { ContactInformation } from "@components/ui/contactInformation";

const about = () => {
	return (
		<div
			className="relative flex flex-col items-start w-[90vw] justify-self-center"
			id="about"
		>
			<div className="bg-secondary  sticky top-12 p-3 px-6 rounded-md text-2xl font-bold mt-8 drop-shadow-xl">
				About me
			</div>
			{/* 1 row */}
			<div className="bg-secondary-foreground h-36 grid lg:grid-cols-[max-content_max-content_max-content_max-content_1fr] gap-x-1 place-items-center mt-6 w-full rounded-md font-bold">
				<div className=" bg-secondary-foreground px-4 flex items-center justify-center gap-2 w-full text-3xl">
					<CircleUserRound size={64} />
					<div>Pantorn Chuavallee</div>
				</div>
				<div className="hidden bg-background h-24 p-1 rounded-md lg:block"></div>
				<div className="hidden px-4 lg:flex items-center justify-center gap-2 w-full">
					<Calendar size={32} />
					<div className="text-2xl">
						November 8<sup>th</sup>, 2003
					</div>
				</div>
				<div className="bg-background h-24 p-1 rounded-md hidden lg:flex"></div>
				<div className="hidden px-4 lg:flex lg:flex-wrap items-center justify-start gap-4 w-full [&_svg]:h-12">
					<ContactInformation />
				</div>
			</div>

			<div className="lg:hidden h-36 bg-secondary-foreground px-4 mt-8 flex rounded-md items-center justify-center gap-2 w-full">
				<Calendar size={32} />
				<div className="text-2xl">
					November 8<sup>th</sup>, 2003
				</div>
			</div>

			<div className="bg-secondary-foreground lg:hidden mt-8 rounded-md p-4 flex flex-wrap items-center justify-center gap-4 w-full [&_svg]:h-12">
				<ContactInformation />
			</div>

			<div className="grid place-items-center mt-8 w-full rounded-md font-bold ">
				<div className="p-8 w-full bg-secondary-foreground text-lg rounded-md">
					Hi, I am a software developer from Thailand. I like building stuff
					that I want to use myself. One of my project call SenZen is a money
					management website I currently using. Building website is my
					specialty. In my free time, I enjoy playing chess and solving rubik
					cubes. Lately, I’ve been explore about AI integration and optimizing
					web apps for performance and scalability.
				</div>
			</div>

			<fieldset className="p-3 gap-4 bg-secondary-foreground mt-8 w-full rounded-md font-bold">
				<legend className="bg-secondary text-xl py-1 px-4 rounded-md font-bold">
					bio
				</legend>
				<div>
					<span className="font-bold pr-2">2003</span> Born in south Thailand,
					Songkhla
				</div>
				<div>
					<span className="font-bold pr-2">2022</span>
					Entering at Stamford International University
				</div>
				<div>
					<span className="font-bold pr-2">2025-Currently</span> Studying at
					Stamford International University
				</div>
			</fieldset>
			{/* 1 row */}
			{/* skill */}
			<fieldset className="flex flex-wrap p-3 gap-4 place-items-center bg-secondary-foreground mt-8 w-full rounded-md font-bold [&>svg]:h-12">
				<legend className="bg-secondary text-xl py-1 px-4 rounded-md font-bold">
					knowledge
				</legend>
				<SkillIcon />
			</fieldset>

			{/* 1 row */}
			{/* 1 row */}
		</div>
	);
};

export default about;
