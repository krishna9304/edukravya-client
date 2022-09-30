import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { FC, RefObject, useEffect, useRef } from "react";

interface VideoProps {
  stream?: MediaStream;
  src?: string;
  isFullScreen?: boolean;
}

const VideoPlayer: FC<VideoProps> = ({
  stream,
  src,
  isFullScreen,
}: VideoProps) => {
  const ref: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null);
  useEffect((): (() => void) => {
    if (ref.current) {
      ref.current.srcObject = stream || null;
    }
    return (): void => {};
  }, [stream]);

  useEffect((): (() => void) => {
    if (ref.current && isFullScreen) {
      ref.current.requestFullscreen();
    }
    return (): void => {};
  }, []);

  return (
    <video
      muted
      ref={ref}
      src={src}
      className="w-full max-w-5xl grow object-contain aspect-video bg-gray-900 rounded-md"
      autoPlay={!false}
      controls
    />
  );
};

export default VideoPlayer;
