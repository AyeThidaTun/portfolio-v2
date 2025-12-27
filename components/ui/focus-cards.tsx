"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
	({
		card,
		index,
		hovered,
		setHovered,
	}: {
		card: Card;
		index: number;
		hovered: number | null;
		setHovered: React.Dispatch<React.SetStateAction<number | null>>;
	}) => (
		<button
			type="button"
			onMouseEnter={() => setHovered(index)}
			onMouseLeave={() => setHovered(null)}
			className={cn(
				"rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-90 md:h-130 min-w-70 sm:min-w-[320px] md:min-w-100 transition-all duration-300 ease-out snap-center",
				hovered !== null && hovered !== index && " scale-[0.95]",
				hovered === index ? "ring-purple-100 ring-2" : "",
			)}
		>
			<Image
				src={card.src}
				alt={card.title}
				className="object-cover absolute inset-0 aspect-video"
				fill
			/>
			<div
				className={cn(
					"absolute inset-0 flex items-end py-8 px-2 md:px-4 lg:px-4 transition-colors duration-300",
					hovered === index ? "bg-black/60" : "bg-transparent",
				)}
			>
				<div className="flex flex-col">
					<div
						className={cn(
							"text-lg md:text-xl font-medium bg-clip-text text-gray-200",
							hovered === index ? "invisible" : "visible",
						)}
					>
						{card.title}
					</div>
					{hovered === index ? (
						<div className="text-sm md:text-lg lg:text-lg font-medium bg-clip-text text-gray-300 whitespace-pre-line wrap-break-word">
							{card.description}
						</div>
					) : null}
				</div>
			</div>
		</button>
	),
);

Card.displayName = "Card";

type Card = {
	title: string;
	src: string;
	description: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory scroll-[0.5rem] scrollbar-custom dark:scrollbar-track-neutral-800 pb-5">
			<div className="flex gap-6 p-6">
				{cards.map((card, index) => (
					<Card
						key={card.title}
						card={card}
						index={index}
						hovered={hovered}
						setHovered={setHovered}
					/>
				))}
				<div className="w-6 shrink-0" />
			</div>
		</div>
	);
}
