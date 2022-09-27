import { RefObject, useEffect, useRef } from "react";

const VideoPlayer = ({ stream }: { stream: MediaStream }) => {
  const ref: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.srcObject = stream;
    }

    return () => {};
  }, [stream]);

  return (
    <video
      id="vdo"
      ref={ref}
      className="aspect-video w-full"
      autoPlay
      controls
    />
  );
};

export default VideoPlayer;
