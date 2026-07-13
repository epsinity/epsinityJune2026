export const CASE_STUDIES = {
    "01": {
        approach: [
            "Thermal Comfort Optimization: CFD models predict Predicted Mean Vote (PMV) and Predicted Percentage of Dissatisfied (PPD) indices. This ensures even temperature distribution and eliminates drafts or stagnant hot spots.",
            "Indoor Air Quality (IAQ) Assessment: Simulations track the age of air, ventilation effectiveness, and the dispersion of pollutants, carbon dioxide, or airborne pathogens.",
            "Data Center Cooling: Modeling high-density server racks helps optimize raised- floor plenums, hot/cold aisle containment, and blind tile placements to prevent equipment overheating.",
            "External Wind Engineering: Simulating wind interaction with buildings helps optimize the placement of fresh air intakes and exhaust louvers to prevent re- entrainment of contaminated air.",
            "Smoke Management and Fire Safety: CFD models smoke propagation and visibility during fire scenarios. This validates the effectiveness of emergency smoke extraction systems in large atriums or tunnels.",
        ],
    },
    "02": {
        approach: [
            "External Aerodynamics: Simulating airflow over wings, fuselages, and control surfaces to predict lift, drag, and pitching moments across subsonic, transonic, and supersonic regimes.",
            "Propulsion System Integration: Modeling internal flow within jet engines, including intake duct efficiency, compressor/turbine blade aerodynamics, and exhaust plume expansion.",
            "Drag Reduction: Refining vehicle silhouettes, A-pillars, side mirrors, and underbodies to lower the coefficient of drag, which directly extends vehicle driving range.",
            "Downforce & Stability: Designing front splitters, rear wings, and diffusers for high-performance vehicles to maximize tire grip without excessively increasing drag.",
            "Thermal Management: Simulating airflow through front grilles, radiators, and engine bays to ensure optimal cooling for internal combustion engines or EV battery packs.",
            "Cabin Aeroacoustics: Analyzing wind noise generation around side mirrors and sunroofs to improve interior passenger comfort.",
        ],
    },
    "03": {
        approach: [
            "Multiphase Flow Simulation: It is crucial for understanding complex mixtures of oil, gas, water, and solid particles flowing from the reservoir, helping to manage challenges like slug flow and ensuring uninterrupted transport.",
            "Offshore Platform Design: CFD is used to simulate environmental loads from wind and waves, ensuring the structural integrity and safety of offshore rigs.",
            "Pipeline Design and Flow Assurance: CFD helps mitigate flow assurance issues such as hydrate formation, wax deposition, and corrosion/erosion caused by solid particles, ensuring safe and efficient fluid transport through pipelines.",
            "Sloshing Analysis in Tanks: By simulating the movement of liquids within transport or storage tanks, engineers can design safer, more structurally sound vessels that can withstand encountered forces and minimize the risk of spills.",
            "Separation Process Optimization: It is used to design and evaluate the efficiency of two- and three-phase separators (oil, water, and gas) and hydrocyclones, ensuring extracted fluids are free from contaminants and improving overall separation efficiency.",
            "Environmental Impact Assessment: It helps predict the dispersion and behavior of pollutants (e.g., in oil spill scenarios) to develop effective mitigation strategies and minimize environmental impact.",
        ],
    },
    "04": {
        approach: [
            "Preventing Thermal Runaway: CFD models simulate worst-case abuse scenarios to design propagation barriers and emergency venting systems.",
            "Cooling Plate Optimization: Engineers use CFD to evaluate liquid-cooling cold plates, optimizing internal mini-channel geometries to minimize pressure drop while maximizing temperature uniformity across cells.",
            "Degradation Mitigation: Minimizing cell-to-cell temperature deltas (ideally <5°C) prevents localized accelerated aging and capacity fade.",
        ],
    },
    "05": {
        approach: [
            "Smoke Control System Validation: Testing the performance of mechanical exhaust fans, jet fans, and automatic smoke curtains in high-volume spaces like shopping malls, airport terminals, and sports stadiums.",
            "ASET vs. RSET Analysis: Calculating the Available Safe Egress Time (ASET) based on smoke toxicity, temperature, and visibility thresholds, and comparing it against the Required Safe Egress Time (RSET) for occupant evacuation.",
            'Tunnel Ventilation Design: Simulating fire scenarios in highway, rail, or subway tunnels to optimize longitudinal or transverse ventilation systems, ensuring the "critical velocity" is met to prevent backlayering (smoke flowing upstream against the ventilation).',
            "Car Park Ventilation: Designing impulse (jet) fan systems in enclosed underground parking structures to ensure effective smoke clearing and to prevent toxic carbon monoxide build-up during normal operation.",
        ],
    },
    "06": {
        approach: [
            `Frontal/Side Impact: CAE tracks the progressive buckling of front rails and
bumper beams, ensuring they fold like an accordion to dissipate kinetic energy.`,
            `Cabin Integrity: Stress models ensure that the passenger "survival cell" (A, B,
and C pillars) experiences minimal deformation under severe impact or rollover
conditions`,
            `Chassis and Suspension: Fatigue CAE predicts microscopic crack initiation in
control arms, knuckles, and subframes caused by potholes, cornering, and
braking forces.`,
            `Body-in-White (BIW): Stress analysis evaluates the integrity of thousands of
spot welds, structural adhesives, and rivets bonding the vehicle body frame
together`,
            `Engine Components: FEA maps the alternating thermal and gas pressure
stresses inside pistons, connecting rods, and crankshafts.`,
            `Modal Analysis: Engineers calculate the natural frequencies of components to
prevent resonance with the engine or road frequency, eliminating cabin drone
and harsh vibrations`,
            `EV Battery Enclosures: CAE ensures the structural tray protecting Li-ion battery
cells can withstand bottom strikes (road debris punctures) and side impacts
without compressing the cells.`,
        ],
    },
};

export const PROJECTS = [
    {
        num: "01",
        discipline: "CFD",
        title: "CFD for HVAC Optimization",
        sector: "Industrial",
        focus: "Climate Control",
        imgUrl: "/images/portfolio-1.jpg",
        fallback: "linear-gradient(135deg, #101724 0%, #05070c 58%, #172030 100%)",
    },
    {
        num: "02",
        discipline: "CFD",
        title: "Aerospace CFD Analysis",
        sector: "Aerospace",
        focus: "Fuel Efficiency",
        imgUrl: "/images/portfolio-2.jpg",
        fallback: "linear-gradient(145deg, #0c111b 0%, #151d2b 52%, #05070c 100%)",
    },
    {
        num: "03",
        discipline: "CFD",
        title: "Oil & Gas Flow Simulation",
        sector: "Energy",
        focus: "Flow Assurance",
        imgUrl: "/images/portfolio-3.jpg",
        fallback:
            "radial-gradient(circle at 72% 72%, rgba(93,107,136,0.42), transparent 30%), #080c13",
    },
    {
        num: "04",
        discipline: "CAE",
        title: "Automotive Thermal Management",
        sector: "Automotive",
        focus: "Battery Life",
        imgUrl: "/images/portfolio-4.jpg",
        fallback: "linear-gradient(160deg, #151b27 0%, #05070c 70%)",
    },
    {
        num: "05",
        discipline: "FDS",
        title: "Fire & Smoke Simulation",
        sector: "Safety",
        focus: "Evacuation",
        imgUrl: "/images/portfolio-5.jpg",
        fallback: "linear-gradient(90deg, #1a0e0a, #2a1208)",
    },
    {
        num: "06",
        discipline: "CAE",
        title: "CAE Stress Analysis",
        sector: "Automotive",
        focus: "Structural Integrity",
        imgUrl: "/images/portfolio-6.jpg",
        fallback: "linear-gradient(140deg, #05070c 0%, #121a27 100%)",
    },
];

export const rows = [
    {
        id: "01",
        title: "CAE Consultation",
        subtitle:
            "Optimize your engineering designs with expert finite element and fluid simulation guidance.",
        action: "Get Consultation",
        actionType: "Contact",
        imgUrl: "/images/service-2.jpg",
    },
    {
        id: "02",
        title: "OpenFOAM Training",
        subtitle:
            "Accelerate your CFD mastery with hands-on OpenFOAM training from industry specialists.",
        action: "View Course",
        actionType: "course",
        imgUrl: "/images/service-3.jpg",
        syllabus: [
            {
                module: "Basic Training",
                topics: [
                    "Installation on Ubuntu / Windows",
                    "Directory Structure",
                    "Basic 2D Meshing",
                    "Running a Simple Case",
                    "3D Meshing",
                    "Multi-Domain Meshing",
                    "Running a 3D Model",
                    "Post-processing in Paraview",
                ],
            },
            {
                module: "Application Based",
                topics: [
                    "External Aerodynamics",
                    "Climate Control – Automotive",
                    "Under-hood Thermal Simulations",
                    "Aero-Acoustics",
                ],
            },
        ],
    },
    {
        id: "03",
        title: "FDS Training",
        subtitle:
            "Fire & smoke analysis — master evacuation simulations and safety engineering workflows.",
        action: "View Course",
        actionType: "course",
        imgUrl: "/images/service-3.jpg",
        syllabus: [
            {
                module: "Core Curriculum",
                topics: [
                    "FDS Installation",
                    "Making 3D Model for FDS",
                    "Boundary Conditions",
                    "Running on Windows",
                    "Post-Processing",
                ],
            },
        ],
    },
    {
        id: "04",
        title: "Automation",
        subtitle:
            "Streamline your simulation workflow with custom automation tools and scripting pipelines.",
        action: "Get Consultation",
        actionType: "Contact",
        imgUrl: "/images/service-1.jpg",
    },
];