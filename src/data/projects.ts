export type Project = {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  demo?: string;
  repo?: string;
};
/*
    {
    title: "",
    desc: "",
    tech: ["", "",],
    image: "",
    demo: "",
    repo: "",
  },
*/
export const projects: Project[] = [
  {
    title: "Solo UI System",
    desc: "UI estilo RPG con cards, stats y animaciones suaves.",
    tech: ["HTML", "CSS", "JavaScript", "Astro"],
    image: "/imgproyect/portafolio.png",
    demo: "https://janosanz-portafolio.vercel.app",
    repo: "https://github.com/JanoSanz/Portafolio",
  },
];
