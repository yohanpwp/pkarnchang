import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
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
// Validate ประเภทไฟล์ที่จะเอาเข้า ต้องติดตั้ง propTypes
// VideoPlayer.propTypes = {
//   src: PropTypes.string.isRequired,
//   isPlaying: PropTypes.bool.isRequired,
// };

export default VideoPlayer ;

