"use client";
import { useState } from "react";
import { NavbarItem } from "../molecules/Navbar/NavbarItem";

const PAGE = {
  HOME: "Home",
  ABOUT: "About",
  PORTFOLIO: "Portfolio",
  BLOG: "Blog",
  PROFILE: "Profile",
};

// const PAGES = [PAGE.ABOUT, PAGE.PORTFOLIO, PAGE.BLOG, PAGE.PROFILE];
const PAGES = [];

export function Navbar() {
  const [pageName, setPageName] = useState<string>(PAGE.HOME);

  const onClickNavbarItem = (name: string) => {
    setPageName(name);
  };

  return (
    <nav className="container mx-auto h-20 py-12 flex items-center">
      <div className="flex-grow">
        <NavbarItem
          name={PAGE.HOME}
          onClick={() => onClickNavbarItem(PAGE.HOME)}
          active={pageName === PAGE.HOME}
        />
      </div>
      <div className="flex space-x-12">
        {PAGES.map((page) => (
          <NavbarItem
            key={page}
            name={page}
            onClick={() => onClickNavbarItem(page)}
            active={pageName === page}
            disabled={true}
          />
        ))}
      </div>
    </nav>
  );
}
