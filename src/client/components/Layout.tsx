import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/books", label: "Books" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
  { to: "/sea-level-rise", label: "Sea Level Rise" },
];

const pageTitles: Record<string, string> = {
  "/": "Clearwater Group — Environmental Consulting",
  "/services": "Services — Clearwater Group",
  "/team": "Our Team — Clearwater Group",
  "/books": "Books — Clearwater Group",
  "/faq": "FAQ — Clearwater Group",
  "/contact": "Contact — Clearwater Group",
  "/sea-level-rise": "Sea Level Rise — Clearwater Group",
};

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
    document.title = pageTitles[pathname] || "Clearwater Group";
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-teal-700 focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to main content
      </a>

      {/* Top banner */}
      <div className="bg-slate-800 text-white text-center text-sm py-2 px-4">
        Call for a free, no-obligation discussion of your next environmental
        project:{" "}
        <a href="tel:510-307-9943" className="font-semibold underline">
          510-307-9943
        </a>
      </div>

      {/* Nav — sticky with backdrop blur */}
      <header
        className={`sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm transition-shadow duration-200 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Clearwater Group — Environmental Services"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-sm px-3 py-1.5 rounded-md transition-colors ${
                    isActive
                      ? "text-teal-700 bg-teal-50 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu — animated slide */}
        <div
          className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-out ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-gray-200 px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `text-sm px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "text-teal-700 bg-teal-50 font-medium"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-3">
                Clearwater Group
              </h3>
              <p className="text-sm leading-relaxed">
                Environmental, Resource, and
                <br />
                Sustainability Consulting
              </p>
              <p className="text-sm mt-3">
                229 Tewksbury Ave.
                <br />
                Point Richmond, CA 94801
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <ul className="text-sm space-y-1.5">
                <li>
                  Phone:{" "}
                  <a
                    href="tel:510-307-9943"
                    className="hover:text-white transition-colors"
                  >
                    510-307-9943
                  </a>
                </li>
                <li>
                  Alternate:{" "}
                  <a
                    href="tel:510-590-1099"
                    className="hover:text-white transition-colors"
                  >
                    510-590-1099
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:oj@clearwatergroup.com"
                    className="hover:text-white transition-colors"
                  >
                    oj@clearwatergroup.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-white font-semibold mb-3">Office Hours</h3>
              <p className="text-sm">Monday &ndash; Friday</p>
              <p className="text-sm">9:00 AM &ndash; 5:00 PM</p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Clearwater Group. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
