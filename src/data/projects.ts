export type ProjectRank = "S" | "A" | "B" | "C" | "D" | "E";
export type ProjectStatus = "COMPLETED" | "IN PROGRESS" | "LOCKED" | "AVAILABLE";

export type Project = {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  demo?: string;
  repo?: string;
  rank?: ProjectRank;
  status?: ProjectStatus;
};

export const projects: Project[] = [
  {
    title: "Portafolio",
    desc: "Portafolio personal donde expongo conocimientos y proyectos, con una interfaz inspirada en el Sistema de Solo Leveling.",
    tech: ["HTML", "CSS", "JavaScript", "Astro"],
    image: "/imgproyect/portafolio.png",
    demo: "https://janosanz-portafolio.vercel.app",
    repo: "https://github.com/JanoSanz/Portafolio",
    rank: "B",
    status: "IN PROGRESS",
  },
  {
    title: "Buscador de Películas",
    desc: "CineCerca resuelve una pregunta concreta: ¿dónde puedo ver esta película hoy? El usuario busca un título y ve el detalle completo desde una API pública.",
    tech: ["HTML", "CSS", "JavaScript", "Astro", "API"],
    image: "/imgproyect/Cine.png",
    repo: "https://github.com/JanoSanz/CINE",
    rank: "C",
    status: "COMPLETED",
  },
];
