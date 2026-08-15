import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import {FaGraduationCap} from "react-icons/fa";
function Header() {
  const navItems = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#study-materials", label: "Study Materials" },
    { to: "#contact", label: "Contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    console.log("Searching:", searchQuery);

    // Add your search logic here
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
      <nav className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-[70px] md:h-[78px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo Icon */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
            <FaGraduationCap className="text-2xl sm:text-3xl text-blue-500" />
            <h2 className="text-xl sm:text-2xl font-bold">GTU Study Desk</h2>
          </div>

          {/* Logo Text */}
          {/* <div className="leading-tight">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="text-primary">GTU</span>{" "}
              <span className="text-slate-700">Study Desk</span>
            </h1>

            <p className="hidden sm:block text-[11px] text-slate-500 font-medium">
              Learn • Prepare • Succeed
            </p>
          </div> */}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <a
                href={to}
                className="relative py-2 font-medium text-slate-600 hover:text-primary transition-all duration-200 group"
              >
                {label}

                {/* Hover Underline */}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0
          bg-gradient-to-r from-indigo-500 to-teal-400
          rounded-full transition-all duration-300
          group-hover:w-full"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Actions */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="
      relative
      w-11
      h-11
      flex
      items-center
      justify-center
      rounded-xl
      border
      border-slate-200
      bg-white
      text-slate-700
      shadow-sm
      transition-all
      duration-200
      hover:border-indigo-200
      hover:bg-indigo-50
      hover:text-indigo-600
      active:scale-95
      focus:outline-none
      focus:ring-4
      focus:ring-indigo-500/10
    "
          >
            <span
              className="
        flex
        items-center
        justify-center
        text-[22px]
        transition-transform
        duration-200
      "
            >
              {mobileMenuOpen ? <IoClose /> : <TbMenu2 />}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
          <ul className="px-4 py-4 space-y-1">
            {navItems.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `
              flex items-center
              px-4 py-3
              rounded-xl
              text-sm
              font-semibold
              transition-all
              duration-200
              ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
              }
              `
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
