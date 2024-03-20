import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <nav className="p-6 bg-[#ADBC9F] text-[#12372A]">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <MdClose className="text-2xl" />
        ) : (
          <RiMenu2Line className="text-2xl " />
        )}
      </div>
      <ul
        className={`md:flex gap-10 duration-1000 absolute md:static bg-[#ADBC9F] font-semibold px-5 ${
          open ? "top-16" : "-top-60 "
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
