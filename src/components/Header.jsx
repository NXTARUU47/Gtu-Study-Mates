import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

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
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform duration-200">
            G
          </div>

          {/* Logo Text */}
          <div className="leading-tight">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="text-primary">GTU</span>{" "}
              <span className="text-slate-700">Study Desk</span>
            </h1>

            <p className="hidden sm:block text-[11px] text-slate-500 font-medium">
              Learn • Prepare • Succeed
            </p>
          </div>
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
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Menu"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl text-slate-600 hover:text-primary hover:bg-indigo-50 transition-all duration-200"
          >
            {mobileMenuOpen ? <IoClose /> : <TbMenu2 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg">
          <ul className="px-4 py-4 space-y-1">
            {navItems.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-50 text-primary border-l-4 border-primary"
                        : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                    }`
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
