"use client";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import { links } from "../../data";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen]);

  return (
    <div className="navbar">
      <Link href="/">
        <Logo />
      </Link>

      <ul className="navbar__links-box">
        {links.slice(1).map((obj) => {
          return (
            <li className="navbar__link" key={obj.id}>
              <Link href={obj.href}>{obj.linkName}</Link>
            </li>
          );
        })}
      </ul>
      <Link className="nav__btn" href="/invite">
        Get an invite{" "}
      </Link>
      <div
        className="nav__burger"
        onClick={() => {
          setIsNavOpen(true);
        }}
      >
        {!isNavOpen && (
          <svg
            width="20"
            height="6"
            viewBox="0 0 20 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="1" fill="black" />
            <rect y="5" width="20" height="1" fill="black" />
          </svg>
        )}
      </div>

      {isNavOpen && (
        <div className="nav__X" onClick={() => setIsNavOpen(false)}>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.99982 6.79271L1.2823 0.0751953L0.575195 0.782302L7.29271 7.49982L0.575195 14.2173L1.2823 14.9244L7.99982 8.20692L14.7173 14.9244L15.4244 14.2173L8.70692 7.49982L15.4244 0.782302L14.7173 0.0751953L7.99982 6.79271Z"
              fill="black"
            />
          </svg>
          <div className="overlay">
            <div className="nav__dropdown">
              <ol>
                {links.slice(1).map((obj) => {
                  return (
                    <li className="navbar__link dropdown__link" key={obj.id}>
                      <Link href={obj.href}>{obj.linkName}</Link>
                    </li>
                  );
                })}
              </ol>

              <Link className="nav__dropdown-btn" href="/invite">
                Get an invite{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
