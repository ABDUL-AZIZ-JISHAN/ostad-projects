import { getTodaysDate } from "@/utils/getFormattedDate";
import getIconByKey from "@/utils/getIconsByKey";
import Link from "next/link";

const TopBar = ({ socials = {} }) => {
  return (
    <div className="py-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-opacity-90 backdrop-filter backdrop-blur-lg text-white">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Left Side: Today's Date */}
        <div className="text-sm">
          <span className="font-bold">Today:</span> {getTodaysDate()}
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center space-x-4">
          {Object.entries(socials).map(([key, link]) => (
            <Link
              key={key}
              target="_blank"
              className={`text-white hover:text-${key}-500 transition duration-300`}
              href={`${link}`}
            >
              {getIconByKey(key)}
            </Link>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TopBar;
