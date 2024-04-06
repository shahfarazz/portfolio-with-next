const VideoComponent = ({ src }: { src: string }) => (
	<video src={src} muted autoPlay loop />
);

export default VideoComponent;
