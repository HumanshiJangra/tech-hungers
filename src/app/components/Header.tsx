"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo, ToggleClose, ToggleIcon } from "@/utils/svgIcons";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const router = useRouter();
  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const handleToggleClose = () => {
    setIsToggleOpen(false);
  };

  const handleLogout = async (isPhone: boolean = false) => {
    // await signOut({ redirect: false })
    // if (isPhone) {
    //   setIsToggleOpen(false)
    // }
    // window.location.href = '/login' bg-[#13293E]
  };

  return (
    <header className=" bg-[#4480bd]  ">
      <div className="container ">
        <div className="nav-container flex items-center justify-between py-3 ">
          <div className="nav_logo">
            <Link href="/" className="nav-logo-link">
              <Logo className="md:w-[300px] md:h-[70px] w-[200px] h-[45px] " />
            </Link>
          </div>
          <ul
            className={`nav-menu lg:flex lg:gap-8 items-center ${
              isToggleOpen
                ? "open block absolute top-0 left-0 w-full bg-blue-500 h-screen overflow-y-auto"
                : "hidden"
            }`}
          >
            <button className="close-btn lg:hidden" onClick={handleToggleClose}>
              <ToggleClose />
            </button>
            <li>
              <Link href="/" className="nav-menu-list">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-menu-list">
                About
              </Link>
            </li>
            <li>
              <Link href="/therapistnetwork" className="nav-menu-list">
                Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className="nav-menu-list">
                Technologies
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="nav-menu-list lg:!inline-block lg:text-sm lg:!text-[#4480bd] lg:bg-[#fff] rounded-[30px] lg:!px-[30px] !py-[13px]"
              >
                Contact
              </Link>
            </li>
            <li className="md:hidden mt-4" onClick={() => handleLogout(true)}>
              <p className="text-white cursor-pointer text-sm bg-[#283C63] rounded-[30px] px-[30px] py-[13px]">
                Login/Sign Up
              </p>
            </li>
          </ul>

          <p className="menuToggleBtn lg:hidden" onClick={handleToggleOpen}>
            <ToggleIcon />
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
