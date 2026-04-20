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
    title: "Portafilio",
    desc: "Un portafolio donde expongo mis conocimientos y mis proyectos",
    tech: ["HTML", "CSS", "JavaScript", "Astro"],
    image: "/imgproyect/portafolio.png",
    demo: "https://janosanz-portafolio.vercel.app",
    repo: "https://github.com/JanoSanz/Portafolio",
  },
  {
    title: "Buscador de Peliculas",
    desc: "CineCerca resuelve una pregunta concreta: ¿donde puedo ver esta pelicula hoy?. El usuario busca un titulo, ve el detalle de la pelicula (sinopsis, rating, duracion) y obtiene el listado de cines de su zona donde se proyecta, con sus horarios, formato (2D / 3D / IMAX) e idioma (subtitulada o doblada).",
    tech: ["HTML", "CSS", "JavaScript", "Astro", "API"],
    image: "/imgproyect/Cine.png",
    repo: "https://github.com/JanoSanz/CINE",
  },
];
