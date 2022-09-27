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
      muted
      ref={ref}
      className="w-full aspect-video bg-black"
      autoPlay
      controls
    >
      <div className="w-20 h-2 bg-black">Hiii</div>
    </video>
  );
};

export default VideoPlayer;
