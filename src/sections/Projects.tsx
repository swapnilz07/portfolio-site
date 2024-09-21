import twitterClone from "@/assets/images/TwitterClone.png";
import youtubeClone from "@/assets/images/YoutubeClone.png";
import weatherApp from "@/assets/images/WeatherApp.png";
import portfolio from "@/assets/images/portfolio.png";
import FinanceApp from "@/assets/images/FinanceAppImage.png";
import tictactoe from "@/assets/images/Tictacttoe.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    title: "Twitter Clone",
    time: "Aug 15",
    results: [
      { title: "Developed a fully responsive Twitter clone" },
      { title: "Implemented user authentication and authorization" },
      { title: "Tweet creation, like, and comment functionality" },
    ],
    image: twitterClone,
    githubLink: "https://github.com/swapnilz07/twitter-clone-mern",
    liveLink: "https://twitter-clone-mern-4eu2.onrender.com/",
  },
  {
    title: "Youtube Clone",
    time: "Jul 15",
    results: [
      { title: "Built a YouTube API-powered application" },
      { title: "Optimized for both mobile and desktop platforms" },
      { title: "using React JS, Tailwind CSS and Rapid API" },
    ],
    image: youtubeClone,
    githubLink: "https://github.com/swapnilz07/twitter-clone-mern",
    liveLink: "",
  },
  {
    title: "Weather Forecast",
    time: "Jun 15",
    results: [
      { title: "Real-time updates on current weather conditions." },
      { title: "fetches weather data based on user location." },
      { title: "Optimized for mobile, tablet, and desktop devices." },
    ],
    image: weatherApp,
    githubLink: "https://github.com/swapnilz07/Weather-App",
    liveLink: "https://weather-app-iota-mauve.vercel.app/",
  },
  {
    title: "My Portfolio",
    time: "May 15",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Imporove side speed by 50%" },
      { title: "Increased Mobile traffic by 30%" },
    ],
    image: portfolio,
    githubLink: "https://github.com/swapnilz07/Portfolio/",
    liveLink: "https://portfolio-mu-eosin-52.vercel.app/",
  },
  {
    title: "Finance App",
    time: "Apr 15",
    results: [
      { title: "Fully responsive Finance App for all devices" },
      { title: "User Authentication and Fetches loan details" },
      { title: "Interactive UI with Material UI components" },
    ],
    image: FinanceApp,
    githubLink: "https://github.com/swapnilz07/finance-app-client-side",
    liveLink: "",
  },
  {
    title: "Tic Tac Toe",
    time: "March 15",
    results: [
      { title: "Developed a classic Tic Tac Toe game using React." },
      { title: "Created an interactive user interface" },
      { title: "allowing players to click on cells to make their moves." },
    ],
    image: tictactoe,
    githubLink: "https://github.com/swapnilz07/tic-tac-toe",
    liveLink: "https://tic-tac-toe-beta-flame.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pb-16 pt-20 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real World Results"
          title="Featured Projects"
          description="See how i transform concept into engaging digital experiences."
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 md:px-10 lg:px-20 pt-8 md:pt-12 lg:pt-16 pb-0 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold tracking-widest text-sm text-transparent bg-clip-text">
                    {project.time}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl mt-2 md:mt-5 font-semibold text-center">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.liveLink}>
                    <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
