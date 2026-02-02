interface INavLinks {
  text: string;
  to: string;
}

const navlinks: INavLinks[] = [
  { text: "Home", to: "/" },
  { text: "Achievements", to: "/achievements" },
  { text: "Events", to: "/events" },
  { text: "Team", to: "/team" },
  { text: "Projects", to: "/projects" },
  { text: "Blogs", to: "/blogs" },
  { text: "Contact Us", to: "/contact" },
];

export const LINKS_GROUP_ONE_COUNT = 5;

export default navlinks;
