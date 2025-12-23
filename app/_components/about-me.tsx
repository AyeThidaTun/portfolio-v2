"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
	const router = useRouter();
	return (
		<section className="">
			<div className="flex items-center justify-center px-50">
				<div className="border border-black rounded-md p-10">
					<div className="grid grid-cols-2 flex-row">
						<div className="text-md space-y-4">
							<h3 className="text-2xl pb-10">About Me</h3>
							<p>
								Hi there! My name is Aye Thida Tun. You can also call me Anna.
							</p>
							<p>
								Currently, I am in my final year at Singapore Polytechnic,
								pursuing a Diploma in Information Technology.
							</p>
							<p>
								I love building things with code, exploring new technologies,
								and bringing ideas to life, whether it’s a fun side project or
								something that solves real-world problems.
							</p>
							<p>Welcome to my portfolio!</p>
							<Button
								className="cursor-pointer border border-black hover:bg-orange-100"
								variant="outline"
								onClick={() => router.push("/projects")}
							>
								View my work!
							</Button>
						</div>
						<div className="flex items-center justify-center">
							<Image
								src="/profile.jpeg"
								alt="profile"
								width={350}
								height={300}
								className="rounded-lg"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
