import Link from "next/link";
import getSimpleResponse from "@/utils/getSimpleResponse";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

const Footer = async () => {
  const socialLinks = await getSimpleResponse("/api/SocialLink");

  const loadSocial = () => {
    const iconMapping = {
      facebook: <FaFacebookF />,
      twitter: <IoLogoTwitter />,
      instagram: <FaInstagram />,
    };

    return socialLinks.map((link) => {
      const icon = iconMapping[link.name] || <FaFacebookF />;
      return (
        <li
          className="w-[40px] h-[40px] bg-[#20B15A] text-center flex justify-center items-center rounded-[50%] mr-[15px]	"
          key={link.id}
        >
          <Link
            className="text-white"
            target="_blank"
            href={`https://${link.link}`}
          >
            {icon}
          </Link>
        </li>
      );
    });
  };
  return (
    <div className="footer bg-[#000] pt-[98px] pb-[70px]">
      <div className="container">
        <div className="content flex justify-between">
          <div className="content_left">
            <h2 className="logo-text text-white text-[39px] font-bold">
              WEB LOGO
            </h2>
            <p className="footer_text font-avenir text-white w-[328px] my-[20px]">
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
            <ul className="socials flex">{loadSocial()}</ul>
          </div>
          <div className="content_middle">
            <h3 className="footer-title text-white text-[20px] font-semibold mb-[26px]">
              Quick Links
            </h3>
            <ul className="footer-links flex flex-col">
              <li>
                <Link
                  className="text-white inline-flex text-[18px] font-avenir font-medium mb-[25px]"
                  href="/service"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-white inline-flex text-[18px] font-avenir font-medium mb-[25px]"
                  href="/projects"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="text-white inline-flex text-[18px] font-avenir font-medium mb-[25px]"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-[18px] font-avenir font-medium"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="content_right">
            <h3 className="footer-title text-white text-[20px] font-semibold mb-[26px]">
              Address
            </h3>
            <p className="text-white text-[18px] w-[258px] font-medium">
              Design Agency Head Office. Airport Road United Arab Emirate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
