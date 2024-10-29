import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";
import { SiWhatsapp, SiTelegram } from "react-icons/si";

export const socialData = [
  {
    name: "Whatsapp",
    link: "https://wa.link/2gj5mo",
    Icon: SiWhatsapp,
  },
  {
    name: "Telegram",
    link: "https://instagram.com",
    Icon: SiTelegram,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: RiFacebookLine,
  },
  
  
  {
    name: "Github",
    link: "https://github.com/sanidhyy/modern-portfolio",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
