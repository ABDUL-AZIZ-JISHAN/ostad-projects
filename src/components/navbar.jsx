"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
const Navbar = () => {
  const path = usePathname();

  const isLinkActive = (href) => {
    return path === href ? "active" : "";
  };

  const [prevScrollpos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      let currentScrollPos = window.scrollY;

      if (prevScrollpos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollpos, visible]);

  return (
    <div
      className={
        visible
          ? "container  fixed w-full transform -translate-x-1/2 translate-y-1/2 left-[50%]  top-[40px] ease-in-out duration-300 "
          : "container  fixed w-full transform -translate-x-1/2 translate-y-[-100%] left-[50%]  top-[0px] ease-in-out duration-300 "
      }
    >
      <nav className="navbar flex justify-between items-center">
        <div className="brand">
          <Link href="/">
            <Image
              src="/img/logo.svg"
              className="h-[30px] w-[155px]"
              width={100}
              height={100}
              alt="img"
            />
          </Link>
        </div>
        <div className="menu-wrapper flex items-center">
          <ul className="menu flex">
            <li className="menu-item">
              <Link className={isLinkActive("/")} href="/">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link className={isLinkActive("/team")} href="/team">
                Team
              </Link>
            </li>
            <li className="menu-item">
              <Link className={isLinkActive("/service")} href="/service">
                Service
              </Link>
            </li>
            <li className="menu-item">
              <Link className={isLinkActive("/projects")} href="/projects">
                Projects
              </Link>
            </li>

            <li className="menu-item">
              <Link
                className={isLinkActive("/testimonials")}
                href="/testimonials"
              >
                Testimonials
              </Link>
            </li>
          </ul>
          <div className="button-wrapper">
            <Link href="#0" className="btn-style-one">
              Login
            </Link>
            <Link href="#0" className="btn-style-one reverse mr-30px">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
