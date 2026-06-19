import { useEffect, useState, useRef } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  const links = ["About", "Skills", "Projects", "Contact",];

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const text = "<Portfolio />";
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);
  return (
    <nav ref={navRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        {typedText}
        <span className={styles.cursor}></span>
      </div>

      <ul className={`${styles.navLinks} ${open ? styles.active : ""}`}>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} > {link} </a>
          </li>
        ))}

        <button className={styles.themeBtn} onClick={() =>
          setDarkMode(!darkMode)
        } >
          {darkMode ? (<Sun size={20} />) : (<Moon size={20} />
          )}
        </button>
      </ul>

      <button className={styles.mobileBtn} onClick={() => setOpen(!open)}>
        {open ? (<X size={28} />) : (<Menu size={28} />
        )}
      </button>
    </nav>
  );
};
export default Navbar;