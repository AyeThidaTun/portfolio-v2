export default function Quote() {
	return (
		<section className="flex flex-col justify-center py-30">
			<div className="max-w-7xl mx-auto">
				<p className="text-center pb-10">This has always been my favorite quote:</p>
				<blockquote className="text-2xl italic text-center max-w-2xl">
					“<span className="bg-blue-50">Don&apos;t settle for average. Bring your best to the moment. Then,
					whether it fails or succeeds, at least you know you gave all you had.</span>”
					<br />
					<br />― Angela Bassett
				</blockquote>
			</div>
		</section>
	);
}
