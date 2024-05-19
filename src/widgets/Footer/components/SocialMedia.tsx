import React from "react";
import IconX from "@icons/IconX";
import Link from "@components/Link";
import IconYoutube from "@icons/IconYoutube";
import IconFacebook from "@icons/IconFacebook";
import IconInstagram from "@icons/IconInstagram";

interface SocialMediaProps {
  id: number;
  label: string;
  url: string;
  icon: React.JSX.Element;
}

const socialMedias: SocialMediaProps[] = [
  {
    id: 1,
    label: "facebook",
    url: " ",
    icon: <IconFacebook className="icon md" />,
  },
  {
    id: 2,
    label: "Instagram",
    url: " ",
    icon: <IconInstagram className="icon md" />,
  },
  {
    id: 3,
    label: "X",
    url: " ",
    icon: <IconX className="icon md" />,
  },
  {
    id: 4,
    label: "Youtube",
    url: " ",
    icon: <IconYoutube className="icon md" />,
  },
];

const SocialMedia = () => (
  <div className="socialmedia">
    <h3 className="title mb-7 d-lg-none">Follow Us</h3>
    <div className="row justify-content-center justify-content-md-start gx-7">
      {socialMedias?.map((items) => (
        <div className="col-auto" key={items?.id}>
          <Link href={items?.url}>{items?.icon}</Link>
        </div>
      ))}
    </div>
  </div>
);

export default SocialMedia;
