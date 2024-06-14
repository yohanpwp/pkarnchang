import { useState, useRef, useEffect } from 'react';

export default function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
  if (isPlaying) {
    ref.current.play();  // Calling these while rendering isn't allowed.
  } else {
    ref.current.pause(); // Also, this crashes.
  }
});

  return <video ref={ref} src={src} loop playsInline />;
}


