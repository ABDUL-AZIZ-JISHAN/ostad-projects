import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/Icons";

const getIconByKey = (key) => {
  switch (key) {
    case "facebook":
      return <FacebookIcon />;
    case "youtube":
      return <YoutubeIcon />;
    case "twitter":
      return <TwitterIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    default:
      return null;
  }
};

export default getIconByKey;
