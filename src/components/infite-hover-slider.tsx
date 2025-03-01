import { InfiniteSlider } from "@components/ui/infinite-slider";
import Image from "next/image";

export function InfiniteSliderHoverSpeed() {
	return (
		<InfiniteSlider speedOnHover={20} gap={32}>
			<Image
				// src="https://i.imgur.com/wwundLO.png"
				src="https://i.imgur.com/CcxKTe9.png"
				alt="notion"
				// className="aspect-square rounded-[4px] "
				width={300}
				height={250}
			/>
			<Image
				src="https://i.imgur.com/CcxKTe9.png"
				alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
				// className="aspect-square w-[320px] rounded-[4px]"
				width={300}
				height={250}
			/>
			<Image
				src="https://i.imgur.com/CcxKTe9.png"
				alt="Yung Lean - Stardust"
				// className="aspect-square w-[320px] rounded-[4px]"
				width={300}
				height={250}
			/>
			<Image
				src="https://i.imgur.com/CcxKTe9.png"
				alt="Yung Lean - Stardust"
				// className="aspect-square w-[320px] rounded-[4px]"
				width={300}
				height={250}
			/>
		</InfiniteSlider>
	);
}
