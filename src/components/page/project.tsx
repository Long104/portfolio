import React from "react";
import { InfiniteSliderHoverSpeed } from "@components/infite-hover-slider";
import Image from "next/image";
import Link from "next/link";
import { TabsTransitionPanel } from "@components/TabsTransitionPanel";

const project = () => {
	return (
		<div
			className="relative flex flex-col items-start w-[90vw] justify-self-center"
			id="project"
		>
			<div className="bg-secondary sticky top-12 p-3 px-6 rounded-md text-2xl font-bold mt-8 drop-shadow-xl">
				Project
			</div>
			{/* <div className=" mt-6 w-full rounded-md font-bold"> */}
			{/* 	<InfiniteSliderHoverSpeed /> */}
			{/* </div> */}
			<div className="grid grid-cols-2 place-items-center w-full mt-8">
				<div>
					<div className="text-4xl font-bold">
						notion-clone:{" "}
						<Link
							href={"https://github.com/Long104/notion-clone"}
							className="text-2xl"
							target="_blank"
						>
							github
						</Link>
						<Link
							href={"https://notion-clone-rose-five.vercel.app/"}
							target="_blank"
							className="text-2xl"
						>
							app
						</Link>
					</div>
					<TabsTransitionPanel />
					{/* A clone of notion with functionality like sharing document with friend */}
					{/* and using Ai for translation. The main technology here is clerk, */}
					{/* liveblock, blocknote, firebase, cloudflare for ai worker and deploying */}
				</div>
				<Image
					src="https://i.imgur.com/Nq9bWQ2.png"
					alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
					className="rounded-2xl"
					width={500}
					height={350}
				/>
			</div>
		</div>
	);
};

export default project;
