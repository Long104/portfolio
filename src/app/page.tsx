"use client";
import HomePage from "@/components/page/home";
import About from "@/components/page/about";
import Project from "@/components/page/project";
import More from "@/components/page/more";
import { Clock } from "@/components/ui/clock";

export default function Home() {
	return (
		<div className="relative w-full">
			<div className="fixed top-12 left-0 right-0 w-[90vw] z-10 flex justify-end justify-self-center p-3 px-6">
				<Clock />
			</div>
			<HomePage />
			<About />
			<Project />
			<More />
		</div>
	);
}
