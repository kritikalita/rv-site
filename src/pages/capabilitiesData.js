import { 
  TbSettingsAutomation, TbSettings, TbBinaryTree, TbLayersIntersect, 
  TbWind, TbMicroscope, TbBolt, TbTractor, TbCpu, TbRocket,
  TbPlane, TbShieldCheck, TbFlame, TbActivity, TbStethoscope 
} from "react-icons/tb";

export const capabilitiesData = [
  {
    id: "VERT-01",
    title: "Engineering",
    icon: TbRocket,
    tag: "ENG_PRO",
    desc: "Design-to-prototype support utilizing advanced CAD/CAM and process simulation.",
    engineering: {
      para1: "At Raghuvamsi the role of our Engineering team is to develop processes that are efficient, repeatable, and, most importantly, capable of meeting or exceeding the quality requirements of our Customers.",
      para2: "Our team drives Continuous Improvement initiatives focused on employing “Best Practices” at all stages. We design and build our own fixtures for machining, welding and assembly, as well as most of the cutting tools that we use.",
      para3: "Our commitment to the use of Statistical Process Control on the shop floor provides an objective method to validate the capabilities of our processes."
    },
    image: "src/assets/images/capEng.webp"
  },
  {
    id: "VERT-02",
    title: "Precision Machining",
    icon: TbSettingsAutomation,
    tag: "CNC_V5",
    desc: "5-axis synchronous machining holding tolerances of 0.005mm for propulsion parts.",
    engineering: {
      para1: "The core of our business is Precision Machining. With more than 2 decades of experience, we have developed broad capabilities across multiple disciplines including CNC Swiss Turning, Multi-Axis Mill-Turn, 5-axis Palletized Machining, EDM and Grinding.",
      para2: "From ultra-precise tiny missile guidance components to complex 5-Axis milling of jet engine brackets, we rely on our team’s skill to produce results that meet our standards for quality. We routinely work to tolerances of 0.0002” (5.0 µm) in machining and 0.0001” (2.5 µm) in grinding.",
      subTag: "DEDICATED CELL LOGIC",
      para3: "We leverage dedicated “part family” machining cells for process refinement and schedule flexibility. Supported by our Engineering and Quality teams, this allows for a optimized, lower-cost machining option for high-complexity products."
    },
    specs: ["0.005mm Bore", "7.5 Micron EDM", "Swiss 32mm"],
    infra: ["MULTI-AXIS MACHINING CENTERS", "CNC TURNING CENTERS", "CNC SWISS", "EDM MACHINES", "MICRO DEBURRING"],
    image: "src/assets/images/capPres.webp"
  },
  {
    id: "VERT-03",
    title: "Electro Mechanical Assembly",
    icon: TbBinaryTree,
    tag: "ASSY_H1",
    desc: "Turnkey sub-system integration and box-build for aerospace defense.",
    engineering: {
      para1: "Raghuvamsi Group has a range of electro-mechanical system capabilities. We specialise in low-volume, high-mix electronics manufacturing, providing fully integrated and high-reliability solutions.",
      para2: "We are accustomed to working with specialist complex markets and consistently meeting high-demand specifications. Our team is focused on the stringent requirements of the aerospace, defence and oil and gas industries.",
      subTag: "SYSTEM INTEGRATION",
      para3: "Raghuvamsi brings together decades of unrivalled experience in providing end-to-end electro-mechanical solutions through our specialized full systems assembly and comprehensive box build services."
    },
    specs: ["Roller Swaging", "Helium Leak Test", "Orbital Riveting"],
    // infra: ["Class 100k Clean Room", "Torque Systems"],
    image: "src/assets/images/capEM.webp"
  },
  {
    id: "VERT-04",
    title: "Composites",
    icon: TbLayersIntersect,
    tag: "COMP_X2",
    desc: "Advanced structural carbon/glass fiber parts with Autoclave curing.",
    engineering: {
      para1: "Raghuvamsi offers build-to-print manufacture and repair of composite and metal-bonded parts, subassemblies, and assemblies in a wide variety of common aerospace materials.",
      para2: "We manufacture advanced composite structural parts and assemblies for aerospace and defense applications using carbon and glass fiber materials and autoclave curing technology.",
      subTag: "AEROSPACE_COMPOSITES",
      para3: "Our high-precision manufacturing output includes mission-critical composite parts and structural components for aircraft, helicopters, UAV’s and spacecraft."
    },
    specs: ["Aerospace Autoclave", "RTM Moulding", "NDT Ultrasonic"],
    // infra: ["PLC Autoclaves", "ISO Class 8 Lab"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
{
    id: "VERT-05",
    title: "Sheet Metal Fabrication",
    icon: TbWind,
    tag: "FAB_A7",
    desc: "Precision forming and 4kW fiber laser cutting of high-nickel alloys.",
    engineering: {
      para1: "Raghuvamsi’s broad sheet metal capability ranges from simple shapes to large, highly complex formed parts and assemblies, encompassing in-house engineering and manufacturing to deliver high-quality components.",
      para2: "Our precision processes include brake, hydro, stretch, bulge, and hot forming, alongside laser cutting and welding of aluminum, titanium, and high-temperature alloys such as nickel and cobalt alloys.",
      subTag: "FABRICATION_LOGISTICS",
      para3: "From engine parts like combustion liners to cabin interiors, our concurrent engineering kitting and pre-fit assembly solutions help customers reduce installation time and part count while improving quality."
    },
    specs: ["4kW Fiber Laser", "8-Axis Bending", "Hydro Forming"],
    // infra: ["Hydro-form Units", "8-Axis Benders"],
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5"
  },
{
    id: "VERT-06",
    title: "High Precision Gears",
    icon: TbSettings,
    tag: "GEAR_G1",
    desc: "Spiral bevel cutting and finish grinding for AS9100 torque transmission.",
    engineering: {
      para1: "Raghuvamsi provides a wide range of spiral bevel cutting, finish grinding, and 'grind from solid' capabilities to meet the most demanding torque transmission requirements.",
      para2: "Our facility can produce high-quality gears across the entire spectrum—ranging from high-volume, standard precision components to critical, high-performance spiral bevel gear sets for aerospace and defense.",
      subTag: "GEAR_METROLOGY",
      para3: "By utilizing advanced finish grinding technology, we ensure that every gear set delivers the exact tooth-contact patterns and durability required for mission-critical applications."
    },
    specs: ["Max 23.5\" Dia", "AS9100 Certified", "5-200 Teeth"],
    infra: ["Spiral Bevel Gears", "Hypoid Bevel Gears", "Zerol Bevel Gears", "Spur Gears", "Splines Internal & External", "Gears and Spline Shaft", "Helical Gears", "Internal Gears", "Right Angle/Miter Gears"],
    image: "src/assets/images/capHiPres.webp"
  },
  {
    id: "VERT-07",
    title: "Surface Treatment",
    icon: TbMicroscope,
    tag: "SURF_CP",
    desc: "NADCAP-certified chemical processing and robotic PU painting facility.",
    engineering: {
      para1: "Raghuvamsi provides a comprehensive range of wet and dry metal surface finishes globally. Our NADCAP-approved facility integrates heat treatments, adhesive bonding, and descaling with advanced electroplating expertise.",
      para2: "We hold NADCAP certifications for critical special processes including Anodize (Types II & III), Chemical Conversion Coating, Passivation, Titanium Cleaning, and NDT (FPI/MPI), as well as AS9100 approved Painting and Spraying.",
      subTag: "SPECIAL_PROCESS_MGMT",
      para3: "Beyond in-house capabilities, we manage strategic partnerships with OEM-approved vendors for HVOF/Thermal spray, Brazing, and Micro-structure testing, ensuring a complete end-to-end surface solution."
    },
    specs: ["Level 3 MPI/FPI", "Anodize Type II/III", "Titanium Cleaning"],
    // infra: ["2500L Tanks", "Robotic Painting"],
    image: "src/assets/images/capSurf.webp"
  },
  {
    id: "VERT-08",
    title: "Fasteners",
    icon: TbBolt,
    tag: "FAST_F1",
    desc: "High-integrity hardware installation and spherical bearing swaging.",
    engineering: {
      para1: "Raghuvamsi operates a full-fledged fastener manufacturing facility with end-to-end in-house equipment, ranging from initial wire draw to specialized heat treatment and surface coatings.",
      para2: "Our facility specializes in cold heading, thread rolling, and centerless grinding for products ranging from M1.4 to M20 (up to 200mm length). Every component is validated in our hi-tech quality testing laboratory.",
      subTag: "STRATEGIC_DEFENSE_SUPPLY",
      para3: "Complying with elite aerospace standards, we serve as a primary partner for MoD establishments, Space Organizations including ISRO and BrahMos, and major private defense OEMs globally."
    },
    specs: ["M1.4 - M20 Range", "Cold Heading", "Thread Rolling"],
    // infra: ["Wire Draw Lines", "Testing Lab", "Centerless Grinders"],
    image: "https://images.unsplash.com/photo-1517055727180-d1a6761c54c4"
  },
{
    id: "VERT-09",
    title: "Assembly & Weld",
    icon: TbTractor,
    tag: "WELD_W1",
    desc: "NADCAP certified joining for engine combustion liners and seals.",
    engineering: {
      para1: "Raghuvamsi provides a 'Full Turnkey Solution' for complex mechanical assemblies. Our processes range from Heli-coil® and nut plate installation to Roller Swaging for spherical bearings and Orbital Riveting for high-strength joining.",
      para2: "Our NADCAP-certified welding team produces critical turbine components, supported by in-house NDT inspection. We specialize in complex welded assemblies like fuel pipes, satellite drill fixtures, and military vehicle structures.",
      subTag: "TURNKEY_SYSTEM_INTEGRATION",
      para3: "Beyond manufacturing, we offer repair and overhaul of control units and flight simulator seat systems. We manage the procurement and fitting of electrical systems, delivering fully tested and certified onsite installations."
    },
    specs: ["Turbine Components", "Heli-coil® / Swaging", "Flight Sim Systems"],
    // infra: ["NADCAP Weld Cells", "Proof Load Testing", "NDT Inspection"],
    image: "https://images.unsplash.com/photo-1504328332780-bebf217e04cd"
  },
{
    id: "VERT-10",
    title: "Electronics & Wire Harnesses",
    icon: TbCpu,
    tag: "ELECT_E1",
    desc: "MIL-SPEC cable assemblies and PCB integration for defense systems.",
    engineering: {
      para1: "Raghuvamsi provides highly engineered interconnected solutions for MIL-SPEC and commercial applications. Our expertise covers Coaxial, Triaxial, RF, and Braid cable assemblies for low to high-volume complexity.",
      para2: "Our integrated facility supports custom over-molding, potting, and harness braiding. We also fulfill advanced electronic manufacturing needs including SMT and THT Printed Circuit Board (PCB) assembly for electromechanical systems.",
      subTag: "SIGNAL_INTEGRITY_LOGIC",
      para3: "Serving the aerospace, defense, and aircraft training sectors, our engineers maintain open communication throughout the product lifecycle—ensuring innovative technologies meet individual customer specifications every time."
    },
    specs: ["RF / Coaxial / Triaxial", "PCB (SMT & THT)", "MIL-SPEC Over-molding"],
    // infra: ["Braiding Machines", "Potting Stations", "SMT Assembly Line"],
    image: "src/assets/images/capEwh.webp"
  },
];

export const sectorData = [
  {
    id: "Sec-01",
    title: "Aerospace",
    // Use a string for the image path, not a component
    mainImage: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80",
    description: "Advanced propulsion systems and structural components for next-generation flight.",
    products: [
      {
        name: "Turbine Blade Assembly",
        image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80",
        details: "Single-crystal superalloy construction for extreme thermal environments."
      },
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
     
    ]
  },
 {
    id: "Sec-02",
    title: "Space",
    mainImage: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80",
    description: "Advanced propulsion systems and structural components for next-generation flight.",
    products: [
      {
        name: "Turbine Blade Assembly",
        image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80",
        details: "Single-crystal superalloy construction for extreme thermal environments."
      },
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      
     
    ]
  },
  {
    id: "SEC-03",
    title: "Defence",
    mainImage: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80",
    description: "Manufacturing satellite frames and cryogenic launch vehicle hardware capable of extreme thermal cycles.",
    products: [
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Engine Pylons", 
        image: "https://images.unsplash.com/photo-1559297434-2d8a1e929ff7", 
        details: "Structural mounting systems precision-machined for narrow-body aircraft."
      },
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Engine Pylons", 
        image: "https://images.unsplash.com/photo-1559297434-2d8a1e929ff7", 
        details: "Structural mounting systems precision-machined for narrow-body aircraft."
      }
      
    ]
  },
  {
    id: "SEC-04",
    title: "Oil & Gas",
    mainImage: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80",
    description: "Providing high-durability valves, flow control components, and ruggedized hardware for extreme environments.",
    products: [
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Engine Pylons", 
        image: "https://images.unsplash.com/photo-1559297434-2d8a1e929ff7", 
        details: "Structural mounting systems precision-machined for narrow-body aircraft."
      },
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Engine Pylons", 
        image: "https://images.unsplash.com/photo-1559297434-2d8a1e929ff7", 
        details: "Structural mounting systems precision-machined for narrow-body aircraft."
      }
      
    ]
  },
  {
    id: "SEC-05",
    title: "Power",
    mainImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
    description: "Precision components for sustainable energy grids, turbine blades, and high-voltage distribution hardware.",
    products: [
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Engine Pylons", 
        image: "https://images.unsplash.com/photo-1559297434-2d8a1e929ff7", 
        details: "Structural mounting systems precision-machined for narrow-body aircraft."
      },
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Engine Pylons", 
        image: "https://images.unsplash.com/photo-1559297434-2d8a1e929ff7", 
        details: "Structural mounting systems precision-machined for narrow-body aircraft."
      }
      
    ]
  },
  {
    id: "SEC-06",
    title: "Medical",
    mainImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    description: "Manufacturing of titanium implants and high-precision surgical instrumentation for the healthcare sector.",
    products: [
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Engine Pylons", 
        image: "https://images.unsplash.com/photo-1559297434-2d8a1e929ff7", 
        details: "Structural mounting systems precision-machined for narrow-body aircraft."
      },
      { 
        name: "Combustion Liners", 
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", 
        details: "High-temperature nickel alloy assemblies for next-gen turbine engines."
      },
      { 
        name: "Engine Pylons", 
        image: "https://images.unsplash.com/photo-1559297434-2d8a1e929ff7", 
        details: "Structural mounting systems precision-machined for narrow-body aircraft."
      }
      
    ]
  }
];