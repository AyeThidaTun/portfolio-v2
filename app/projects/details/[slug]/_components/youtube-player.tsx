import YouTube from "react-youtube";

export default function YoutubePlayer({ videoId }: { videoId?: string }) {
	const opts = {
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<div className="w-full aspect-video max-w-full md:max-w-160 overflow-hidden">
			<YouTube
				videoId={videoId}
				opts={opts}
				className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
			/>
		</div>
	);
}
