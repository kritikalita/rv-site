import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const Globe = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 4.5; // START POSITION: Adjusted to make USA/UK visible on load
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
      phi: 4.5,
      theta: 0.4, // TILT: Increased slightly to bring USA/UK down from the top edge
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.0078, 0.1255, 0.2863], // #022049
      markerColor: [1, 1, 1], // Pure White
      glowColor: [0, 0.278, 0.671], // #0047AB
      markers: [
        { location: [17.3850, 78.4867], size: 0.12 }, // Hyderabad, India
        { location: [43.0481, -100.1474], size: 0.08 }, // Syracuse, USA
        { location: [51.5074, -0.1278], size: 0.08 },  // London, UK
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
       {/* Removed mix-blend-screen if it was making points too faint on your specific background */}
       <canvas
         ref={canvasRef}
         style={{ width: '100%', height: 'auto', maxWidth: '700px', aspectRatio: '1/1' }}
         className="opacity-100" 
       />
    </div>
  );
};

export default Globe;