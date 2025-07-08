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
    isMobile: false, // Set dynamically in component if needed
    bgColor: "bg-gradient-to-br from-orange-100 to-blue-200",
    titleColor: "text-black",
    titleBgColor: "bg-transparent",
    descriptionBgColor: "bg-transparent",
    descriptionTextColor: "text-gray-800",
    textColor: "text-black",
    objectContain: false,
    listAspects: [
      {
        title: "Local Expertise",
        description:
          "Born and raised in the region, Nader understands the local market trends, neighborhoods, and hidden gems.",
      },
      {
        title: "Proven Track Record",
        description:
          "Consistently ranked in the top 15% of agents for performance and client satisfaction.",
      },
      {
        title: "Client-First Approach",
        description:
          "Nader prioritizes honest advice, clear communication, and building lasting relationships with every client.",
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
    logoImage: '/remax-ballon.webp',
  
    titleText: 'Real Estate Agent in Fall River, Waverley & Wellington, Nova Scotia',
    typeAlongText: 'Buy or Sell With Confidence. Backed by Data, Guided by Care',
    typeAlongKeywords: [
      'fall','river'
    ],
    descriptionText:
      "With 15+ years of experience and fluency in English, French, and Arabic, I combine local insights and data-driven strategy to help you navigate the market with clarity and confidence — no matter your background.",
  
    bgImage: '/skyline-fall-river.jpg',
    altTextSkyline: 'A scenic aerial view of Fall River, Nova Scotia with surrounding lakes and trees',
    altTextLogo: 'Logo of the real estate agent',
    altTextFullBody: 'Portrait of the real estate agent standing confidently outdoors',
  
    fullBodyStyles: 'bottom-0 right-0 max-w-[320px] md:max-w-[420px]',
    logoStyles: 'top-6 left-6 w-20 md:w-28',
  
    typeWriterExamples: [
      'Fluent in English, French, and Arabic',
      '15+ years of customer service experience',
      'Calm, data-driven negotiator',
      'Responsive and transparent communication',
      'Expert in Fall River real estate',
      'Investor with local and international experience',
      'Emotionally supportive and strategic',
      'Deep understanding of multicultural needs'
    ],
    diagonalColor:'#00bffe'
  };


  export const
  