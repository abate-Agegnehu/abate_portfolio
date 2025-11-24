import Link from "next/link";
import React from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaTelegram,
  FaGitlab,
} from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/abate-Agegnehu",
  },
  {
    icon: <FaGitlab />,
    path: "https://gitlab.com/abateagegnehu",
  },

  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/abateagegnehu/",
  },
  {
    icon: <FaTelegram />,
    path: "https://web.telegram.org/k/#@Abatae5",
  },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
