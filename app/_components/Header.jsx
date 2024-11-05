import Image from "next/image";
import React from "react";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/",
    },
    {
      id: 3,
      name: "Contacts",
      path: "/",
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-10">
        <Image src="./logo.svg" width={180} height={80} alt="logo" />

        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
