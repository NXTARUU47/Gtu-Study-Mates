import React from "react";
import { Link } from "react-router-dom";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";

function Header() {
  const navItems = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#study-materials", label: "Study Materials" },
    { to: "#contact", label: "Contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleMobileNav = (to) => {
    setMobileMenuOpen(false);

    // Small delay so the menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(to);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <nav className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-[70px] md:h-[78px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <FaGraduationCap className="text-2xl sm:text-3xl text-blue-500" />

            <h2 className="text-xl sm:text-2xl font-bold">
              GTU Study Desk
            </h2>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <a
                href={to}
                className="relative py-2 font-medium text-slate-600 hover:text-indigo-600 transition-all duration-200 group"
              >
                {label}

                {/* Hover Underline */}
                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-indigo-500
                    to-teal-400
                    rounded-full
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
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
            <span className="flex items-center justify-center text-[22px]">
              {mobileMenuOpen ? <IoClose /> : <TbMenu2 />}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
          <ul className="px-4 py-4 space-y-1">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <a
                  href={to}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNav(to);
                  }}
                  className="
                    flex
                    items-center
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-semibold
                    text-slate-600
                    transition-all
                    duration-200
                    hover:bg-indigo-50
                    hover:text-indigo-600
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;