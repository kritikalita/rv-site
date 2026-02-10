import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

const Globe = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 4.5;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        // Use offsetWidth but fallback to a reasonable mobile size if 0
        width = canvasRef.current.offsetWidth || window.innerWidth;
      }
    };
    
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 4.5,
      theta: 0.4,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.0078, 0.1255, 0.2863],
      markerColor: [1, 1, 1],
      glowColor: [0, 0.278, 0.671],
      markers: [
        { location: [17.385, 78.4867], size: 0.12 },
        { location: [43.0481, -100.1474], size: 0.08 },
        { location: [51.5074, -0.1278], size: 0.08 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    // Fade in effect
    setTimeout(() => {
      if(canvasRef.current) canvasRef.current.style.opacity = "1";
    }, 100);

    return () => { 
      globe.destroy(); 
      window.removeEventListener("resize", onResize); 
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "800px",
          aspectRatio: "1/1",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
};

export default Globe;