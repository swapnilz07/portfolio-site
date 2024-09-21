import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/swapnil-z-3537ab32a/",
  },
  {
    title: "Github",
    href: "https://github.com/swapnilz07",
  },
  {
    title: "Twitter",
    href: "https://x.com/newbieCoder07?t=tJY3Dku1FQ2pG-ws5LcERQ&s=08",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/swapnil.z_07?igsh=MWl0d3ozNHUxNnNqNw==",
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute w-[1600px]  border-2 border-red-400 bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024, All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon classname="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
