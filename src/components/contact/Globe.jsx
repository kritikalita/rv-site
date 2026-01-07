import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const Globe = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      // UPDATED: Deep navy-blue base to blend with gradient
      baseColor: [0.01, 0.1, 0.2], 
      // UPDATED: Bright white/cyan markers for high contrast
      markerColor: [1, 1, 1], 
      glowColor: [0, 0.4, 1], // High-intensity blue glow
      markers: [
        { location: [17.3850, 78.4867], size: 0.1 }, // Hyderabad HQ
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
       <canvas
         ref={canvasRef}
         style={{ width: '100%', height: 'auto', maxWidth: '700px', aspectRatio: '1/1' }}
         className="opacity-90 mix-blend-lighten" // mix-blend-lighten makes it glow on the gradient
       />
    </div>
  );
};

export default Globe;