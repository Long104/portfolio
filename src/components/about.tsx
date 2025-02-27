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
			<div className="bg-secondary sticky top-12 p-3 px-6 rounded-md text-2xl font-bold mt-8 drop-shadow-xl">
				About me
			</div>
			{/* 1 row */}
			<div className="grid h-36 grid-cols-[max-content_max-content_max-content_max-content_1fr] gap-x-1 place-items-center bg-secondary-foreground mt-6 w-full rounded-md font-bold">
				<div className="px-4 flex items-center justify-center gap-2 w-full text-3xl">
					<CircleUserRound size={64} />
					<div>Pantorn Chuavallee</div>
				</div>
				<div className="bg-background h-24 p-1 rounded-md"></div>
				<div className="px-4 flex items-center justify-center gap-2 w-full">
					<Calendar size={32} />
					<div className="text-2xl">
						November 8<sup>th</sup>, 2003
					</div>
				</div>
				<div className="bg-background h-24 p-1 rounded-md"></div>
				<div className="px-4 flex items-center justify-start gap-4 w-full [&_svg]:h-12">
					<ContactInformation />
				</div>
			</div>

			{/* 1 row */}
			{/* skill */}
			<fieldset className="flex flex-wrap p-3 gap-4 place-items-center bg-secondary-foreground mt-8 w-full rounded-md font-bold [&>svg]:h-12">
				<legend className="bg-secondary text-xl py-1 px-4 rounded-md font-bold">
					knowledge
				</legend>
				<SkillIcon />
			</fieldset>

			{/* 1 row */}
			<div className=" grid grid-cols-2 gap-x-8 place-items-center mt-8 w-full rounded-md font-bold ">
				<div className="h-48 p-4 flex items-center text-center gap-2 w-full bg-secondary-foreground text-lg rounded-md">
					Hi, my name first name pantorn but you can call me Long. I'm a
					passionate software developer specializing in web technologies. I
					create innovative applications that improve user experiences
				</div>
				<div className="p-4 h-48 flex items-center text-center gap-2 w-full bg-secondary-foreground rounded-md text-lg">
					With over 2 years of coding in frontend and 1 years of experience in
					backend development using Go, Node.js, and modern frameworks, I have
					successfully built many side project and do many workshop as a
					university student. I’m passionate about building my own stuff and
					continue to improve
				</div>
			</div>
			{/* 1 row */}
		</div>
	);
};

export default about;
