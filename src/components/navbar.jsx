
"use client"
import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();

  const isLinkActive = (href) => {
    return path === href ? 'active' : '';
  };
    return (
      <div className="container  fixed w-full transform -translate-x-1/2 translate-y-1/2 left-[50%]  top-[40px]">
        <nav className="navbar flex justify-between items-center">
          <div className="brand">
            <Link href="/">
              <Image src="/img/logo.svg" width={155} height={30} alt="img" />
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
                <Link className={isLinkActive("/team")} href="/team">Team</Link>
              </li>
              <li className="menu-item">
                <Link className={isLinkActive("/service")} href="/service">Service</Link>
              </li>
              <li className="menu-item">
                <Link className={isLinkActive("/projects")} href="/projects">Projects</Link>
              </li>

              <li className="menu-item">
                <Link className={isLinkActive("/testimonials")} href="/testimonials">Testimonials</Link>
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
}

export default Navbar;



