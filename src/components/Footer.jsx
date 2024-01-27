import Link from "next/link";
import getIconByKey from "@/utils/getIconsByKey";

const Footer = ({ socials = {}, categories = [] }) => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-purple-600 bg-opacity-90 backdrop-filter backdrop-blur-lg text-white pt-[80px] pb-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Social Links Section */}
          <div>
            <h2 className="text-4xl font-bold">Trendy News</h2>
            <p className="mt-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              quae?
            </p>
          </div>

          {/* links Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Links</h4>
            <ul>
              <li className="mb-2">
                <Link href="/">Home</Link>
              </li>
              {categories
                .slice(0, Math.floor(categories.length / 2))
                .map((category) => {
                  const { id, name } = category;
                  return (
                    <li className="mb-2" key={id}>
                      <Link href={`/news/category?id=${id}`}>{name}</Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Links</h4>
            <ul>
              {categories
                .slice(Math.floor(categories.length / 2), categories.length)
                .map((category) => {
                  const { id, name } = category;
                  return (
                    <li className="mb-2" key={id}>
                      <Link href={`/news/category?id=${id}`}>{name}</Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p>Email: info@trendynews.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* connect */}

          <div>
            <h4 className="text-xl font-bold mb-4">Connect with Us</h4>
            <div className="flex space-x-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
