import { Github, Linkedin, Mail } from "lucide-react";
import PersonalImg from "./assets/profiles/personal.png";
export const HERO_DATA = {
  profileImage: PersonalImg,
  socials: [
    {
      href: "https://github.com",
      icon: Github,
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      href: "mailto:alex@example.com",
      icon: Mail,
    },
  ],
};
