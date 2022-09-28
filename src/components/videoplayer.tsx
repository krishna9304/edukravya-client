import { FC, RefObject, useEffect, useRef } from "react";

interface VideoProps {
  stream?: MediaStream;
  src?: string;
}

const VideoPlayer: FC<VideoProps> = ({ stream, src }: VideoProps) => {
  const ref: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (ref.current && stream) {
      ref.current.srcObject = stream;
    }

    return () => {};
  }, [stream]);

  return (
    <video
      muted
      ref={ref}
      src={src}
      className="w-full aspect-video bg-secondary-500 rounded-md"
      autoPlay
      controls
    />
  );
};

export default VideoPlayer;
