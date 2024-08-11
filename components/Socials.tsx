import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, path: "https://github.com/kijuchihe" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/kijuchihe" },
  { icon: <FaTwitter />, path: "https://x.com/kijuchihe" },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
