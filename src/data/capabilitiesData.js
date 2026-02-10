import {
  TbRocket,
  TbSettingsAutomation,
  TbComponents,
  TbLayersIntersect,
  TbScissors,
  TbSettings,
  TbFlask,
  TbBolt,
  TbTir,
  TbCpu,
  TbAsset,
  TbTreadmill,
  TbVectorBezier,
} from "react-icons/tb";
import capEngImg from "../assets/images/capEng.jpg";
import capPresImg from "../assets/images/capPres.jpg";
import capEMImg from "../assets/images/capEM.jpg";
import capGearsImg from "../assets/images/capGears.jpg";
import capSurfImg from "../assets/images/capSurf.jpg";
import capEwhImg from "../assets/images/capElec.jpg";
import capAsImg from "../assets/images/capAssemWeld.jpg";
import capFastImg from "../assets/images/capFast.jpg";
import capSheetImg from "../assets/images/capSheet.jpg";

export const capabilitiesData = [
  {
    id: "VERT-01",
    title: "Engineering",
    icon: TbRocket,
    tag: "ENG_PRO",
    desc: "Design-to-prototype support utilizing advanced CAD/CAM and process simulation.",
    engineering: {
      para1:
        "At Raghuvamsi the role of our Engineering team is to develop processes that are efficient, repeatable, and, most importantly, capable of meeting or exceeding the quality requirements of our Customers.",
      para2:
        "Our team drives Continuous Improvement initiatives focused on employing “Best Practices” at all stages. We design and build our own fixtures for machining, welding and assembly, as well as most of the cutting tools that we use.",
      para3:
        "Our commitment to the use of Statistical Process Control on the shop floor provides an objective method to validate the capabilities of our processes.",
    },
    image: capEngImg,
  },
  {
    id: "VERT-02",
    title: "Precision Machining",
    icon: TbSettingsAutomation,
    tag: "CNC_V5",
    desc: "5-axis synchronous machining holding tolerances of 0.005mm for propulsion parts.",
    engineering: {
      para1:
        "The core of our business is Precision Machining. With more than 2 decades of experience, we have developed broad capabilities across multiple disciplines including CNC Swiss Turning, Multi-Axis Mill-Turn, 5-axis Palletized Machining, EDM and Grinding.",
      para2:
        "From ultra-precise tiny missile guidance components to complex 5-Axis milling of jet engine brackets, we rely on our team’s skill to produce results that meet our standards for quality. We routinely work to tolerances of 0.0002” (5.0 µm) in machining and 0.0001” (2.5 µm) in grinding.",
      subTag: "DEDICATED CELL LOGIC",
      para3:
        "We leverage dedicated “part family” machining cells for process refinement and schedule flexibility. Supported by our Engineering and Quality teams, this allows for a optimized, lower-cost machining option for high-complexity products.",
    },
    infra: [
      {
        name: "MULTI-AXIS MACHINING CENTERS",
        details:
          "Equipped for deep hole drilling and 5-axis synchronous machining. Features pallet-changers for dedicated setups, minimizing changeover and maximizing productivity through specialized multi-piece fixtures.",
      },
      {
        name: "CNC TURNING CENTERS",
        details:
          "Bore holes as small as 1mm holding 0.005mm tolerances. Equipped with C-axis and high-pressure coolant. Max capacity: 250mm diameter by 300mm length.",
      },
      {
        name: "CNC SWISS",
        details:
          "Equipped with C-axis sub- and main spindles, high-pressure coolant, and hydrostatic bar feeders for complex configurations.",
      },
      {
        name: "EDM MACHINES",
        details:
          "High-precision wire and sinker EDM for intricate profiles up to a 10-inch cube envelope with tolerances of 7.5 microns.",
      },
      {
        name: "MICRO DEBURRING",
        details:
          "Specializing in high-powered microscopic deburring up to 40x magnification, alongside high-energy vibratory tumbling and grit blasting.",
      },
    ],
    image: capPresImg,
  },
  {
    id: "VERT-03",
    title: "Electro Mechanical Assembly",
    icon: TbComponents,
    tag: "ASSY_H1",
    desc: "Turnkey sub-system integration and box-build for aerospace defense.",
    engineering: {
      para1:
        "Raghuvamsi Group has a range of electro-mechanical system capabilities. We specialise in low-volume, high-mix electronics manufacturing, providing fully integrated and high-reliability solutions.",
      para2:
        "We are accustomed to working with specialist complex markets and consistently meeting high-demand specifications. Our team is focused on the stringent requirements of the aerospace, defence and oil and gas industries.",
      subTag: "SYSTEM INTEGRATION",
      para3:
        "Raghuvamsi brings together decades of unrivalled experience in providing end-to-end electro-mechanical solutions through our specialized full systems assembly and comprehensive box build services.",
    },
    specs: ["Roller Swaging", "Helium Leak Test", "Orbital Riveting"],
    // infra: ["Class 100k Clean Room", "Torque Systems"],
    image: capEMImg,
  },
  {
    id: "VERT-04",
    title: "Sheet Metal Fabrication",
    icon: TbScissors,
    tag: "FAB_A7",
    desc: "Precision forming and 4kW fiber laser cutting of high-nickel alloys.",
    engineering: {
      para1:
        "Raghuvamsi’s broad sheet metal capability ranges from simple shapes to large, highly complex formed parts and assemblies, encompassing in-house engineering and manufacturing to deliver high-quality components.",
      para2:
        "Our precision processes include brake, hydro, stretch, bulge, and hot forming, alongside laser cutting and welding of aluminum, titanium, and high-temperature alloys such as nickel and cobalt alloys.",
      subTag: "FABRICATION_LOGISTICS",
      para3:
        "From engine parts like combustion liners to cabin interiors, our concurrent engineering kitting and pre-fit assembly solutions help customers reduce installation time and part count while improving quality.",
    },
    specs: ["4kW Fiber Laser", "8-Axis Bending", "Hydro Forming"],
    // infra: ["Hydro-form Units", "8-Axis Benders"],
    image: capSheetImg,
  },
  {
    id: "VERT-05",
    title: "High Precision Gears",
    icon: TbSettings,
    tag: "GEAR_G1",
    desc: "Spiral bevel cutting and finish grinding for AS9100 torque transmission.",
    engineering: {
      para1:
        "Raghuvamsi provides a wide range of spiral bevel cutting, finish grinding, and 'grind from solid' capabilities to meet the most demanding torque transmission requirements.",
      para2:
        "Our facility can produce high-quality gears across the entire spectrum—ranging from high-volume, standard precision components to critical, high-performance spiral bevel gear sets for aerospace and defense.",
      subTag: "GEAR_METROLOGY",
      para3:
        "By utilizing advanced finish grinding technology, we ensure that every gear set delivers the exact tooth-contact patterns and durability required for mission-critical applications.",
    },
    specs: ['Max 23.5" Dia', "AS9100 Certified", "5-200 Teeth"],
    infra: [
      {
        name: "Spiral Bevel Gears",
        table: {
          headers: [
            "Max Diameter",
            "Number of Teeth",
            "Max Face Width",
            "Types",
          ],
          data: ['23.5"', "5-200", '4.0"', "Ground / Un-ground"],
        },
        note: "Aerospace Quality from start to finish. We are AS9100 Certified.",
      },
      {
        name: "Hypoid Bevel Gears",
        table: {
          headers: [
            "Max Diameter",
            "Number of Teeth",
            "Max Face Width",
            "Types",
          ],
          data: ['17.1"', "5-200", '2.6"', "Ground / Un-ground"],
        },
        note: "Hypoid Spiral Bevel Gears Size Capacity",
      },
      {
        name: "Zerol Bevel Gears",
        table: {
          headers: [
            "Max Diameter",
            "Number of Teeth",
            "Max Face Width",
            "Types",
          ],
          data: ['17.1"', "5-200", '2.6"', "Ground / Un-ground"],
        },
        note: "Zerol Bevel Gears Size Capacity",
      },
      {
        name: "Spur Gears",
        table: {
          headers: ["Max Diameter", "Max Diametrical Pitch", "Max Face Width"],
          data: ['16"', "6", '36"'],
        },
        note: "Spur Gear Size Capacity",
      },
      {
        name: "Splines Internal & External",
        table: {
          headers: ["Max Diameter", "Max Diametrical Pitch", "Max Face Width"],
          data: ['10" Int / 10" Ext', "48/96 – 2.5/5", '4"'],
        },
        note: "Splines Capacity",
      },
      {
        name: "Gears and Spline Shaft",
        table: {
          headers: ["Max Diameter", "Max Diametrical Pitch", "Max Face Width"],
          data: ['16"', "6", '36"'],
        },
        note: "Gear Shaft Capacity",
      },
      {
        name: "Helical Gears",
        table: {
          headers: ["Max Diameter", "Max Diametrical Pitch", "Max Face Width"],
          data: ['16"', "6", '36"'],
        },
        note: "Helical Gear Capacity",
      },
      {
        name: "Internal Gears",
        table: {
          headers: ["Max Diameter", "Max Diametrical Pitch", "Max Face Width"],
          data: ['16"', "4", '4"'],
        },
        note: "Internal Size Capacity",
      },
      {
        name: "Right Angle/Miter Gears",
        table: {
          headers: ["Max Diameter", "Max Diametrical Pitch", "Max Face Width"],
          data: ['17.1"', "5-200", '2.6"'],
        },
        note: "Right Angle / Miter Gears Size Capacity",
      },
    ],
    image: capGearsImg,
  },
  {
    id: "VERT-06",
    title: "Surface Treatment",
    icon: TbFlask,
    tag: "SURF_CP",
    desc: "NADCAP-certified chemical processing and robotic PU painting facility.",
    engineering: {
      para1:
        "Raghuvamsi provides a comprehensive range of wet and dry metal surface finishes globally. Our NADCAP-approved facility integrates heat treatments, adhesive bonding, and descaling with advanced electroplating expertise.",
      para2:
        "We hold NADCAP certifications for critical special processes including Anodize (Types II & III), Chemical Conversion Coating, Passivation, Titanium Cleaning, and NDT (FPI/MPI), as well as AS9100 approved Painting and Spraying.",
      subTag: "SPECIAL_PROCESS_MGMT",
      para3:
        "Beyond in-house capabilities, we manage strategic partnerships with OEM-approved vendors for HVOF/Thermal spray, Brazing, and Micro-structure testing, ensuring a complete end-to-end surface solution.",
    },
    specs: ["Level 3 MPI/FPI", "Anodize Type II/III", "Titanium Cleaning"],
    // infra: ["2500L Tanks", "Robotic Painting"],
    image: capSurfImg,
  },
  {
    id: "VERT-07",
    title: "Fasteners",
    icon: TbBolt,
    tag: "FAST_F1",
    desc: "High-integrity hardware installation and spherical bearing swaging.",
    engineering: {
      para1:
        "Raghuvamsi operates a full-fledged fastener manufacturing facility with end-to-end in-house equipment, ranging from initial wire draw to specialized heat treatment and surface coatings.",
      para2:
        "Our facility specializes in cold heading, thread rolling, and centerless grinding for products ranging from M1.4 to M20 (up to 200mm length). Every component is validated in our hi-tech quality testing laboratory.",
      subTag: "STRATEGIC_DEFENSE_SUPPLY",
      para3:
        "Complying with elite aerospace standards, we serve as a primary partner for MoD establishments, Space Organizations including ISRO and BrahMos, and major private defense OEMs globally.",
    },
    specs: ["M1.4 - M20 Range", "Cold Heading", "Thread Rolling"],
    // infra: ["Wire Draw Lines", "Testing Lab", "Centerless Grinders"],
    image: capFastImg,
  },
  {
    id: "VERT-08",
    title: "Assembly & Weld",
    icon: TbTir,
    tag: "WELD_W1",
    desc: "NADCAP certified joining for engine combustion liners and seals.",
    engineering: {
      para1:
        "Raghuvamsi provides a 'Full Turnkey Solution' for complex mechanical assemblies. Our processes range from Heli-coil® and nut plate installation to Roller Swaging for spherical bearings and Orbital Riveting for high-strength joining.",
      para2:
        "Our NADCAP-certified welding team produces critical turbine components, supported by in-house NDT inspection. We specialize in complex welded assemblies like fuel pipes, satellite drill fixtures, and military vehicle structures.",
      subTag: "TURNKEY_SYSTEM_INTEGRATION",
      para3:
        "Beyond manufacturing, we offer repair and overhaul of control units and flight simulator seat systems. We manage the procurement and fitting of electrical systems, delivering fully tested and certified onsite installations.",
    },
    specs: ["Turbine Components", "Heli-coil® / Swaging", "Flight Sim Systems"],
    // infra: ["NADCAP Weld Cells", "Proof Load Testing", "NDT Inspection"],
    image: capAsImg,
  },
  {
    id: "VERT-09",
    title: "Electronics & Wire Harnesses",
    icon: TbCpu,
    tag: "ELECT_E1",
    desc: "MIL-SPEC cable assemblies and PCB integration for defense systems.",
    engineering: {
      para1:
        "Raghuvamsi provides highly engineered interconnected solutions for MIL-SPEC and commercial applications. Our expertise covers Coaxial, Triaxial, RF, and Braid cable assemblies for low to high-volume complexity.",
      para2:
        "Our integrated facility supports custom over-molding, potting, and harness braiding. We also fulfill advanced electronic manufacturing needs including SMT and THT Printed Circuit Board (PCB) assembly for electromechanical systems.",
      subTag: "SIGNAL_INTEGRITY_LOGIC",
      para3:
        "Serving the aerospace, defense, and aircraft training sectors, our engineers maintain open communication throughout the product lifecycle—ensuring innovative technologies meet individual customer specifications every time.",
    },
    specs: [
      "RF / Coaxial / Triaxial",
      "PCB (SMT & THT)",
      "MIL-SPEC Over-molding",
    ],
    // infra: ["Braiding Machines", "Potting Stations", "SMT Assembly Line"],
    image: capEwhImg,
  },
];

export const sectorData = [
  {
    id: "Sec-01",
    title: "Aerospace",
    mainImage:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop",
    description:
      "Advanced propulsion systems and structural components for next-generation flight.",
    products: [
  {
    name: "Divergent",
    image: "src/assets/images/Divergent.jpeg",
    details: "Precision-engineered exhaust nozzle components designed to manage supersonic gas expansion and directional thrust stability.",
  },
  {
    name: "Mechanical Assembly",
    image: "src/assets/images/Mechanical Assembly.jpeg",
    details: "Complex multi-component integration featuring high-tolerance hardware for mission-critical aerospace structural systems.",
  },
  {
    name: "Sheet Metal Part",
    image: "src/assets/images/Sheet Metal Part.jpeg",
    details: "Advanced alloy forming utilizing fiber laser cutting and precision bending for lightweight aerodynamic housing and liners.",
  },
  {
    name: "Shear Pin Adapter",
    image: "src/assets/images/Spur Gears.jpeg", // Note: Ensure this path matches the component name
    details: "High-integrity safety component engineered to provide calibrated failure points for protecting critical drivetrain torque loads.",
  },
  {
    name: "Seeker Housing",
    image: "src/assets/images/Seeker Housing.jpeg",
    details: "Ultra-precise enclosure for missile guidance systems, machined from specialized alloys to ensure thermal and EMI protection.",
  },
  {
    name: "Shear Pin Adapter",
    image: "src/assets/images/Shear Pin Adapter.jpeg",
    details: "Load-bearing adapter specifically machined for rapid installation and removal in high-vibration aerospace environments.",
  },
  {
    name: "Turbine Wheel",
    image: "src/assets/images/Turbine Wheel.jpeg",
    details: "High-RPM propulsion component manufactured from single-crystal superalloys to withstand extreme thermal and centrifugal stress.",
  },
]
  },
  {
    id: "SEC-02",
    title: "Oil & Gas",
    mainImage:
      "src/assets/images/oil.jpeg",
    description:
      "Providing high-durability valves, flow control components, and ruggedized hardware for extreme environments.",
    products: [
  {
    name: "Artificial Lift",
    image: "src/assets/images/Artificial lift.jpeg",
    details: "High-precision internal components for ESP and rod lift systems, engineered to enhance reservoir production in high-viscosity environments.",
  },
  {
    name: "Completions Products",
    image: "src/assets/images/Completions Products.jpeg",
    details: "Critical downhole hardware including packers and liners, precision-machined to ensure wellbore integrity under extreme pressure and temperature.",
  },
  {
    name: "Drilling Products",
    image: "src/assets/images/Drilling Products.jpeg",
    details: "Ruggedized motor components and drill string stabilizers manufactured from specialized alloys to withstand high-torque rotational stress.",
  },
  {
    name: "Surface Technology",
    image: "src/assets/images/Surface Technology.jpeg",
    details: "Advanced flow control solutions and valve manifold components designed for high-reliability performance in surface production facilities.",
  },
  {
    name: "Wireline Product",
    image: "src/assets/images/Wireline Product.jpeg",
    details: "Precision-machined logging tool housings and intervention hardware, featuring tight tolerances for sensitive electronic sensor protection.",
  },
],
  },
  {
    id: "SEC-03",
    title: "Power",
    mainImage: "src/assets/images/power.jpeg",
    description:
      "Precision components for sustainable energy grids, turbine blades, and high-voltage distribution hardware.",
   products: [
  {
    name: "Fuel Nozzle Assembly",
    image: "src/assets/images/Fuel Nozzle Assembly.jpeg",
    details: "High-precision delivery systems engineered for optimal fuel atomization and combustion efficiency in industrial gas turbines.",
  },
  {
    name: "Lock Plates",
    image: "src/assets/images/Lock Plates.jpeg",
    details: "Critical fastening hardware machined from high-strength alloys to ensure component retention in high-vibration power generation environments.",
  },
  {
    name: "TP Bull Horns",
    image: "src/assets/images/TP Bull Horns.jpeg",
    details: "Specialized structural supports for transition pieces, designed to withstand extreme thermal expansion and aerodynamic stress.",
  },
  {
    name: "Transition Piece Hardware",
    image: "src/assets/images/Transition piece hardware.jpeg",
    details: "High-critical assembly hardware required for managing hot gas pathways between the combustor and turbine stages.",
  },
],
  },
  {
    id: "SEC-04",
    title: "Medical",
    mainImage: "src/assets/images/Medical.jpeg",
    description:
      "Manufacturing of titanium implants and high-precision surgical instrumentation for the healthcare sector.",
    products: [
    ],
  },
];
