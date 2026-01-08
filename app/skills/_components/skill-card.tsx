"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { skillsData } from "./skill-data";

export default function SkillCard() {
	return (
		<section className="px-40 py-20">
			<div className="grid grid-cols-3 gap-y-15 gap-x-20">
				{skillsData.map((skill) => (
					<div key={skill.id} className="items-center gap-3">
						<div className="flex flex-row gap-2 items-center pb-5">
							<Image src={skill.src} alt="icon" width={40} height={50} />
							<p>{skill.name}</p>
						</div>
						<motion.div
							initial={{ width: 0, height: 0 }}
							animate={{ width: `100%`, height: "100%" }}
							transition={{ duration: 1, ease: "easeOut" }}
						>
							<Progress value={skill.value} className="w-full h-[10%]" />
						</motion.div>
					</div>
				))}
			</div>
		</section>
	);
}
