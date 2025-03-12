"use client";
import HomePage from "@/components/page/home";
import About from "@/components/page/about";
import Project from "@/components/page/project";
import More from "@/components/page/more";
import { Clock } from "@/components/ui/clock";

export default function Home() {
	return (
		<div className="relative w-full">
			<div className="w-full flex justify-center">
				<div className="fixed top-12 w-[90vw] z-50 flex justify-end p-3 px-6">
					<Clock />
				</div>
			</div>
			<div className="flex flex-col justify-center items-center">
				<HomePage />
				<About />
				<Project />
			</div>
			{/* <More /> */}
		</div>
	);
}
