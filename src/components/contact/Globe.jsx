import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

const Globe = () => {
  const canvasRef = useRef();
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // 1. WEBGL SUPPORT CHECK
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(window.WebGLRenderingContext && 
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
      } catch (e) {
        return false;
      }
    };

    if (!checkWebGL()) {
      setIsSupported(false);
      return;
    }

    // 2. GLOBE INITIALIZATION
    let phi = 4.5;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
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
        { location: [17.385, 78.4867], size: 0.12 }, // Hyderabad HQ
        { location: [43.0481, -76.1474], size: 0.08 }, // WMT USA
        { location: [51.5074, -0.1278], size: 0.08 },  // PMC UK
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
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // 3. FALLBACK UI
  if (!isSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center opacity-20">
        {/* A simple static representation of a globe or world map */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
          alt="World Map Fallback" 
          className="w-full h-auto filter brightness-200 invert"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "800px",
          aspectRatio: "1/1",
        }}
      />
    </div>
  );
};

export default Globe;