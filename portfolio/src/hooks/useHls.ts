import { useEffect, type RefObject } from "react";
import Hls from "hls.js";

/**
 * Attaches an HLS source to a <video> element. Uses hls.js when supported,
 * otherwise falls back to native HLS playback (Safari / iOS). Cleans up the
 * Hls instance on unmount.
 */
export function useHls(videoRef: RefObject<HTMLVideoElement>, src: string) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | undefined;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: false });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS (Safari, iOS)
      video.src = src;
    }

    return () => {
      hls?.destroy();
    };
  }, [videoRef, src]);
}
