import YouTube from "react-youtube";

export default function YoutubePlayer({ videoId }: { videoId?: string }) {
	const opts = {
		height: "390",
		width: "640",
		playerVars: {
			autoplay: 0,
		},
	};

	return <YouTube videoId={videoId} opts={opts} />;
}
