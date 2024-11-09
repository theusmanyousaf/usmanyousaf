import {
  BiLinkExternal,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoStackOverflow,
} from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/theusmanyousaf",
    icon: BiLogoGithub,
    status: "social",
  },
  {
    id: 2,
    name: "X",
    url: "https://twitter.com/theusmanyousaf",
    icon: FaSquareXTwitter,
    status: "social",
  },
  {
    id: 3,
    name: "Linkedin",
    url: "https://linkedin.com/in/theusmanyousaf",
    icon: BiLogoLinkedinSquare,
    status: "social",
  },
  {
    id: 4,
    name: "Daily.dev",
    url: "https://app.daily.dev/usmanyousaf",
    icon: BiLinkExternal,
    status: "social",
  },
  {
    id: 5,
    name: "Producthunt",
    url: "https://www.producthunt.com/@usmanyousaf",
    icon: FaProductHunt,
    status: "social",
  },
  {
    id: 6,
    name: "Codewars",
    url: "https://www.codewars.com/users/usmanyousaf",
    icon: SiCodewars,
    status: "social",
  },
  // {
  //   id: 7,
  //   name: "Stackoverflow",
  //   url: "https://stackoverflow.com/",
  //   icon: BiLogoStackOverflow,
  //   status: "social",
  // },
];
