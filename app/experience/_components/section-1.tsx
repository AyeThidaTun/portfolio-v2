import Image from "next/image";

export default function Section1() {
	return (
		<section className="px-20 py-15 max-w-5xl mx-auto">
			<div className="grid md:grid-cols-2 gap-12 items-center">
				<div>
					<h2 className="text-3xl font-bold mb-6">Beyond the Code</h2>
					<div className="space-y-4 text-gray-700">
						<p>
							Originally from Myanmar, I discovered programming through youtube
							tutorials. What started as curiosity became a passion.
						</p>
						<p>
							Outside of coding, I like reading and swimming. I find that those
							hobbies actually improves my problem-solving as they help me think
							more clearly and relax my mind.
						</p>
						<p>
							I am always learning new things and looking for ways to grow, both
							personally and professionally.
						</p>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="relative w-75 h-75">
						<div className="absolute inset-0 rotate-12 bg-gray-200 shadow-lg rounded-lg overflow-hidden"></div>
						<div className="absolute inset-0 rotate-6 bg-gray-300 shadow-lg rounded-lg overflow-hidden"></div>
						<div className="absolute inset-0 bg-white shadow-lg rounded-lg overflow-hidden">
							<Image
								src={"/profile.jpeg"}
								alt=""
								width={300}
								height={100}
								className="rounded-md"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
