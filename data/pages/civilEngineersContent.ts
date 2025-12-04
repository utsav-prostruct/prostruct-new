type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type CivilEngineerReason = {
  heading: string;
  points: string[];
};

type CivilEngineeringService = {
  heading: string;
  body: string;
};

type CivilEngineerProjectTypes = {
  heading: string;
  intro: string;
  columns: string[][];
};

type CivilEngineerStep = {
  image: ImageAsset;
  detailsHtml: string;
};

type HeroContent = {
  desktopHtml: string;
  mobileHtml: string;
  mobileBottomHtml: string;
  slides: ImageAsset[];
};

export type CivilEngineersContent = {
  stateName?: string;
  hero: HeroContent;
  tagLine: string;
  infoImage: ImageAsset;
  permitLink: string;
  reasons: CivilEngineerReason[];
  aboutHeading: string;
  aboutDesktopHtml: string;
  aboutMobileHtml: string;
  aboutBackgroundImage: string;
  services: CivilEngineeringService[];
  projectTypes: CivilEngineerProjectTypes;
  projectTypeImages: ImageAsset[];
  howItWorksHeading: string;
  steps: CivilEngineerStep[];
  footerTopImage: ImageAsset;
};

const HERO_SLIDES: ImageAsset[] = [
  {
    src: "/images/Banner1-1.jpg",
    alt: "Three generations enjoying lunch together on an open outdoor patio.",
    width: 1440,
    height: 600,
  },
  {
    src: "/images/Banner2-1.jpg",
    alt: "A happy young couple cooking together in a modern kitchen.",
    width: 1440,
    height: 600,
  },
  {
    src: "/images/Banner3.jpg",
    alt: "Parents relaxing with their kids in an open living room.",
    width: 1440,
    height: 600,
  },
  {
    src: "/images/Group-1.png",
    alt: "Commercial retail store exterior",
    width: 1440,
    height: 600,
  },
];

const INFO_IMAGE: ImageAsset = {
  src: "/images/triangle.png",
  alt: "Low Cost, High Speed, High Quality",
  width: 350,
  height: 200,
};

const PROJECT_TYPE_IMAGES: ImageAsset[] = [
  {
    src: "/images/Project_Types_2.jpg",
    alt: "Backyard ADU exterior",
    width: 624,
    height: 636,
  },
  {
    src: "/images/Project_Types_1.jpg",
    alt: "Custom home exterior",
    width: 624,
    height: 636,
  },
  {
    src: "/images/AdobeStock_507941848-1.png",
    alt: "Wood framing of a new custom house",
    width: 624,
    height: 636,
  },
];

const HOW_IT_WORKS_STEPS: CivilEngineerStep[] = [
  {
    image: {
      src: "/images/How_It_Works_1.jpg",
      alt: "Architectural plans illustration",
      width: 305,
      height: 224,
    },
    detailsHtml:
      "Share Your <span>Requirements</span>, Including Existing Plans/ Designs if Available",
  },
  {
    image: {
      src: "/images/How_It_Works_2.jpg",
      alt: "Get a free structural engineering quote button",
      width: 305,
      height: 224,
    },
    detailsHtml:
      "Get a <span>No-obligation</span>,<br/>Free Express Quote<br/>Within 24 Hours",
  },
  {
    image: {
      src: "/images/How_It_Works_3.jpg",
      alt: "Blue clock implying quick turnaround",
      width: 305,
      height: 224,
    },
    detailsHtml:
      "We Start Your Project, With <br/><span>Quick Delivery</span> in 2-3 Weeks for Most Projects",
  },
];

const SERVICES: CivilEngineeringService[] = [
  {
    heading: "Civil Engineering Services",
    body: "Comprehensive site development solutions tailored for residential, commercial, and mixed-use projects. Our civil engineering team ensures every design is code-compliant, cost-efficient, and construction-ready.",
  },
  {
    heading: "Stormwater Drainage Design",
    body: "Prevent on-site flooding and ensure local compliance with professionally designed stormwater systems. We analyze runoff patterns and develop drainage plans that protect your property and infrastructure.",
  },
  {
    heading: "Grading Plans",
    body: "Establish the right foundation for your project. Our grading plans help manage slope, support proper drainage, and align with building requirements — minimizing costly changes during construction.",
  },
  {
    heading: "Erosion & Sediment Control",
    body: "Maintain environmental compliance and site integrity. We create effective erosion control plans that reduce runoff, protect surrounding land, and meet city or county permitting standards.",
  },
  {
    heading: "Cut & Fill Calculations",
    body: "Balance earthwork to save on hauling and material costs. We provide precise cut and fill analysis to help optimize your site prep and streamline your construction process.",
  },
];

const PROJECT_TYPES: CivilEngineerProjectTypes = {
  heading: "Project Types",
  intro:
    "Our Structural & Civil Engineers’ expertise extends to a variety of Residential and Commercial Project Types, including:",
  columns: [
    [
      "New Custom Home",
      "ADU",
      "Home Addition/Remodel",
      "Load Bearing Wall Removal",
      "Commercial Projects",
    ],
    [
      "Retaining Wall",
      "Deck, Patio & Porch",
      "Foundation Design & More",
      "Construction Administration",
      "Civil Engineering",
    ],
  ],
};

const FOOTER_IMAGE: ImageAsset = {
  src: "/images/Footer.jpg",
  alt: "California single story home with palm trees",
  width: 1440,
  height: 545,
};

const ABOUT_DESKTOP_HTML = `ProStruct Engineering’s experienced team of <strong>Professional Structural & Civil Engineers</strong> provides <strong>high-quality engineering</strong> plans that comply with building permit requirements for residential & commercial projects.<br/><br/>Our goal is to offer <strong>budget-friendly services</strong> and act as a dependable ally throughout your project.<br/><br/>Our services include <strong>Structural Site Inspections</strong>, <strong>Structural Calculations</strong>, creating <strong>Structural Plans</strong>, and preparing <strong>Structural Permit Sets</strong>.`;

const ABOUT_MOBILE_HTML = `Our services include <strong>Civil Site Inspections, Civil Calculations,</strong> creating <strong>Civil Plans</strong>, and preparing <strong>Civil Permit Sets.</strong><br/><br/>Our goal is to <strong>enhance the home-building journey</strong> of homeowners by offering <strong>budget-friendly</strong> services and acting as a dependable ally throughout the process.`;

const HOW_IT_WORKS_HEADING = "How It Works: Its Fast, Easy & Convenient.";

function createHeroContent(stateName?: string): HeroContent {
  const homeownerPhrase = stateName
    ? `<strong>${stateName}</strong> Homeowners'`
    : "Homeowners'";

  const desktopHtml = `<h1>Trust our Experienced<br/>Civil Engineers for your<br/><strong>Residential</strong> Project Needs</h1>
<span class="mbl-hide">At ProStruct Engineering we take pride in professionalism.</span> Our motivation is to improve ${homeownerPhrase} home-building experience by delivering high-quality Civil Engineering Plans for permit approval smoothly.<br/><br/>We have a 100% success rate<sup>(1)</sup> in obtaining Residential Building Permits.<br/><br/>We’re experienced, reliable, and budget-friendly.`;

  const mobileHtml = `<h1>Experienced ${
    stateName
      ? `<strong>${stateName} Civil Engineers</strong>`
      : "<strong>Civil Engineers</strong>"
  } for your <strong>Residential</strong> Project Needs</h1>`;

  const mobileBottomHtml = `Our motivation is to improve ${homeownerPhrase} home-building experience by delivering high-quality Civil Engineering Plans for permit approval smoothly.<br/><br/>We have a 100% success rate<sup>(1)</sup> in obtaining Residential Building Permits.<br/><br/>We’re experienced, reliable, and budget-friendly.`;

  return {
    desktopHtml,
    mobileHtml,
    mobileBottomHtml,
    slides: HERO_SLIDES,
  };
}

function createReasons(stateName?: string): CivilEngineerReason[] {
  const licensePoint = stateName ? `${stateName} PE License` : "PE License";

  return [
    {
      heading: "Experienced",
      points: [
        "35+ Years",
        "3,000+ Projects",
        "New Home, ADU, Addition, Remodel, and More",
      ],
    },
    {
      heading: "Budget-friendly",
      points: ["Local Pricing", "Fixed & Transparent", "No Surprises"],
    },
    {
      heading: "Licensed & Insured",
      points: [licensePoint, "Insured"],
    },
    {
      heading: "Responsive & Fast",
      points: ["Proactive & Responsive", "Quick Turnaround"],
    },
    {
      heading: "Professionalism",
      points: [
        "Our Core Values: Integrity, Responsibility, Reliability, Ethics, and High Quality Standards",
        "Adhering to these standards has helped us build trust and credibility with our clients",
      ],
    },
  ];
}

function createVariant(
  stateName?: string,
  basePath?: string
): CivilEngineersContent {
  return {
    stateName,
    hero: createHeroContent(stateName),
    tagLine: stateName
      ? `Professional ${stateName} Civil Engineers`
      : "Professional Civil Engineers",
    infoImage: INFO_IMAGE,
    permitLink: basePath ? `${basePath}/permit-guarantee` : "/permit-guarantee",
    reasons: createReasons(stateName),
    aboutHeading: "Our Structural & Civil Engineering Services",
    aboutDesktopHtml: ABOUT_DESKTOP_HTML,
    aboutMobileHtml: ABOUT_MOBILE_HTML,
    aboutBackgroundImage: "/images/service-bg.png",
    services: SERVICES,
    projectTypes: PROJECT_TYPES,
    projectTypeImages: PROJECT_TYPE_IMAGES,
    howItWorksHeading: HOW_IT_WORKS_HEADING,
    steps: HOW_IT_WORKS_STEPS,
    footerTopImage: FOOTER_IMAGE,
  };
}

export type CivilEngineersVariantKey =
  | "default"
  | "california"
  | "oregon"
  | "washington"
  | "colorado"
  | "nevada"
  | "utah"
  | "arizona"
  | "texas"
  | "georgia"
  | "new-mexico"
  | "idaho";

export const civilEngineersContent: Record<
  CivilEngineersVariantKey,
  CivilEngineersContent
> = {
  default: createVariant(undefined, ""),
  california: createVariant("California", "/california-structural-engineers"),
  oregon: createVariant("Oregon", "/oregon-structural-engineers"),
  washington: createVariant("Washington", "/washington-structural-engineers"),
  colorado: createVariant("Colorado", "/colorado-structural-engineers"),
  nevada: createVariant("Nevada", "/nevada-structural-engineers"),
  utah: createVariant("Utah", "/utah-structural-engineers"),
  arizona: createVariant("Arizona", "/arizona-structural-engineers"),
  texas: createVariant("Texas", "/texas-structural-engineers"),
  georgia: createVariant("Georgia", "/georgia-structural-engineers"),
  "new-mexico": createVariant("New Mexico", "/new-mexico-structural-engineers"),
  idaho: createVariant("Idaho", "/idaho-structural-engineers"),
};
