import { 
  TbSettingsAutomation, TbSettings, TbBinaryTree, TbLayersIntersect, 
  TbWind, TbMicroscope, TbBolt, TbTractor, TbCpu, TbRocket,
  TbPlane, TbShieldCheck, TbFlame, TbActivity, TbStethoscope 
} from "react-icons/tb";

// Ensure TbRocket and other icons are only listed ONCE in the curly braces above.

export const capabilitiesData = [
  {
    id: "VERT-01",
    title: "Engineering",
    icon: TbRocket,
    tag: "ENG_PRO",
    desc: "Design-to-prototype support utilizing advanced CAD/CAM and process simulation.",
    // Detailed content for the "Read More" section
    longDesc: "Our engineering division serves as the backbone of our manufacturing process. We specialize in complex aerospace geometries, utilizing CATIA V5 for design and Mastercam for precision toolpath generation. Our team conducts full process simulations to ensure zero-defect manufacturing before a single piece of metal is cut.",
    specs: ["CATIA / Mastercam", "3D Digital Twin", "Process Simulation", "Feasibility Analysis", "Tooling Design"],
    infra: ["Advanced CAD Station", "Simulation Lab", "Reverse Engineering Scanners"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12"
  },
  {
    id: "VERT-02",
    title: "Precision Machining",
    icon: TbSettingsAutomation,
    tag: "CNC_V5",
    desc: "5-axis synchronous machining holding tolerances of 0.005mm for propulsion parts.",
    specs: ["0.005mm Bore", "7.5 Micron EDM", "Swiss 32mm"],
    infra: ["Mazak Integrex", "Makino DA300"],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7"
  },
  {
    id: "VERT-03",
    title: "Electro Mechanical Assembly",
    icon: TbBinaryTree,
    tag: "ASSY_H1",
    desc: "Turnkey sub-system integration and box-build for aerospace defense.",
    specs: ["Roller Swaging", "Helium Leak Test", "Orbital Riveting"],
    infra: ["Class 100k Clean Room", "Torque Systems"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "VERT-04",
    title: "Composites",
    icon: TbLayersIntersect,
    tag: "COMP_X2",
    desc: "Advanced structural carbon/glass fiber parts with Autoclave curing.",
    specs: ["Aerospace Autoclave", "RTM Moulding", "NDT Ultrasonic"],
    infra: ["PLC Autoclaves", "ISO Class 8 Lab"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    id: "VERT-05",
    title: "Sheet Metal Fabrication",
    icon: TbWind,
    tag: "FAB_A7",
    desc: "Precision forming and 4kW fiber laser cutting of high-nickel alloys.",
    specs: ["4kW Fiber Laser", "8-Axis Bending", "Hydro Forming"],
    infra: ["Hydro-form Units", "8-Axis Benders"],
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5"
  },
  {
    id: "VERT-06",
    title: "High Precision Gears",
    icon: TbSettings,
    tag: "GEAR_G1",
    desc: "Spiral bevel cutting and finish grinding for AS9100 torque transmission.",
    specs: ["Max 23.5\" Dia", "AS9100 Certified", "5-200 Teeth"],
    infra: ["Gleason Phoenix", "Finish Grinders"],
    image: "https://images.unsplash.com/photo-1516937941348-c09645f31e51"
  },
  {
    id: "VERT-07",
    title: "Surface Treatment",
    icon: TbMicroscope,
    tag: "SURF_CP",
    desc: "NADCAP-certified chemical processing and robotic PU painting facility.",
    specs: ["Level 3 MPI/FPI", "Anodize Type II/III", "Titanium Cleaning"],
    infra: ["2500L Tanks", "Robotic Painting"],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4"
  },
  {
    id: "VERT-08",
    title: "Fasteners",
    icon: TbBolt,
    tag: "FAST_F1",
    desc: "High-integrity hardware installation and spherical bearing swaging.",
    specs: ["Heli-coil® Install", "Nut-plate Riveting", "Bushing Press-fit"],
    infra: ["Precision Riveting", "Load Cells"],
    image: "https://images.unsplash.com/photo-1517055727180-d1a6761c54c4"
  },
  {
    id: "VERT-09",
    title: "Assembly & Weld",
    icon: TbTractor,
    tag: "WELD_W1",
    desc: "NADCAP certified joining for engine combustion liners and seals.",
    specs: ["Combustion Liners", "X-Ray NDT Weld", "Sub-assembly"],
    infra: ["Precision Weld Cells", "Assembly Bays"],
    image: "https://images.unsplash.com/photo-1504328332780-bebf217e04cd"
  },
  {
    id: "VERT-10",
    title: "Electronics & Wire Harnesses",
    icon: TbCpu,
    tag: "ELECT_E1",
    desc: "MIL-SPEC cable assemblies and PCB integration for defense systems.",
    specs: ["Coaxial/Triaxial", "RF Signal Integrity", "PCB Box-build"],
    infra: ["Potting Stations", "Auto Crimpers"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
];

export const sectorData = [
  {
    id: "SEC-01",
    title: "Aerospace",
    icon: TbPlane,
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933",
    intel: "Supporting Tier-1 OEMs with engine pylons, combustion liners, and flight-critical structural hardware.",
    metrics: ["AS9100D Certified", "99.8% Precision", "Boeing/GE Approved"],
    capabilities: ["5-Axis Machining", "Sheet Metal", "Surface Treatment"]
  },
  {
    id: "SEC-02",
    title: "Space",
    icon: TbRocket,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    intel: "Manufacturing satellite frames and cryogenic launch vehicle hardware capable of extreme thermal cycles.",
    metrics: ["ISRO Certified", "Cryogenic Ready", "Zero-Defect Tech"],
    capabilities: ["Precision Gears", "Composites", "Special Processes"]
  },
  {
    id: "SEC-03",
    title: "Defence",
    icon: TbShieldCheck,
    image: "https://images.unsplash.com/photo-1596328325608-4171804f5802",
    intel: "Indigenous development of loitering munitions, missile sub-systems, and autonomous combat robotics.",
    metrics: ["DRDO Partner", "Strategic Readiness", "MIL-SPEC Compliant"],
    capabilities: ["UAV Development", "Wire Harnesses", "Mechanical Assy"]
  },
  {
    id: "SEC-04",
    title: "Oil & Gas",
    icon: TbFlame,
    image: "https://images.unsplash.com/photo-1516937941348-c09645f31e51",
    intel: "Providing high-durability valves, flow control components, and ruggedized hardware for extreme environments.",
    metrics: ["API Compliant", "High-Nickel Alloys", "Durability Testing"],
    capabilities: ["Hard Metal Machining", "Specialized Weld", "Fasteners"]
  },
  {
    id: "SEC-05",
    title: "Power",
    icon: TbActivity,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
    intel: "Precision components for sustainable energy grids, turbine blades, and high-voltage distribution hardware.",
    metrics: ["Grid-Scale Reliability", "Thermal Stability", "ISO 9001"],
    capabilities: ["Engineering", "Sheet Metal", "Surface Treatment"]
  },
  {
    id: "SEC-06",
    title: "Medical",
    icon: TbStethoscope,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    intel: "Manufacturing of titanium implants and high-precision surgical instrumentation for the healthcare sector.",
    metrics: ["ISO 13485", "Biocompatible Focus", "Micro-Precision"],
    capabilities: ["Swiss Turning", "Micro Deburring", "Quality Metrology"]
  }
];