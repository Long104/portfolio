import React from "react";
import { InfiniteSliderHoverSpeed } from "@components/infite-hover-slider";
import Image from "next/image";
import Link from "next/link";
import { TabsTransitionPanel } from "@components/TabsTransitionPanel";

const project = () => {
	return (
		<div className="relative flex flex-col items-start w-[90svw]" id="project">
			<div className="bg-secondary sticky top-12 p-3 px-6 rounded-md text-2xl font-bold mt-8 drop-shadow-xl">
				Project
			</div>
			<div className="grid lg:grid-cols-2 grid-cols-1 place-items-center w-full mt-8 pb-4">
				<div>
					<div className="text-4xl font-bold flex items-center">
						cashwise:
						<Link
							href={"https://github.com/Long104/SenZen"}
							className="text-2xl bg-foreground text-background rounded-md px-1"
							target="_blank"
						>
							github
						</Link>
						<Link
							href={"https://senzen-frontend.vercel.app/"}
							target="_blank"
							className="text-2xl bg-foreground text-background rounded-md px-1 ml-1"
						>
							app
						</Link>
					</div>
					<div className="font-medium">
						A <span className="text-[#FFA066]">money management</span>{" "}
						application made for anyone who want to keep track of their
						spending. This application use Nextjs for frontend and go for
						backend. In the future it will intregrated using AI for
						recommendation of how to spend money more efficiency.
					</div>
				</div>
				<Image
					src="https://i.imgur.com/M49vyaj.png"
					alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
					className="rounded-2xl mt-8 lg:m-0"
					width={500}
					height={350}
				/>
			</div>
			<div className="grid lg:grid-cols-2 grid-cols-1 place-items-center w-full mt-8 pb-4">
				<div>
					<div className="text-4xl font-bold flex items-center">
						clipboard-ai-extension:
						<Link
							href={"https://github.com/Long104/AI-Clipboard-extension"}
							className="text-2xl bg-foreground text-background rounded-md px-1"
							target="_blank"
						>
							github
						</Link>
					</div>
					<div className="font-medium">
						AI-powered <span className="text-[#FFA066]">Clipboard</span> using
						Cloudflare Workers and integrates Clipboard AI, allowing users to
						understand concepts faster than ever using a sidebar chat powered by
						LLaMA 3.3, the latest large language model.
					</div>
				</div>
				<Image
					src="https://i.imgur.com/n0Xsxxz.png"
					alt="ai extension"
					className="rounded-2xl mt-8 lg:m-0"
					width={500}
					height={350}
				/>
			</div>
			<div className="grid lg:grid-cols-2 grid-cols-1 place-items-center w-full mt-8">
				<div>
					<div className="text-4xl font-bold flex items-center">
						notion-clone:
						<Link
							href={"https://github.com/Long104/notion-clone"}
							className="text-2xl bg-foreground text-background rounded-md px-1"
							target="_blank"
						>
							github
						</Link>
						<Link
							href={"https://notion-clone-rose-five.vercel.app/"}
							target="_blank"
							className="text-2xl bg-foreground text-background rounded-md px-1 ml-1"
						>
							app
						</Link>
					</div>
					<div className="font-medium inline">
						This project replicates core Notion functionality, allowing users to
						share documents with friends and use AI to translate content. It
						utilizes Clerk for authentication, Liveblocks for real-time
						collaboration, Blocknote for the text editor, Firebase for backend
						and storage, and Cloudflare Workers to run the AI translation. Video
						credit: YouTube –{" "}
					</div>
					<span className="text-[#FFA066]">
						<Link
							href={"https://www.youtube.com/watch?v=cso7-4oAPNQ&t=16964s"}
							target="_blank"
						>
							Build with Ben
						</Link>
					</span>
				</div>{" "}
				<Image
					src="https://i.imgur.com/Nq9bWQ2.png"
					alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
					className="rounded-2xl mt-8 lg:mt-0"
					width={500}
					height={350}
				/>
			</div>
			{/* <div className=" m-6 w-full rounded-md font-bold"> */}
			{/* 	<InfiniteSliderHoverSpeed /> */}
			{/* </div> */}
		</div>
	);
};

export default project;
