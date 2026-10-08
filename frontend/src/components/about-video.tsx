'use client';

import { useEffect, useRef, useState } from 'react';

export function AboutVideo() {
  const [playing, setPlaying] = useState(false);
  const player = useRef<HTMLIFrameElement>(null);
  useEffect(() => { if (playing) player.current?.focus(); }, [playing]);
  return <div>
    <div className="pack-about-video">
      {playing ? <iframe ref={player} src="https://www.youtube-nocookie.com/embed/ld1GVmAPSyI?autoplay=1" title="Cómo nació Pack Lab — video en YouTube" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> :
        <button type="button" className="pack-about-videoCover" onClick={() => setPlaying(true)} aria-label="Reproducir video: Cómo nació Pack Lab">
          <span className="pack-about-videoLabel">UNA MIRADA A PACK LAB</span><span className="pack-about-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="m9 5 11 7-11 7Z" /></svg></span><span className="pack-about-videoTitle">Cómo nació<br />Pack Lab</span><span className="pack-about-videoHint">REPRODUCIR VIDEO</span>
        </button>}
    </div>
    <p className="pack-about-videoNote">Video proporcionado de Pack Lab. <a href="https://www.youtube.com/watch?v=ld1GVmAPSyI" target="_blank" rel="noopener noreferrer">Ver en YouTube ↗</a></p>
  </div>;
}
