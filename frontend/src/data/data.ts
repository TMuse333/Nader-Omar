import {FeatureBoxProps, FullBodyHeroProps} from 'focusflow-components'
import { TextAndListProps, CarouselGridProps, VerticalImageTextBoxProps,
CarouselProps } from 'focusflow-components';
export const heroData = {
    titleText: "Discover Your Dream Home",
    mainHeader: "Welcome to the beautiful Oakwood Estates",
    descriptionText:
      "Nestled in a vibrant community with top amenities, Oakwood Estates offers the perfect blend of comfort and convenience.",
    images: [
      { src: "/home.jpeg", alt: "Beautiful home exterior" },
      { src: "/home.jpeg", alt: "Beautiful home exterior" },
      { src: "/home.jpeg", alt: "Beautiful home exterior" },
      { src: "/home.jpeg", alt: "Beautiful home exterior" },
    ],
    // agent: {
    //   name: "Nader Omar",
    //   intro:
    //     "Nader Omar is your dedicated real estate agent, bringing years of experience and a passion for finding you the perfect home.",
    // },
  };
  
  export const bedfordFeatureBoxes: FeatureBoxProps = {
    title: "Discover Bedford, Nova Scotia",
    description: "Explore the unique features that make Bedford a vibrant community.",
    boxColor: "bg-white",
    bgColor: "bg-gradient-to-br from-blue-400 to-orange-200",
    boxTextColor: "text-gray-800",
    boxData: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Canada_Nova_Scotia_location_map.svg",
        alt: "Map of Nova Scotia highlighting Bedford",
        title: "Prime Location",
        description: "Situated within the Halifax Regional Municipality, Bedford offers easy access to urban amenities while maintaining a small-town charm."
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag-map_of_Nova_Scotia.svg",
        alt: "Flag map of Nova Scotia",
        title: "Rich Heritage",
        description: "Bedford boasts a rich history, reflected in its well-preserved architecture and community traditions."
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Canada_Nova_Scotia_location_map.svg",
        alt: "Detailed map of Bedford area",
        title: "Community Layout",
        description: "The town's layout includes scenic parks, waterfronts, and residential areas, fostering a close-knit community atmosphere."
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Canada_Nova_Scotia_location_map.svg",
        alt: "Nova Scotia icon",
        title: "Provincial Pride",
        description: "As part of Nova Scotia, Bedford residents take pride in their provincial identity and cultural heritage."
      }
    ]
  };

  export const whyNader: TextAndListProps = {
    subTitle: "Meet Your Agent",
    title: "Why Choose Nader Omar?",
    src: "/nader.jpg",
    alt: "Nader Omar - Real Estate Agent",
    description:
      "With a deep understanding of Halifax Regional Municipality and a commitment to your success, Nader Omar brings a personal and strategic approach to every home journey.",
    isMobile: false,
    bgColor: "bg-gradient-to-br from-orange-100 to-blue-200",
    titleColor: "text-black",
    titleBgColor: "bg-transparent",
    descriptionBgColor: "bg-transparent",
    descriptionTextColor: "text-gray-800",
    textColor: "text-black", // now required and present
    objectContain: false,
    listAspects: [
      {
        title: "Smart Decisions, Backed by Data",
        description:
          "Nader uses sharp market analysis to guide pricing, property selection, and negotiations—ensuring your choices are backed by facts, not guesswork.",
      },
      {
        title: "Empathetic, Personal Support",
        description:
          "He listens to your 'why,' understands your unique goals, and communicates clearly—so you're never left in the dark or overwhelmed.",
      },
      {
        title: "Calm, Strategic Problem-Solving",
        description:
          "When challenges arise, Nader finds grounded solutions quickly—absorbing stress and keeping your real estate journey smooth and satisfying.",
      },
    ],
  };
  
  


  export const areaImages: CarouselGridProps = {
    images: [
      { src: "/home.jpeg", alt: "Beautiful home in Oakwood Estates" },
      { src: "/home.jpeg", alt: "Oakwood Estates neighborhood view" },
      { src: "/home.jpeg", alt: "Modern kitchen interior" },
      { src: "/home.jpeg", alt: "Spacious living area" },
      { src: "/home.jpeg", alt: "Lush backyard and garden" },
      { src: "/home.jpeg", alt: "Front porch and driveway view" },
    ],
    // bgColor: "bg-white", // Optional: adjust if needed to match your theme
    isMobile: false, // Set dynamically in your component based on screen size
  };


  export const closingStatement: VerticalImageTextBoxProps = {
    title: "Ready to Make Your Move?",
    subTitle: "Let's Find Your Perfect Home in Oakwood Estates",
    description:
      "With local expertise, proven results, and a passion for helping families find their dream homes, Nader Omar is here to guide you every step of the way.",
    bgImage: "/home.jpeg",
    isMobile: false, // adjust dynamically in your component
    mainGradientColor: "#FFEDD5", // Tailwind's orange-100
    darkGradientColor: "#93C5FD", // Tailwind's blue-200
    brightGradientColor: "#FDE68A", // Optional enhancement—like yellow-200 or complement
  };


  export const newHeroData: FullBodyHeroProps = {
    fullBodyImage: '/nader.jpg',
    logoImage: '/remax-nova-flag.webp',
  
    titleText: 'Helping You Buy Your Dream Home in Fall River, Waverley & Wellington, Nova Scotia',
    typeAlongText: 'Confidently Navigate Fall Rivers Real Estate Market. Backed by Data, Guided by Care',
    typeAlongKeywords: [
      'Fall', "Rivers", 'buy', 'home', 'Real Estate','Data','Care'
    ],
    descriptionText:
    "Hi, I’m Nader Omar, a RE/MAX Nova agent based in Fall River. This peaceful community and scenic lifestyle are waiting for you. With 15+ years of experience, I use data-driven insights and local knowledge to help buyers find the perfect home, simplifying your journey with clear guidance and personal support.",
  
  
    // bgImage: '/skyline-fall-river.jpg',
    altTextSkyline: 'A scenic aerial view of Fall River, Nova Scotia with surrounding lakes and trees',
    altTextLogo: 'Logo of remax nova',
    altTextFullBody: 'Portrait of the real estate agent Nader Omar of Remax Nova standing confidently outdoors',
  
    fullBodyStyles: 'bottom-0 right-0 max-w-[320px] md:max-w-[420px]',
    logoStyles: 'top-6 left-6 w-20 md:w-28',
  
    typeWriterExamples: [
      'Expert in Fall River real estate market',
      'Fluent in English, French, and Arabic',
      '15+ years of customer service experience',
      'Calm, data-driven negotiator',
      'Responsive and transparent communication',
      'Focused on helping buyers make smart decisions',
      'Investor with local and international experience',
      'Emotionally supportive and strategic'
    ],
  
    diagonalColor: '#00bffe',
  };
  


  export const aboutFallRiver: CarouselProps = {
    images: [
      {
        src: "/nader.jpg",
        alt: "Lake view in Fall River",
        title: "Lakes & Outdoor Living",
        description: "Surrounded by lakes and parks, Fall River is perfect for kayaking, hiking, and weekend picnics.",
        objectContain: true,
      },
      {
        src: "/nader.jpg",
        alt: "Family-friendly neighborhood",
        title: "Top-Rated Schools & Community",
        description: "Fall River features excellent schools, French immersion options, and a vibrant community center.",
        objectContain: true,
      },
      {
        src: "/nader.jpg",
        alt: "Large residential property in Fall River",
        title: "Spacious Lots & Privacy",
        description: "Enjoy large, tree-lined lots and a quiet suburban atmosphere, perfect for families.",
        objectContain: true,
      },
      {
        src: "/nader.jpg",
        alt: "Highway sign to Halifax",
        title: "Easy Commute",
        description: "Just 20–30 minutes to Halifax or Dartmouth and 15 minutes to the airport with great highway access.",
        objectContain: true,
      },
      {
        src: "/nader.jpg",
        alt: "Fall River shopping plaza",
        title: "Essential Amenities Nearby",
        description: "Grocery, pharmacy, cafes, fast food, and services—all close to home.",
        objectContain: true,
      },
      {
        src: "/nader.jpg",
        alt: "Modern house in Fall River",
        title: "Diverse Housing Options",
        description: "From lakefront homes to new builds, Fall River offers a wide range of housing types.",
        objectContain: true,
      },
    ],
    hasDescription: true,
    textColor:'text-black',
    
    
    
  };
  
  export const aboutFallRiverFeatureBox: FeatureBoxProps = {
    title: "Discover Fall River Benefits",
    description: "Explore why Fall River is an ideal place to live, work, and play.",
    boxData: [
      {
        src: "/nader.jpg",
        alt: "Lake view in Fall River",
        title: "Lakes & Outdoor Living",
        description: "Surrounded by lakes and parks, Fall River is perfect for kayaking, hiking, and weekend picnics.",
      },
      {
        src: "/nader.jpg",
        alt: "Family-friendly neighborhood",
        title: "Top-Rated Schools & Community",
        description: "Fall River features excellent schools, French immersion options, and a vibrant community center.",
      },
      {
        src: "/nader.jpg",
        alt: "Large residential property in Fall River",
        title: "Spacious Lots & Privacy",
        description: "Enjoy large, tree-lined lots and a quiet suburban atmosphere, perfect for families.",
      },
      {
        src: "/nader.jpg",
        alt: "Highway sign to Halifax",
        title: "Easy Commute",
        description: "Just 20–30 minutes to Halifax or Dartmouth and 15 minutes to the airport with great highway access.",
      },
      {
        src: "/nader.jpg",
        alt: "Fall River shopping plaza",
        title: "Essential Amenities Nearby",
        description: "Grocery, pharmacy, cafes, fast food, and services—all close to home.",
      },
      {
        src: "/nader.jpg",
        alt: "Modern house in Fall River",
        title: "Diverse Housing Options",
        description: "From lakefront homes to new builds, Fall River offers a wide range of housing types.",
      },
    ],
    boxColor: "bg-white",
    textColor: "text-black",
    boxTextColor: "text-black",
  };
  
  export  const serviceHeroBannerData = {
    src: "/home.jpeg",
    alt: "Modern home in Fall River, Nova Scotia",
    title: "Buy Smarter. Sell Faster. Win in Fall River Real Estate.",
    description:
      "With 15+ years of strategic guidance, data-backed decisions, and multilingual support, I help you navigate the real estate market with confidence—and deliver results that matter.",
    buttonText: "Start Your Journey",
    destination: "/contact"
  };



export const contactCloserData = {
  imageSrc: "/nader-82.jpg",
  imageAlt: "Agent Nader Omar",
  headline: "Ready to make your Fall River real estate dreams a reality?",
  paragraph: `
Whether you're looking to buy your perfect home or sell your property for the best possible value, you deserve an agent who combines expert market knowledge with genuine, unwavering care. I'm dedicated to providing a real estate experience that's data-driven for smart decisions and emotionally supportive every step of the way. Don't navigate the Fall River market alone. Let's start a conversation about your goals today.
  `,
  ctaText: "Let's get in touch",

};

  