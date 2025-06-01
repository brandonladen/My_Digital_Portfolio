import type { Education, Experience, Language, Skill } from "@/types/Types.ts";
import axios from "axios";

// Project & Contributor Interfaces
export interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export interface Project {
  name: string;
  image: string;
  url: string;
  gitName: string;
  stars: string;
  forks: string;
  description?: string;
  tags: string[];
  contributors?: Contributor[];
}

export let projects: Project[] = [
  {
    name: "geoSpartial_village",
    image: "/images/geosparcial.jpeg",
    url: "https://github.com/stephenWanjala/geoSpartial_village",
    gitName: "stephenWanjala/geoSpartial_village",
    stars: "?",
    forks: "?",
    description: "Health IT hackathon 2024 Digimal solution",
    tags: ["Vue 3", "Pinia", "LeafLet js", "TypeScript", "Vuetify3"],
  },
  {
    name: "ImageSearch",
    url: "https://github.com/Sylvester254/ImageSearch",
    gitName: "Sylvester254/ImageSearch",
    stars: "?",
    forks: "?",
    description: "Health IT hackathon 2023 Missing Child solution",
    tags: ["Django", "MySQL", "DeepFace", "AI", "HTML&CSS"],
    image: "/images/ImageSearch.png",
  },
  {
    name: "SquashersMart",
    url: "https://github.com/brandonladen/puddle_market",
    gitName: "brandonladen/puddle_market",
    stars: "?",
    forks: "?",
    description: "A web-based system functioning as an online marketplace that facilitates the marketing of products",
    tags: ["Django", "MySQL", "HTML&CSS", "Tailwind css"],
    image: "/images/SquashersMart.png",
  },
   {
    name: "Jumia Clone",
    url: "https://github.com/brandonladen/jumia_clone",
    gitName: "brandonladen/jumia_clone",
    stars: "?",
    forks: "?",
    description: "Jumia e-commerce platform clone with product listings, user authentication, and shopping features",
    tags: ["Django", "MySQL", "HTML&CSS", "Bootstrap"],
    image: "/images/jumia.jpg",
  },
  {
    name: "SubnetEaseProCalc",
    url: "https://github.com/brandonladen/SubnetEaseProCalc",
    gitName: "brandonladen/SubnetEaseProCalc",
    stars: "?",
    forks: "?",
    description: "IP Subnet Calculator that helps users calculate and understand subnet information",
    tags: ["JavaScript", "AJAX", "API", "Networking", "Bootstrap", "Django"],
    image: "/images/subnet-calculator.jpg",
  }
];

// Cache Constants
const CACHE_KEY = "github_projects_cache";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Helper function to safely interact with localStorage
function safeLocalStorage(action: "get" | "set", key: string, value?: string) {
  try {
    if (action === "get") return localStorage.getItem(key);
    localStorage.setItem(key, value!);
  } catch (e) {
    console.warn("localStorage not available:", e);
  }
}

// Fetch project data with caching
export function getProjectWithStars(onFinish: (result: Project[]) => void) {
  const now = Date.now();
  const cacheEntry = safeLocalStorage("get", CACHE_KEY);

  if (cacheEntry) {
    const parsedCache = JSON.parse(cacheEntry);
    if (now < parsedCache.expires) return onFinish(parsedCache.data);
  }

  // Prepare API Requests
  const requests = projects.map(({ gitName }) => {
    if (!gitName.includes("/")) return Promise.resolve(null);
    const [owner, repo] = gitName.split("/");
    return axios.all([
      axios.get(`https://api.github.com/repos/${owner}/${repo}`),
      axios.get(`https://api.github.com/repos/${owner}/${repo}/contributors`),
    ]);
  });

  Promise.allSettled(requests).then((results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled" && result.value) {
        const [repoResponse, contributorsResponse] = result.value;
        projects[index].stars = repoResponse.data.stargazers_count.toString();
        projects[index].forks = repoResponse.data.forks_count.toString();
        projects[index].contributors = contributorsResponse.data.map(
          (c: any) => ({
            login: c.login,
            avatar_url: c.avatar_url,
            html_url: c.html_url,
            contributions: c.contributions,
          }),
        );
      } else {
        console.error(`Error fetching data for ${projects[index].name}`, result.reason);
        projects[index].stars = "?";
        projects[index].forks = "?";
        projects[index].contributors = [];
      }
    });

    projects.sort(
      (a, b) =>
        parseInt(b.stars) - parseInt(a.stars) ||
        parseInt(b.forks) - parseInt(a.forks),
    );
    safeLocalStorage(
      "set",
      CACHE_KEY,
      JSON.stringify({ data: projects, expires: Date.now() + CACHE_TTL }),
    );
    onFinish(projects);
  });
}

// Utility Functions
export function getImageUrl(path: string) {
  return new URL(`/src/assets/images/${path}`, import.meta.url).href;
}

export function openLink(url: string) {
  window.open(url, "_blank");
}

// Experience Data
export const experiences: Experience[] = Array.of<Experience>(
  {
      company: "Safaricom PLC",
      companyLink: "https://www.safaricom.co.ke",
      logo: "images/safaricom.png", // Make sure to link the actual logo
      roles: [
        {
          time: { start: new Date("2025-05-12"), current: true},
          jobTitle: "API Engineering Intern – QA",
          details: [
            "Working in the API Engineering team under QA to ensure the quality and reliability of Safaricom’s API services.",
            "Creating and maintaining automated test scripts for RESTful APIs using tools such as Postman, Newman.",
            "Participating in regression, performance, and functional testing of internal and public-facing APIs.",
            "Validating API responses, error handling, and schema compliance across microservices.",
            "Collaborating with developers to troubleshoot issues and provide feedback for continuous integration pipelines.",
            "Documenting test cases, test plans, and contributing to QA best practices within the API lifecycle.",
            "Learning and applying API design principles, test automation strategies, and enterprise-level QA workflows.",
          ],
        },
      ],        
  },
  {
    company: "SecreteStartups, UK",
    companyLink: "https://secretstartups.org/",
    logo: "images/SecreteStartups.png", // Add logo path if available
    roles: [
      {
        time: { start: new Date("2024-08-01"), current: true },
        jobTitle: "Backend Developer",
        details: [
          "Developing and managing microservices using Node.js, MongoDB, Redis, Kafka, and Dapr.",
          "Designing APIs, including RESTful and GraphQL, with thorough documentation using Swagger.",
          "Implementing robust communication patterns and failover strategies for high reliability in distributed systems.",
        ],
      },
    ],
  },
  {
    company: "Moi Teaching and Referral Hospital",
    companyLink: "https://www.mtrh.go.ke/",
    logo: "images/mtrh.png", // Replace with your actual MTRH logo path
    roles: [
      {
        time: { start: new Date("2024-05-03"), end: new Date("2024-07-31") }, // Adjust if still ongoing
        jobTitle: "Attachment",
        details: [
          "Assisted staff in navigating and utilizing the hospital-wide ABNO ERP system.",
          "Reported technical issues encountered in the ERP system to senior developers for resolution.",
          "Contributed to software solutions and support services within the ICT department.",
          "Collaborated with the IT team to enhance digital workflows across departments.",
          "Supported the transition to improved system practices and staff capacity building.",
        ],
      },
    ],
  },
);

export const skills: Skill[] = [
  // Languages
  {
    title: "Python",
    level: 95,
    icon: "devicon-python-plain",
    color: "colored",
  },
  {
    title: "JavaScript",
    level: 90,
    icon: "devicon-javascript-plain",
    color: "colored",
  },
  {
    title: "Java",
    level: 85,
    icon: "devicon-java-plain-wordmark",
    color: "colored",
  },
  {
    title: "PHP",
    level: 80,
    icon: "devicon-php-plain",
    color: "colored",
  },
  {
    title: "C",
    level: 80,
    icon: "devicon-c-plain",
    color: "colored",
  },
  {
    title: "C++",
    level: 80,
    icon: "devicon-cplusplus-plain",
    color: "colored",
  },
  {
    title: "HTML5",
    level: 95,
    icon: "devicon-html5-plain-wordmark",
    color: "colored",
  },
  {
    title: "CSS3",
    level: 90,
    icon: "devicon-css3-plain-wordmark",
    color: "colored",
  },

  // Frameworks & Libraries
  {
    title: "Django",
    level: 90,
    icon: "devicon-django-plain",
    color: "colored",
  },
  {
    title: "Flask",
    level: 75,
    icon: "devicon-flask-original",
    color: "colored",
  },
  {
    title: "Vue.js",
    level: 90,
    icon: "devicon-vuejs-plain",
    color: "colored",
  },
  {
    title: "Node.js",
    level: 85,
    icon: "devicon-nodejs-plain",
    color: "colored",
  },
  {
    title: "Bootstrap",
    level: 85,
    icon: "devicon-bootstrap-plain",
    color: "colored",
  },

  // Tools & Platforms
  {
    title: "Dapr",
    level: 70,
    icon: "devicon-dapr-plain", // May need a custom icon if devicon doesn't support it
    color: "colored",
  },
  {
    title: "Apache Kafka",
    level: 75,
    icon: "devicon-apachekafka-original", // Or fallback if not available
    color: "colored",
  },
  {
    title: "Redis",
    level: 80,
    icon: "devicon-redis-plain",
    color: "colored",
  },
  {
    title: "Git & GitHub",
    level: 95,
    icon: "devicon-git-plain",
    color: "colored",
  },
  {
    title: "Linux",
    level: 85,
    icon: "devicon-linux-plain",
    color: "colored",
  },
];

// Education Data
export const educations: Education[] = [
  {
    degree: "BSc. Information Technology",
    school: "Maseno University",
    duration: "2021 - 2025",
  },
  {
    degree: "Software Engineer",
    school: "ALX-Africa, Remote",
    duration: "2023 - 2024",
  },
  {
    degree: "Software Development",
    school: "Bengo-Hub, Remote",
    duration: "2023 (November) — 2024 (February)",
  },
];

// Languages
export const langs: Language[] = [
  { name: "English", description: "Fluent" },
  { name: "Swahili", description: "Fluent" },
];
